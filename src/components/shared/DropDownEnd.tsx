"use client";

import { useUser } from "@/app/context/user.provider";
import { logout } from "@/services/AuthService";
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import React from "react";

const DropDownEnd = () => {
  const { user, setIsLoading: userLoading } = useUser();
  console.log(user);

  const router = useRouter();

  const pathname = usePathname();

  const handleLogout = () => {
    logout();
    userLoading(true);

  
    // if (protectedRoutes.some((route) => pathname.match(route))) {
    //   router.push("/");
    // }
    
  };

  return (
    <div>
      {user ? (
        <>
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
                <Link href="/" onClick={() => handleLogout()}>
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <>
          <Link href="/login">
            <button className="w-full bg-gradient-to-r from-yellow-500 to-red-600 text-white font-semibold py-2  rounded-lg shadow-md transition duration-300 hover:shadow-lg hover:scale-105 px-4">
              Login
            </button>
          </Link>
        </>
      )}
    </div>
  );
};

export default DropDownEnd;
