"use client";

import { useGetAllBooking, useUpdateBooking } from "@/hooks/Booking/booking.hook";
import { FaCheck, FaTimes, FaClock } from "react-icons/fa";
 
import { useState } from "react";
import { toast } from "sonner";

const BookingTable = () => {
  const { data, refetch } = useGetAllBooking();
  const bookingData1 = data?.data;

  // Allow state to be either string or null
  const [bookingIdToUpdate, setBookingIdToUpdate] = useState<string | null>(null);
  const { mutate: updateBookingStatus } = useUpdateBooking(bookingIdToUpdate!); // Hook expects a booking ID

  const handleUpdateStatus = (bookingId: string, newStatus: string) => {
    const updatedData = { status: newStatus };
    console.log(bookingId);
    

    // Set the booking ID for the mutation
    setBookingIdToUpdate(bookingId);

    // Call the update mutation with updatedData
    updateBookingStatus(updatedData, {
      onSuccess: () => {
        refetch(); // Fetch updated data
        toast.success("Booking status updated successfully.");
      },
      onError: (error) => {
        toast.error(`Error: ${error.message}`);
      },
    });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Booking Information</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-3 px-5 text-center">Serial</th>
              <th className="py-3 px-5 text-center">Guest Name</th>
              <th className="py-3 px-5 text-center">Room Type</th>
              <th className="py-3 px-5 text-center">Check-In</th>
              <th className="py-3 px-5 text-center">Check-Out</th>
              <th className="py-3 px-5 text-center">Total Amount</th>
              <th className="py-3 px-5 text-center">Status</th>
              <th className="py-3 px-5 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {bookingData1?.map((booking: any, index: any) => (
              <tr
                key={booking.id}
                className="hover:bg-gray-100 transition duration-200"
              >
                <td className="py-3 px-5 border-b text-center">{index + 1}</td>
                <td className="py-3 px-5 border-b text-center">
                  {booking?.userId?.name}
                </td>
                <td className="py-3 px-5 border-b text-center">
                  {booking?.roomId?.roomTitle}
                </td>
                <td className="py-3 px-5 border-b text-center">
                  {booking?.dates?.startDate
                    ? new Date(booking.dates.startDate).toLocaleDateString(
                        "en-GB"
                      )
                    : "N/A"}
                </td>
                <td className="py-3 px-5 border-b text-center">
                  {booking?.dates?.endDate
                    ? new Date(booking.dates.endDate).toLocaleDateString(
                        "en-GB"
                      )
                    : "N/A"}
                </td>
                <td className="py-3 px-5 border-b text-center">
                  $ {booking?.grandTotal}
                </td>
                <td className="py-3 px-5 border-b text-center">
                  {booking?.status}
                </td>
                <td className="py-3 px-5 border-b text-center flex justify-center space-x-2">
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
