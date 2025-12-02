import { FaChevronDown } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";

export default function Header({ userName = "John Doe" }) {
  // Extract initials
  const getInitials = (name) => {
    const parts = name.trim().split(" ");
    if (parts.length === 1) return parts[0][0].toUpperCase();
    return (parts[0][0] + parts[1][0]).toUpperCase();
  };

  const initials = getInitials(userName);

  return (
    <header className="flex items-center justify-between px-6 py-4">

      {/* INVOICE TITLE */}
      <h1 className="
        text-2xl font-semibold text-[#1e293b] tracking-wide 
        ml-auto md:ml-0
      ">
        INVOICE
      </h1>

      {/* RIGHT SIDE ICONS – hidden on mobile */}
      <div className="hidden md:flex items-center gap-6">

        {/* Notification Icon */}
        <div className="relative cursor-pointer bg-white p-4 rounded-full shadow">
          <IoMdNotificationsOutline className="text-[#64748b] text-xl" />
        </div>

        {/* Profile + Dropdown */}
        <div className="flex items-center gap-2 cursor-pointer bg-white p-2 rounded-3xl shadow">
          <div className="w-10 h-10 rounded-full bg-[#003EFF] text-white flex items-center justify-center font-bold">
            {initials}
          </div>

          <FaChevronDown className="text-[#475569]" />
        </div>
      </div>

    </header>
  );
}
