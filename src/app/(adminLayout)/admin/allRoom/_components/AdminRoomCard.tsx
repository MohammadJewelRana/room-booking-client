"use client";

import SwiperCard from "@/components/home/Card/SwiperCard";
import Link from "next/link";
import React, { useState } from "react";
import {
  FaArrowRight,
  FaBed,
  FaPeopleArrows,
  FaEye,
  FaEdit,
  FaTrash,
} from "react-icons/fa";
import img1 from "@/assets/banner/your_comfort_img1.png";
import img2 from "@/assets/banner/your_comfort_img2.png";
import img3 from "@/assets/banner/banner1.jpg";
import { useDeleteRoom } from "@/hooks/deleteRoom.hook";
import Swal from "sweetalert2";
import { useGetAllRoom } from "@/hooks/getAllRoom.hook";
import Loading from "@/components/UI/Loading";

const AdminRoomCard = () => {
  const imageData = [img1, img2, img3];
  const [hoveredRoomId, setHoveredRoomId] = useState<string | null>(null);

  const {
    data: roomAllData,
    isLoading,
    isError,
    error,
    refetch,
  } = useGetAllRoom();
  const roomData = roomAllData?.data;

  const deleteRoomMutation = useDeleteRoom();
  const handleDelete = (roomId: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteRoomMutation.mutate(roomId);
        refetch();
      }
    });
  };

  return (
    <>
      {isLoading && <Loading />}

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {roomData?.map((item: any) => (
          <div
            key={item?._id}
            className="relative w-[310px] md:w-[400px] shadow-sm p-2 transition-all duration-300"
            onMouseEnter={() => setHoveredRoomId(item?._id)} // Set the hovered room ID
            onMouseLeave={() => setHoveredRoomId(null)} // Reset on mouse leave
          >
            {/* Image */}
            <div>
              <SwiperCard imageArray={item?.images} />
            </div>

            <div
              className={`flex justify-between items-center gap-2 ${hoveredRoomId === item?._id ? "blur-sm" : ""}`} // Check if the current item is hovered
            >
              <div className="flex gap-6 items-center mb-4">
                <div className="flex items-center gap-2">
                  <FaPeopleArrows />
                  <p className="text-[12px] text-gray-500">
                    {item?.memberCount} Guests
                  </p>
                </div>
                |
                <div className="flex items-center gap-2">
                  <FaBed />
                  <p className="text-[12px] text-gray-500">
                    {item?.bedCount} Beds
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h1 className="text-xl font-normal mb-2">{item?.roomTitle}</h1>
              <p className="text-gray-500 text-[12px] text-justify">
                The Presidential Suite is the pinnacle of luxury and
                sophistication, offering an unparalleled level
              </p>
            </div>

            <div className="bg-slate-300 px-4 py-2 rounded-md float-right">
              <p>
                From <span>${item?.rent}</span>
              </p>
            </div>

            {/* Icons for Hover Effect */}
            {hoveredRoomId === item?._id && (
              <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 text-white rounded-md z-10 cursor-pointer">
                <div className="flex space-x-4">
                  <button title="View" className="flex items-center">
                    <Link href={`/room/${item?._id}`}>
                      <FaEye className="text-xl" />
                    </Link>
                  </button>
                  <button title="Edit" className="flex items-center">
                    <FaEdit className="text-xl" />
                  </button>
                  <button
                    onClick={() => handleDelete(item?._id)} // Pass the correct room ID
                    title="Delete"
                    className="flex items-center"
                  >
                    <FaTrash className="text-xl" />
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default AdminRoomCard;
