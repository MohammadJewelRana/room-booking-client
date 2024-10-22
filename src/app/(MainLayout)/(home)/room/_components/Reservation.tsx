/* eslint-disable padding-line-between-statements */
/* eslint-disable jsx-a11y/label-has-associated-control */
"use client";

import { addDays, differenceInDays } from "date-fns";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // Main style
import "react-date-range/dist/theme/default.css"; // Theme CSS
import { formatToISO } from "@/utils/DateToIso";
import { useGetSingleRoom } from "@/hooks/getSingleRoom.hook";
import { useUser } from "@/context/user.provider";
import { useCreateBooking } from "@/hooks/Booking/booking.hook";
import Swal from "sweetalert2";

const Reservation = ({ id }: { id: string }) => {
  const [reservedDates, setReservedDates] = useState<Date[]>([]);
  const [grandTotal, setGrandTotal] = useState(0);
  const [totalDay, setTotalDay] = useState(0);
  const [showDateModal, setShowDateModal] = useState(false); // For modal visibility

  const { user } = useUser();
  const { data, isLoading, isError, error } = useGetSingleRoom(id as string);
  const singleData = data?.data;

  const vatPercentage = 0.1; // 10% VAT

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: addDays(new Date(), 1),
    key: "selection",
  });

  const roomCount = watch("roomCount");

  const reservedDatesData = [new Date("2024-10-20"), new Date("2024-10-21")];

  useEffect(() => {
    setReservedDates(reservedDatesData); // Set reserved dates
  }, []);

  // Function to check if a date is reserved
  const isReserved = (date: Date) => {
    return reservedDates.some(
      (reservedDate) => date.getTime() === reservedDate.getTime()
    );
  };

  useEffect(() => {
    const { startDate, endDate } = dateRange;
    if (startDate && endDate && roomCount && singleData) {
      const totalDays = differenceInDays(endDate, startDate) || 1;
      setTotalDay(totalDays);

      const pricePerRoom = singleData?.rent || 0;
      const totalRoomPrice = pricePerRoom * roomCount * totalDays;

      const vatAmount = totalRoomPrice * vatPercentage;
      const finalGrandTotal = totalRoomPrice + vatAmount;

      setGrandTotal(finalGrandTotal);
    }
  }, [dateRange, roomCount, singleData]);

  const { mutate: handleCreateBooking, isPending } = useCreateBooking();

  const onSubmit = (data: any) => {
    const bookingData = {
      userId: user?.userId,
      roomId: singleData?._id,
      dates: {
        startDate: formatToISO(dateRange.startDate),
        endDate: formatToISO(dateRange.endDate),
      },
      roomCount,
      roomRent: singleData?.rent,
      vatPercentage,
      grandTotal,
    };

    // console.log(bookingData);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Reserve it!",
    }).then((result) => {
      if (result.isConfirmed) {
        handleCreateBooking(bookingData, {
          onSuccess: () => {
            Swal.fire({
              title: "Done!",
              text: "Booking Successful!",
              icon: "success",
            });
          },
          onError: (error) => {
            Swal.fire({
              title: "Error!",
              text: `Booking failed: ${error.message}`,
              icon: "error",
            });
          },
        });
      }
    });
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg text-white">
      <h2 className="text-xl font-semibold mb-4">Reservation</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Button to open date picker modal */}
        <div className="mb-4">
          <button
            type="button"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={() => setShowDateModal(true)} // Open modal
          >
            Select Check-In and Check-Out Dates
          </button>
          {errors.checkInDate && (
            <p className="text-red-500">
              Check-in and check-out dates are required
            </p>
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

        {/* Price Breakdown */}
        <div className="bg-gray-900 p-4 rounded-md mt-4">
          <h3 className="text-lg font-semibold pb-4">Price Breakdown:</h3>

          {/* Display Selected Dates */}
          <div className="flex justify-between items-center py-2">
            <span>Check-In:</span>
            <span>{dateRange.startDate.toLocaleDateString()}</span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span>Check-Out:</span>
            <span>{dateRange.endDate.toLocaleDateString()}</span>
          </div>

          <div className="flex justify-between items-center py-2">
            <span>Room Price:</span>
            <span>
              ${singleData?.rent || 0} x {roomCount || 1}
            </span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span>Total Days:</span>
            <span>{totalDay || 0}</span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span>VAT (10%):</span>
            <span>
              $
              {(
                singleData?.rent *
                roomCount *
                totalDay *
                vatPercentage
              ).toFixed(2)}
            </span>
          </div>
          <hr />
          <div className="flex justify-between items-center py-2 font-semibold">
            <span>Grand Total:</span>
            <span>${grandTotal.toFixed(2)}</span>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md"
        >
          Reserve
        </button>
      </form>

      {/* Modal for Date Range Picker */}
      {showDateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h3 className="text-lg font-semibold mb-4">Select Dates</h3>
            <DateRangePicker
              ranges={[dateRange]}
              onChange={(item: any) => setDateRange(item.selection)}
              minDate={new Date()}
              disabledDates={reservedDates}
              className="p-2 rounded-md w-full text-black"
            />
            <div className="flex justify-end space-x-4 mt-4">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md"
                onClick={() => setShowDateModal(false)}
              >
                Cancel
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
                onClick={() => setShowDateModal(false)}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reservation;
