import React from "react";
import SwiperCard from "./SwiperCard";
import { FaArrowRight, FaBed, FaPeopleArrows } from "react-icons/fa";
import Link from "next/link";

const SingleRoomCard = ({ singleRoomData }: any) => {
  return (
    <div>
      <div className="w-[370px] shadow-sm  p-2">
        {/* image  */}
        <div>
          <SwiperCard imageArray={singleRoomData?.roomImages} />
        </div>
        <div className="flex justify-between items-center gap-2">
          <div className="flex gap-6 items-center mb-4">
            <div className="flex items-center gap-2">
              <FaPeopleArrows />
              <p className="text-[12px] text-gray-500">4 Guests</p>
            </div> |
            <div className="flex items-center gap-2">
              <FaBed />
              <p className="text-[12px] text-gray-500">2 Beds</p>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-xl font-normal mb-2">Presidental Suite</h1>
          <p className="text-gray-500 text-[12px] text-justify">
            {" "}
            The Presidential Suite is the pinnacle of luxury and sophistication,
            offering an unparalleled level
          </p>
        </div>
        <div className="flex justify-between items-center   py-2">
          <Link href={`/room/${singleRoomData?.id}`} className="flex items-center gap-2 shadow-md px-4 py-2 hover:bg-gray-100 duration-300 hover:transition-all rounded-md">
            <button className=" text-md     text-blue-600">
             Book Now  
            </button>
            <FaArrowRight/>
          </Link>
          <div className="bg-slate-300 px-4 py-2 rounded-md">
            <p>
              From <span>${"1000"} </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleRoomCard;
