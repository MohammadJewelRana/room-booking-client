"use client";

import {
  useGetAllBooking,
  useUpdateBooking,
} from "@/hooks/Booking/booking.hook";
import { FaCheck, FaTimes, FaClock } from "react-icons/fa";
import { useState } from "react";
import { toast } from "sonner";

const BookingTable = () => {
  const { data, refetch } = useGetAllBooking();
  const bookingData1 = data?.data;

  const [bookingIdToUpdate, setBookingIdToUpdate] = useState<string | null>(
    null
  );
  const { mutate: updateBookingStatus } = useUpdateBooking(bookingIdToUpdate!);

  const handleUpdateStatus = (bookingId: string, newStatus: string) => {
    const updatedData = { status: newStatus };
    setBookingIdToUpdate(bookingId);

    updateBookingStatus(updatedData, {
      onSuccess: () => {
        refetch();
        toast.success("Booking status updated successfully.");
      },
      onError: (error) => {
        toast.error(`Error: ${error.message}`);
      },
    });
  };

  return (
    <div className="w-[350px] md:w-full box-border">
      <h1 className="text-2xl font-bold mb-4">Booking Information</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto bg-white border border-gray-300 rounded-lg">
          {/* Head */}
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 text-left">#</th>
              <th className="py-2 px-4 text-left">Guest Name</th>
              <th className="py-2 px-4 text-left">Room Type</th>
              <th className="py-2 px-4 text-left">Check-In</th>
              <th className="py-2 px-4 text-left">Check-Out</th>
              <th className="py-2 px-4 text-left">Total Amount</th>
              <th className="py-2 px-4 text-left">Status</th>
              <th className="py-2 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {bookingData1?.map((booking: any, index: number) => (
              <tr key={booking.id} className="border-b hover:bg-gray-100">
                <td className="py-2 px-4">{index + 1}</td>
                <td className="py-2 px-4">{booking?.userId?.name}</td>
                <td className="py-2 px-4">{booking?.roomId?.roomTitle}</td>
                <td className="py-2 px-4">
                  {booking?.dates?.startDate
                    ? new Date(booking.dates.startDate).toLocaleDateString("en-GB")
                    : "N/A"}
                </td>
                <td className="py-2 px-4">
                  {booking?.dates?.endDate
                    ? new Date(booking.dates.endDate).toLocaleDateString("en-GB")
                    : "N/A"}
                </td>
                <td className="py-2 px-4">$ {booking?.grandTotal}</td>
                <td className="py-2 px-4">{booking?.status}</td>
                <td className="py-2 px-4 flex justify-center space-x-2">
                  <button
                    className="text-green-500 hover:text-green-700"
                    title="Approve"
                    onClick={() => handleUpdateStatus(booking._id, "approved")}
                  >
                    <FaCheck />
                  </button>
                  <button
                    className="text-yellow-500 hover:text-yellow-700"
                    title="Pending"
                    onClick={() => handleUpdateStatus(booking._id, "pending")}
                  >
                    <FaClock />
                  </button>
                  <button
                    className="text-red-500 hover:text-red-700"
                    title="Cancel"
                    onClick={() => handleUpdateStatus(booking._id, "cancel")}
                  >
                    <FaTimes />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingTable;
