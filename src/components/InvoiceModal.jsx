"use client";

import { IoClose } from "react-icons/io5";
import Activity from "./Activity.jsx";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../lib/firebase";
import { useState } from "react";

export default function InvoiceModal({ invoice, onClose }) {
  if (!invoice) return null;

  const [status, setStatus] = useState(invoice.invoice_details.status);

  const handleStatusChange = async (e) => {
    const newStatus = e.target.value;
    setStatus(newStatus);

    try {
      await updateDoc(doc(db, "invoices", String(invoice.id)), {
        "invoice_details.status": newStatus,
      });

      console.log("Updated status to", newStatus);
    } catch (err) {
      console.error("Error updating status:", err);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "PAID":
        return "bg-[#E6FFF0]";
      case "OVERDUE":
        return "bg-red-50";
      case "DRAFT":
        return "bg-gray-100";
      case "PENDING PAYMENT":
        return "bg-amber-50";
      default:
        return "bg-gray-100";
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[999] flex items-center justify-center p-2 sm:p-4">
      {/* MODAL BOX */}
      <div className="bg-white w-full max-w-7xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 relative">
        {/* X BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 text-slate-700 hover:text-slate-900 z-10"
        >
          <IoClose size={24} className="sm:w-7 sm:h-7" />
        </button>

        {/* Header */}
        <div className="mb-6 sm:mb-8 pr-8 md:flex md:justify-between">
          <div >
          <div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">
            Invoice - {invoice.invoice_details.invoice_no}
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            View the details and activity of this invoice
          </p>
          </div>
          
          {/* Status Dropdown */}
          </div>
         

          {/* className="md:flex md:justify-between" */}

          {/* Action Buttons */}
          <div className="mt-4 flex flex-col sm:flex-row gap-2 sm:gap-3">
            <button className="text-[#003EFF] border-2 rounded-full px-4 py-2 hover:bg-gray-50 transition text-sm w-full sm:w-auto">
              Download As PDF
            </button>
            <button className="bg-[#003EFF] text-white rounded-full px-4 py-2 hover:bg-blue-600 transition text-sm w-full sm:w-auto">
              Send Invoice
            </button>
            <button className="border rounded-full px-4 py-2 hover:bg-gray-100 transition text-sm w-full sm:w-auto">
              More
            </button>
          </div>
        </div>
 <div className="mt-3 sm:mt-4">
            <select
              value={status}
              onChange={handleStatusChange}
              className="appearance-none border border-gray-300 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 pr-8 sm:pr-10 bg-[#F2FBFF] focus:outline-none focus:ring-2 text-[#003EFF] text-sm w-full sm:w-auto"
            >
              <option value="DRAFT">DRAFT</option>
              <option value="PENDING PAYMENT">PENDING PAYMENT</option>
              <option value="PAID">PAID</option>
              <option value="OVERDUE">OVERDUE</option>
            </select>
          </div>
        {/* Reminders */}
        <div className="space-y-2 my-4 border rounded-xl p-3 sm:p-4">
          <p className="text-xs sm:text-sm font-medium text-gray-600 uppercase tracking-wide mb-2">
            Reminders
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              { label: '14 days before', active: true },
              { label: '7 days before', active: true },
              { label: '3 days before', active: false },
              { label: '24 hrs before', active: false },
              { label: 'On due date', active: false },
            ].map((reminder, index) => (
              <button
                key={index}
                className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium flex items-center gap-1.5 transition-colors ${
                  reminder.active
                    ? 'bg-green-50 text-green-700 border border-green-200'
                    : 'bg-gray-50 text-gray-700 border border-gray-200 hover:bg-gray-100'
                }`}
              >
                {reminder.label}
                {reminder.active && (
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* LEFT SIDE */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6 border rounded-xl p-4 sm:p-6 md:p-10">
            {/* Sender + Customer */}
            <div className={`p-4 sm:p-6 rounded-2xl sm:rounded-3xl ${getStatusColor(status)}`}>
              <div className="flex flex-col sm:flex-row justify-between gap-6">
                {/* Sender */}
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-900 mb-2 text-sm">SENDER</h3>
                  <div className="flex gap-3 sm:gap-4 items-start">
                    <img
                      src="/invoice.png"
                      alt="invoice header"
                      className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 rounded-xl"
                    />
                    <div className="text-xs sm:text-sm space-y-1">
                      <p className="font-medium text-lg sm:text-xl text-slate-900">
                        {invoice.sender.name}
                      </p>
                      <p className="text-[#697598]">{invoice.sender.phone}</p>
                      <p className="text-[#697598]">{invoice.sender.address}</p>
                      <p className="text-[#697598] break-all">{invoice.sender.email}</p>
                    </div>
                  </div>
                </div>

                {/* Customer */}
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-900 mb-2 text-sm">CUSTOMER</h3>
                  <div className="text-xs sm:text-sm space-y-1">
                    <p className="font-medium text-slate-900">{invoice.customer.name}</p>
                    <p className="text-[#697598]">{invoice.customer.phone}</p>
                    <p className="text-[#697598] break-all">{invoice.customer.email}</p>
                  </div>
                </div>
              </div>

              {/* Items Table */}
              <div className="p-3 sm:p-6 border rounded-xl overflow-x-auto mt-4 sm:mt-6">
                <h3 className="font-semibold text-slate-900 mb-3 sm:mb-4 text-sm sm:text-base">Items</h3>
                
                {/* Mobile: Card View */}
                <div className="block sm:hidden space-y-3">
                  {invoice.items.map((item, index) => (
                    <div key={index} className="border border-slate-200 rounded-lg p-3 space-y-2">
                      <div className="font-medium text-slate-900 text-sm">{item.description}</div>
                      <div className="text-xs text-slate-500">
                        {item.subtitle || 'Text voluptatem accusantium'}
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-xs pt-2">
                        <div>
                          <span className="text-slate-500">Qty:</span>
                          <span className="ml-1 text-slate-900 font-medium">{item.quantity}</span>
                        </div>
                        <div>
                          <span className="text-slate-500">Unit:</span>
                          <span className="ml-1 text-slate-900 font-medium">${item.unit_price.toLocaleString()}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-slate-500">Total:</span>
                          <span className="ml-1 text-slate-900 font-medium">${item.total_price.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Desktop: Table View */}
                <table className="hidden sm:table w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left py-3 px-3 font-normal text-slate-600"></th>
                      <th className="text-right py-3 px-3 font-normal text-slate-600">Quantity</th>
                      <th className="text-right py-3 px-3 font-normal text-slate-600">Unit Price</th>
                      <th className="text-right py-3 px-3 font-normal text-slate-600">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {invoice.items.map((item, index) => (
                      <tr key={index} className="border-b border-slate-100">
                        <td className="py-4 px-3">
                          <div className="font-medium text-slate-900">{item.description}</div>
                          <div className="text-xs text-slate-500 mt-1">
                            {item.subtitle || 'Text voluptatem accusantium'}
                          </div>
                        </td>
                        <td className="text-right py-4 px-3 text-slate-900">{item.quantity}</td>
                        <td className="text-right py-4 px-3 text-slate-900">
                          ${item.unit_price.toLocaleString()}
                        </td>
                        <td className="text-right py-4 px-3 font-medium text-slate-900">
                          ${item.total_price.toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* Summary */}
                <div className="mt-6 sm:mt-8 space-y-2 sm:space-y-3">
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-slate-400 uppercase tracking-wide">Subtotal</span>
                    <span className="font-medium text-slate-900">
                      ${invoice.subtotal.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-slate-400 uppercase tracking-wide">Discount (2.5%)</span>
                    <span className="font-medium text-slate-900">
                      ${invoice.discount?.toLocaleString() || '167.430'}
                    </span>
                  </div>

                  <div className="flex justify-between pt-3 sm:pt-4 border-t border-slate-200">
                    <span className="font-bold text-slate-900 text-sm sm:text-base">TOTAL AMOUNT DUE</span>
                    <span className="font-bold text-slate-900 text-lg sm:text-xl">
                      ${invoice.subtotal.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Information */}
            <div className="p-4 sm:p-6 bg-slate-50 rounded-xl">
              <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3 sm:mb-4">
                Payment Information
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6">
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">
                    Account Name
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-slate-900">
                    1023902390
                  </div>
                </div>
                
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">
                    Account Number
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-slate-900">
                    March 30th, 2023
                  </div>
                </div>
                
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">
                    ACH Routing No
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-slate-900">
                    May 19th, 2023
                  </div>
                </div>
                
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">
                    Bank Name
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-slate-900">
                    USD ($)
                  </div>
                </div>
                
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">
                    Bank Address
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-slate-900">
                    1023902390
                  </div>
                </div>
                
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">
                    Account Number
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-slate-900">
                    March 30th, 2023
                  </div>
                </div>
              </div>
            </div>

            {/* Note */}
            <div className="bg-[#F6F8FA] p-3 sm:p-4 rounded-xl">
              <h2 className="text-[#B7BDCF] text-xs sm:text-sm font-medium">NOTE</h2>
              <p className="text-[#666F77] text-xs sm:text-sm mt-1">Thank you for your patronage</p>
            </div>
          </div>

          {/* SIDEBAR */}
          <div>
            <h2 className="font-semibold mb-4 sm:mb-6 text-lg sm:text-xl">Invoice Activity</h2>
            <Activity />
          </div>
        </div>
      </div>
    </div>
  );
}