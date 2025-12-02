import Sidebar from "../components/SideBar";
import Header from "../components/Header"
import Cards from "../components/Cards";
import InvoiceDashboard from "../components/InvoiceDashboard";
// import UploadData from "../components/UploadData";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex w-full">
      
      <Sidebar />
    {/* <UploadData /> */}
      <div className="flex-1 ml-0 md:ml-64 bg-[#f8fafc] min-h-screen">
        
        <Header userName="John Doe" />

        <div className="p-6">

      <Cards />
      <InvoiceDashboard />
        </div>

      </div>
    </div>
  );
}
