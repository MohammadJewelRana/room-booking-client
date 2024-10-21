 

import { ReactNode } from "react";
import AdminSidebar from "./_components/AdminSidebar";
import AdminNavbar from "./_components/AdminNavbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <AdminNavbar/>
       <div className="flex     items-start  gap-8 mb-24">
      {/* Left Side */}
      <div className="  md:block lg:w-1/12  h-screen bg-slate-900 text-white">
        <AdminSidebar />
      </div>

      {/* Right Side */}
      <div className=" sm:w-11/12 ">{children}</div>
    </div>
    </div>
  );
};

export default Layout;
