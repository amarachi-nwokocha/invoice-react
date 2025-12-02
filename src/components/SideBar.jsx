import { useState } from "react";
import { FaBars, FaTimes, FaCog, FaSignOutAlt } from "react-icons/fa";
import { TbSmartHome } from "react-icons/tb";
import { logout } from "../api/auth";
import { useNavigate } from "react-router-dom";
import { CiGrid41 } from "react-icons/ci";
import { FaFileInvoice } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
import { TbMessage2Question } from "react-icons/tb";
import { RiSettingsLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import {  FaChevronDown } from "react-icons/fa";
export default function SideBar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  const menuItems = [
    { name: "Getting Started", icon: <TbSmartHome />, path: "/dashboard" },
    { name: "Overview", icon: <CiGrid41 />, path: "/dashboard" },
    { name: "Accounts", icon: <TbSmartHome />, path: "/dashboard" },
    { name: "Invoice", icon: <FaFileInvoice />, path: "/dashboard" },
    {
      name: "Beneficiary Management",
      icon: <BsPersonFill />,
      path: "/dashboard",
    },
    { name: "Help Center", icon: <TbMessage2Question />, path: "/dashboard" },
    { name: "Settings", icon: <RiSettingsLine />, path: "/dashboard" },
  ];

  return (
    <div className="flex min-h-screen max-w-7xl  text-[#697598]">
      {/* Sidebar */}
     <div
  className={`fixed z-20 top-0 left-0 h-screen w-64 bg-white backdrop-blur-xl 
  border-r border-white/20 shadow-lg font-thin font-neue overflow-y-auto
  transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
  transition-transform duration-300 md:translate-x-0`}
>

        <div className="p-6 flex justify-between items-center md:hidden">
          {/* <h2 className="text-xl font-bold">Menu</h2> */}
          <button onClick={() => setSidebarOpen(false)}>
            <FaTimes />
          </button>
        </div>

        <ul className="mt-10 space-y-4 px-6 font-neue">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className="flex items-center gap-3 hover:text-blue-500 rounded-3xl py-2   hover:border-[#F8F8FB] hover:border-8 hover:border-solid cursor-pointer font-neue"
            >
              {item.icon}
              <span>{item.name}</span>
            </li>
          ))}
          <li
            onClick={handleLogout}
            className="flex items-center gap-3 hover:text-red-400 cursor-pointer mt-6"
          >
            <FaSignOutAlt />
            Logout
          </li>
        </ul>
        <div className="md:hidden flex items-center mt-10 gap-6">
        
                <div className="relative cursor-pointer bg-white p-4 rounded-full">
                  <IoMdNotificationsOutline className="text-[#64748b] text-xl hover:text-[#475569] transition" />
                
                </div>
        
                <div className="flex items-center gap-2 cursor-pointer bg-white p-2 rounded-3xl">
                  <div className="w-10 h-10 rounded-full bg-[#003EFF] text-white flex items-center justify-center font-bold ">
                    {/* {initials} */}
                    JD
                  </div>
        
                  <FaChevronDown className="text-[#475569]" />
                </div>
              </div>
      </div>

      {/* Hamburger button for mobile */}
      {/* Hamburger button for mobile */}
      {!sidebarOpen && (
        <button
          className="absolute top-4 left-4 text-[#697598] text-2xl md:hidden z-30"
          onClick={() => setSidebarOpen(true)}
        >
          <FaBars />
        </button>
      )}
    </div>
  );
}
