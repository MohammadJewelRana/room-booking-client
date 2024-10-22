import React from "react";
import Dashboard from "./_components/Dashboard";
import { metaDataSEO } from "@/utils/MetaData";
export const metadata = metaDataSEO({
  tabTitle: "roomBooker | Admin",
  des: "Welcome to our room booking website. Admin Panel",
});
const page = () => {
  return (
    <div>
      <Dashboard />
    </div>
  );
};

export default page;
