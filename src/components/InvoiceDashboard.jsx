import { useState, useEffect } from "react";
import InvoiceModal from "./InvoiceModal";
import Activity from "./Activity";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../lib/firebase"; // adjust the path to your firebase config

const InvoiceDashboard = () => {
  const [invoices, setInvoices] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [loading, setLoading] = useState(false)

const displayedInvoices = showAll ? invoices : invoices.slice(0, 5);
const grouped = [...new Set(displayedInvoices.map(i => i.dateGroup))];


 useEffect(() => {
    const unsub = onSnapshot(collection(db, "invoices"), (snapshot) => {
      const data = snapshot.docs.map(doc => ({
        id: doc.id, // Firestore document ID
        ...doc.data()
      }));
      setInvoices(data);
    });

    return () => unsub(); // cleanup listener
  }, []);

 if (loading) return <div>Loading invoices...</div>;

  const getStatusColor = (status) => {
    switch (status) {
      case "PAID":
        return "bg-[#E6FFF0] text-[#129043]";
      case "OVERDUE":
        return "bg-red-50 text-red-600";
      case "DRAFT":
        return "bg-gray-100 text-gray-700";
      case "PENDING PAYMENT":
        return "bg-amber-50 text-amber-700";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };
  

  return (
   <div className="grid grid-cols-1 lg:grid-cols-7 gap-6 p-6">

  {/* LEFT SIDE — RECENT INVOICES */}
  <div className="bg-white rounded-2xl shadow-sm p-6 lg:col-span-4">
  <div className="flex items-center justify-between mb-6">
    <h2 className="text-lg font-semibold">Recent Invoices</h2>
    <button
      onClick={() => setShowAll(!showAll)}
      className="px-4 py-2 text-sm border font-semibold text-[#003EFF] rounded-full hover:bg-gray-50"
    >
      {showAll ? "Hide" : "View All Invoices"}
    </button>
  </div>
  <div className="space-y-6 max-h-[500px] max-w-[900px] overflow-y-auto">
    {grouped.map((group) => (
      <div key={group}>
        <p className="text-sm text-gray-500 mb-4 font-medium">{group}</p>
        {displayedInvoices
          .filter((i) => i.dateGroup === group)
          .map((inv, index) => (
            <div
              key={index}
              onClick={() => setSelectedInvoice(inv)}
              className="flex items-center justify-between p-3 hover:rounded-full hover:bg-[#F6F8FA] w-[400px] md:w-full"
            >
              {/* Invoice Info */}
              <div>
                <p className="text-sm font-medium ">Invoice -</p>
                <p className="font-medium">{inv.invoice_details.invoice_no}</p>
              </div>
              {/* Due Date */}
              <div>
                <p className="text-sm text-[#697598]">DUE DATE</p>
                <p className="text-[#697598] font-bold text-sm">{inv.invoice_details.due_date}</p>
              </div>
              {/* Amount & Status */}
              <div className="w-32 text-right">
                <p className="font-semibold">${inv.subtotal}</p>
                <p
                  className={`inline-flex px-3 py-1 rounded-full text-[10px] font-medium ${getStatusColor(
                    inv.invoice_details.status
                  )}`}
                >
                  {inv.invoice_details.status}
                </p>
              </div>
            </div>
          ))}
      </div>
    ))}
  </div>
</div>


  {/* RIGHT SIDE — RECENT ACTIVITIES */}
  <div className="bg-white p-6 rounded-3xl shadow-sm w-full lg:col-span-3">
    <div className="flex justify-between items-center mb-5">
      <h2 className="font-semibold text-lg">Recent Activities</h2>
      <button className="px-4 py-2 text-xs font-semibold border text-[#003EFF] rounded-full hover:bg-gray-50">
        VIEW ALL
      </button>
    </div>

    {/* Activity List */}
  <Activity />
  </div>
  <InvoiceModal
  invoice={selectedInvoice}
  onClose={() => setSelectedInvoice(null)}
/>

</div>

  );
};

export default InvoiceDashboard;
