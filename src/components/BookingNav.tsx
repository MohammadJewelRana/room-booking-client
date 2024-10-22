"use client";

import { useUser } from "@/context/user.provider";
import Link from "next/link";
import { FaBook } from "react-icons/fa";

const BookingNav = () => {
  const { user } = useUser();

  return (
    <>
      {user?.role==='user' && (
        <li className="capitalize  -mt-[14px]  ">
          <FaBook className="text-white" />
          <Link href="/profile">
            {" "}
            <FaBook /> My Booking
          </Link>
        </li>
      )}
    </>
  );
};

export default BookingNav;
