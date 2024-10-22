/* eslint-disable jsx-a11y/label-has-associated-control */
"use client";

import React, { useState, useEffect } from "react";
import { addDays } from "date-fns";
import DatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css"; // Import CSS for date picker
import { formatToISO } from "@/utils/DateToIso";
import { useGetSingleRoom } from "@/hooks/getSingleRoom.hook";
import { useUser } from "@/context/user.provider";

const Reservation = ({ id }: { id: string }) => {
    const [reservedDates, setReservedDates] = useState<Date[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0); // New state for grand total

  const {user}=useUser();
  const { data, isLoading, isError, error } = useGetSingleRoom(id as string);
  const singleData = data?.data;
//   console.log(singleData);

  // Dummy data for reserved dates
  const reservedDatesData = [new Date("2024-10-20"), new Date("2024-10-21")];

  const vatPercentage = 0.1; // 10% VAT

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const checkInDate = watch("checkInDate");
  const checkOutDate = watch("checkOutDate");

  const roomCount = watch("roomCount");
  const numberOfPersons = watch("numberOfPersons");

  useEffect(() => {
    setReservedDates(reservedDatesData); // Load reserved dates data
  }, []);

  // Function to check if a date is reserved
  const isReserved = (date:any) => {
    return reservedDates.some(
      (reservedDate) => date.getTime() === reservedDate.getTime()
    );
  };

  // Calculate total price when roomCount or roomType changes
  useEffect(() => {
    const pricePerRoom = singleData?.rent || 0;
    const totalRoomPrice = pricePerRoom * roomCount;
    setTotalPrice(totalRoomPrice);

    // VAT and rent cost calculations
    const vatAmount = totalRoomPrice * vatPercentage;
    const finalTotal = totalRoomPrice + vatAmount;
    setGrandTotal(finalTotal);
  }, [roomCount]);
  
  console.log(user);
  const onSubmit = (data:any) => {

 

    const bookingData={
      userId:user?.userId,
      roomId:singleData?._id,
      dates:{
        startDate:formatToISO(data.checkInDate),
        endDate:formatToISO(data.checkOutDate)
      },
      roomCount,
      roomRent:singleData?.rent,
      vatPercentage,
      grandTotal
    }
    console.log(bookingData);

    // Handle reservation submission (e.g., send to an API)
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg text-white">
      <h2 className="text-xl font-semibold mb-4">Reservation</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Check-In Date */}
        <div className="mb-4">
          <label className="block mb-2">Check-In Date:</label>
          <DatePicker
            selected={checkInDate}
            onChange={(date) => setValue("checkInDate", date)}
            filterDate={(date) => !isReserved(date)}
            placeholderText="Select a check-in date"
            className="p-2 rounded-md w-full"
            minDate={new Date()} // Prevent past date selection
          />
          {errors.checkInDate && (
            <p className="text-red-500">Check-in date is required</p>
          )}
        </div>

        {/* Check-Out Date */}
        <div className="mb-4">
          <label className="block mb-2">Check-Out Date:</label>
          <DatePicker
            selected={checkOutDate}
            onChange={(date) => setValue("checkOutDate", date)}
            filterDate={(date) => date > checkInDate && !isReserved(date)}
            placeholderText="Select a check-out date"
            className="p-2 rounded-md w-full"
            minDate={addDays(checkInDate, 1)} // Ensure check-out is after check-in
          />
          {errors.checkOutDate && (
            <p className="text-red-500">Check-out date is required</p>
          )}
        </div>

       

        {/* Room Count */}
        <div className="mb-4">
          <label className="block mb-2">Room Count:</label>
          <select
            {...register("roomCount", { required: true })}
            className="p-2 rounded-md w-full"
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
          </select>
          {errors.roomCount && (
            <p className="text-red-500">Select room count</p>
          )}
        </div>

        {/* Number of Persons */}
        <div className="mb-4">
          <label className="block mb-2">Number of Persons:</label>
          <input
            type="number"
            {...register("numberOfPersons", { required: true, min: 1 })}
            defaultValue={1}
            min="1"
            className="p-2 rounded-md w-full"
          />
          {errors.numberOfPersons && (
            <p className="text-red-500">Enter a valid number of persons</p>
          )}
        </div>

        {/* Price Breakdown */}
        <div className="bg-gray-900 p-4 rounded-md mt-4">
          <h3 className="text-lg font-semibold pb-4">Price Breakdown:</h3>
          <p className="py-3">
            Room Price{" "}
            <span className="text-[12px]">
              {singleData?.rent} x{roomCount}
            </span>{" "}
            : {singleData?.rent * roomCount}
          </p>
          <p className="py-2">
            VAT (10%): $ {singleData?.rent * roomCount * vatPercentage}
          </p>
          <hr />
          <p className="text-xl font-semibold mt-2">
            Grand Total: ${" "}
            {singleData?.rent * roomCount +
              singleData?.rent * roomCount * vatPercentage}
          </p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md"
        >
          Reserve
        </button>
      </form>
    </div>
  );
};

export default Reservation;
