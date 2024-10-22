import React from "react";
import MyBooking from "./_components/MyBooking";
import { metaDataSEO } from "@/utils/MetaData";
export const metadata = metaDataSEO({
  tabTitle: "roomBooker | Profile",
  des: "Welcome to our room booking website.user profile page  ",
});
const page = () => {
  return (
    <div>
      <MyBooking />
    </div>
  );
};

export default page;
