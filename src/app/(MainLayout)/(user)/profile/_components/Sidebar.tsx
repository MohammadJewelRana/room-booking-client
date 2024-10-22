"use client";
import Image from "next/image";
import img from "@/assets/reg/login.png";
import { useUser } from "@/context/user.provider";

const Sidebar = () => {
  const { user } = useUser();

  return (
    <div className="w-full    min-h-screen bg-slate-700 p-4 border rounded-lg text-white">
      {/* Profile Section */}
      <div className="flex flex-col items-center mb-6">
        <Image
          src={img}
          alt="Profile"
          className="w-24 h-24 rounded-full mb-4"
        />
        <h2 className="text-xl font-semibold"> {user?.name || "Loading..."}</h2>
        <p className="text-white">{user?.email}</p>
      </div>

      {/* Additional Information */}
      <div className="space-y-4">
        <div className="border-t pt-4">
          <h3 className="text-lg font-semibold">Role</h3>
          <p className="text-white">Frontend Developer</p>
        </div>

        <div className="border-t pt-4">
          <h3 className="text-lg font-semibold">Location</h3>
          <p className="text-white">New York, USA</p>
        </div>

        <div className="border-t pt-4">
          <h3 className="text-lg font-semibold">Member Since</h3>
          <p className="text-white">January 2021</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
