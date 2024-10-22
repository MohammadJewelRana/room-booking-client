"use client";

import Image from "next/image";
import React from "react";

import { useGetMyBooking } from "@/hooks/Booking/booking.hook";
import { useUser } from "@/context/user.provider";

const MyBooking = () => {
  const { user } = useUser();

  const { data, isPending } = useGetMyBooking(user?.userId as string);

  const myBookingData = data?.data;

  return (
    <div>
      <div className="bg-slate-700 px-4 py-2 rounded-md">
        <h1 className="text-xl font-bold text-white">My Booking</h1>
      </div>

      <div className=" px-2 py-2 ">
        {myBookingData?.map((item: any) => (
          <div key={item.id} className="  py-2 mt-12">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
              {/* Left side: Room Image and Details */}
              <div className="w-full md:w-1/2">
                <Image
                  src={item?.roomId?.images[0]}
                  alt="Room"
                  className="object-cover w-full h-48 md:h-full" // Adjust height for smaller devices
                  height={200}
                  width={200}
                />
              </div>

              {/* Right side: Booking Details */}
              <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
                {/* Room details */}
                <div className="mb-4">
                  <h2 className="text-2xl font-semibold">
                    {item?.roomId?.roomTitle}
                  </h2>
                  <p className="text-gray-600 mt-2">
                    A spacious and luxurious suite with stunning views.
                  </p>
                </div>

                {/* Booking details */}
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4">
                    Booking Details
                  </h3>

                  {/* Booking details flex container */}
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Check-in Date:</span>
                      <span>
                        {new Date(item?.dates?.startDate).toLocaleDateString(
                          "en-US",
                          { year: "numeric", month: "long", day: "numeric" }
                        )}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span>Check-out Date:</span>
                      <span>
                        {new Date(item?.dates?.endDate).toLocaleDateString(
                          "en-US",
                          { year: "numeric", month: "long", day: "numeric" }
                        )}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span>Room Count:</span>
                      <span>{item?.roomCount}</span>
                    </div>

                    <div className="flex justify-between">
                      <span>Price per Night:</span>
                      <span>${item?.roomRent}</span>
                    </div>

                    <div className="flex justify-between">
                      <span>VAT (10%):</span>
                      <span>${(item?.roomRent * 0.1).toFixed(2)}</span>
                    </div>
                  </div>

                  <hr className="my-2" />

                  {/* Grand total */}
                  <div className="flex justify-between items-center font-semibold">
                    <span>Grand Total:</span>
                    <span>${item?.grandTotal}</span>
                  </div>
                </div>

                {/* Reserve button */}
                <button className="bg-green-600 text-white py-2 px-4 mt-4 rounded-lg hover:bg-green-700">
                  Cancel Booking
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBooking;
