import React from "react";
import { FaCheck, FaTimes, FaClock } from "react-icons/fa";

const BookingTable = () => {
  const bookingData = [
    {
      id: 1,
      name: "John Doe",
      roomType: "Deluxe",
      checkIn: "2024-10-20",
      checkOut: "2024-10-25",
      totalAmount: "$500",
    },
    {
      id: 2,
      name: "Jane Smith",
      roomType: "Suite",
      checkIn: "2024-10-22",
      checkOut: "2024-10-28",
      totalAmount: "$800",
    },
    {
      id: 3,
      name: "Mike Johnson",
      roomType: "Standard",
      checkIn: "2024-10-18",
      checkOut: "2024-10-20",
      totalAmount: "$300",
    },
    {
      id: 4,
      name: "Emily Davis",
      roomType: "Family",
      checkIn: "2024-10-23",
      checkOut: "2024-10-30",
      totalAmount: "$600",
    },
    {
      id: 5,
      name: "Chris Lee",
      roomType: "Deluxe",
      checkIn: "2024-10-25",
      checkOut: "2024-10-29",
      totalAmount: "$550",
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Booking Information</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-3 px-5 text-center">ID</th>
              <th className="py-3 px-5 text-center">Guest Name</th>
              <th className="py-3 px-5 text-center">Room Type</th>
              <th className="py-3 px-5 text-center">Check-In</th>
              <th className="py-3 px-5 text-center">Check-Out</th>
              <th className="py-3 px-5 text-center">Total Amount</th>
              <th className="py-3 px-5 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {bookingData.map((booking) => (
              <tr
                key={booking.id}
                className="hover:bg-gray-100 transition duration-200"
              >
                <td className="py-3 px-5 border-b text-center">{booking.id}</td>
                <td className="py-3 px-5 border-b text-center">{booking.name}</td>
                <td className="py-3 px-5 border-b text-center">{booking.roomType}</td>
                <td className="py-3 px-5 border-b text-center">{booking.checkIn}</td>
                <td className="py-3 px-5 border-b text-center">{booking.checkOut}</td>
                <td className="py-3 px-5 border-b text-center">{booking.totalAmount}</td>
                <td className="py-3 px-5 border-b text-center flex justify-center space-x-2">
                  <button className="text-green-500 hover:text-green-700" title="Approve">
                    <FaCheck />
                  </button>
                  <button className="text-red-500 hover:text-red-700" title="Cancel">
                    <FaTimes />
                  </button>
                  <button className="text-yellow-500 hover:text-yellow-700" title="Pending">
                    <FaClock />
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
