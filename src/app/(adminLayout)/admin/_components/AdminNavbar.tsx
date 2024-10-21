/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import Image from "next/image";
import React from "react";
import logo from "../../../../../public/logo.avif";
import Link from "next/link";
 

const AdminNavbar = () => {
  return (
    <div>
      <div className="navbar bg-slate-900 text-white  px-2 lg:px-12 ">
        <div className="navbar-start">
          <Link href="/" className="btn btn-ghost text-xl">
            <Image
              src={logo}
              height={200}
              width={200}
              alt="logo"
              className="text-white h-8 w-8 rounded-full bg-white p-2"
            />
            <p className="text-medium text-yellow-500">
              room <span className="text-lg text-red-600 -ml-1">Booker</span>
            </p>
          </Link>
        </div>

        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
