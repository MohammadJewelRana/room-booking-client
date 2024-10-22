"use client";
import { ReactNode, useState } from "react";
import AdminSidebar from "./_components/AdminSidebar";
import AdminNavbar from "./_components/AdminNavbar";
import {
  FaBars,
  FaTimes,
  FaTachometerAlt,
  FaUsers,
  FaShoppingCart,
  FaCog,
} from "react-icons/fa";

const Layout = ({ children }: { children: ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <AdminNavbar />
      <div className="flex min-h-screen bg-gray-100">
        {/* Sidebar */}
        <div
          className={`fixed z-10 inset-0 w-64 bg-gray-800 text-gray-200 flex flex-col transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0`}
        >
          <div className="p-4 flex justify-between items-center text-2xl font-bold text-center">
            {/* Close icon for the sidebar */}
            <button className="text-gray-400 lg:hidden" onClick={toggleSidebar}>
              <FaTimes size={24} />
            </button>
          </div>
          <AdminSidebar />
        </div>

        {/* Main content area */}
        <div className="flex-1 p-2  lg:p-8">
          {/* Top bar */}
          <header className="flex justify-between items-center py-4 px-6 bg-white shadow">
            <div className="flex items-center space-x-4">
              <button
                className="text-gray-500 focus:outline-none lg:hidden"
                onClick={toggleSidebar}
              >
                <FaBars size={24} />
              </button>
              <div className="text-lg font-semibold"> Admin dashboard</div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 bg-blue-600 text-white rounded">
                Logout
              </button>
            </div>
          </header>

          <div className="py-8 mt-8 bg-white shadow  px-6">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
