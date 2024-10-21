/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import Link from "next/link";
import React from "react";

const DropDownEnd = () => {
    
  return (
    <div>
      <div className="dropdown dropdown-end  ">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar "
        >
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-slate-700 rounded-box z-[1] mt-3 w-52 p-2 shadow"
        >
          <li>
            <Link href="/" className="justify-between">
              Profile
              <span className="badge">New</span>
            </Link>
          </li>
          <li>
            <Link href="/">Settings</Link>
          </li>
          <li>
            <Link href="/">Logout</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DropDownEnd;
