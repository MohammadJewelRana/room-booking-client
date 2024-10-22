/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import Image from "next/image";
import Link from "next/link";

import React from "react";
import { FaHome, FaBed, FaInfoCircle, FaPhone, FaBlog } from "react-icons/fa";

import logo from "../../../public/next.svg";
import DropDownEnd from "./DropDownEnd";
import BookingNav from "../BookingNav";
const Navbar = () => {
  const navItemData = [
    { title: "home", path: "/", iconNav: <FaHome /> },
    {
      title: "rooms",
      path: "/room",
      iconNav: <FaBed />,
      // subItems: [
      //   { title: "single", path: "/", iconNav: <FaBed /> },
      //   { title: "double", path: "/", iconNav: <FaBed /> },
      // ],
    },
    { title: "about", path: "/about", iconNav: <FaInfoCircle /> },
    { title: "contact", path: "/contact", iconNav: <FaPhone /> },
    { title: "blog", path: "/blog", iconNav: <FaBlog /> },
  ];

  const navItems = (
    <>
      {navItemData?.map((item) => (
        <>
          <li className="capitalize flex mb-2  lg:-mb-2">
            <Link href={item?.path}>
              {item?.iconNav} {item?.title}
            </Link>
          </li>
        </>
      ))}
     <BookingNav/>
    </>
  );

  return (
    <div className="">
      <div className="navbar fixed top-0 left-0 w-full bg-slate-900 text-white z-50    ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content  bg-slate-700 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navItems}
            </ul>
          </div>

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
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          <DropDownEnd />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
