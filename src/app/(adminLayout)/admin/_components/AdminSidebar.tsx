/* eslint-disable jsx-a11y/no-static-element-interactions */
"use client";

import React, { useState } from "react";
import {
  FaTachometerAlt,
  FaBed,
  FaCogs,
  FaChartBar,
  FaSignOutAlt,
  FaBars,
  FaTimes, // Import FaTimes for the close (cross) icon
} from "react-icons/fa";
import img from "@/assets/reg/login.png";
import Image from "next/image";

const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // Sidebar is closed by default on small devices

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    if (window.innerWidth < 640) {
      setIsOpen(false); // Hide sidebar on small screens after clicking a link
    }
  };

  return (
    <>
      {/* Hamburger Icon for small devices */}
      <div className="p-4 sm:hidden">
        <button onClick={toggleSidebar} className="text-white">
          <FaBars size={24} />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 bg-slate-900 text-white transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0 sm:static sm:w-64 w-full sm:w-64 h-full`}
      >
        {/* Close Button for Small Devices */}
        <div className="p-4 sm:hidden flex justify-end">
          <button onClick={toggleSidebar} className="text-white">
            <FaTimes size={24} /> {/* Close (cross) icon */}
          </button>
        </div>

        {/* Sidebar Content */}
        <div className="flex flex-col h-screen px-8 py-4">
          {/* Admin Profile */}
          <div className="flex flex-col items-center">
            <Image
              src={img}
              alt="Admin"
              className="w-16 h-16 rounded-full mb-4"
            />
            <h2 className="text-xl font-semibold">Admin Name</h2>
            <p className="text-gray-400">admin@example.com</p>
          </div>

          {/* Sidebar Links */}
          <nav className="flex flex-col space-y-4 mt-8">
            <a
              href="#dashboard"
              onClick={handleLinkClick}
              className="flex items-center space-x-2 text-gray-300 hover:text-white"
            >
              <FaTachometerAlt />
              <span>Dashboard</span>
            </a>
            <a
              href="#add-rooms"
              onClick={handleLinkClick}
              className="flex items-center space-x-2 text-gray-300 hover:text-white"
            >
              <FaBed />
              <span>Add Rooms</span>
            </a>
            <a
              href="#settings"
              onClick={handleLinkClick}
              className="flex items-center space-x-2 text-gray-300 hover:text-white"
            >
              <FaCogs />
              <span>Settings</span>
            </a>
            <a
              href="#analytics"
              onClick={handleLinkClick}
              className="flex items-center space-x-2 text-gray-300 hover:text-white"
            >
              <FaChartBar />
              <span>Analytics</span>
            </a>
            <a
              href="#logout"
              onClick={handleLinkClick}
              className="flex items-center space-x-2 text-gray-300 hover:text-white"
            >
              <FaSignOutAlt />
              <span>Logout</span>
            </a>
          </nav>
        </div>
      </div>

      {/* Overlay when sidebar is open on small devices */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black opacity-50 z-40 sm:hidden"
        />
      )}
    </>
  );
};

export default AdminSidebar;
