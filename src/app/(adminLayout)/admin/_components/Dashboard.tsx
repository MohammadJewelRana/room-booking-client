import BookingTable from "../booking/_components/BookingTable";
import { FaUsers, FaShoppingCart, FaDollarSign, FaClipboardCheck } from "react-icons/fa";


const Dashboard = () => {
  return (
    <div className="">
      {/* Metrics or cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
      <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 flex items-center">
        <div className="bg-blue-500 text-white p-3 rounded-full">
          <FaUsers className="text-3xl" />
        </div>
        <div className="ml-4">
          <h3 className="text-xl font-semibold">Total Users</h3>
          <p className="mt-2 text-2xl">1200</p>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 flex items-center">
        <div className="bg-green-500 text-white p-3 rounded-full">
          <FaClipboardCheck className="text-3xl" />
        </div>
        <div className="ml-4">
          <h3 className="text-xl font-semibold">New Orders</h3>
          <p className="mt-2 text-2xl">150</p>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 flex items-center">
        <div className="bg-yellow-500 text-white p-3 rounded-full">
          <FaDollarSign className="text-3xl" />
        </div>
        <div className="ml-4">
          <h3 className="text-xl font-semibold">Total Revenue</h3>
          <p className="mt-2 text-2xl">$45,000</p>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 flex items-center">
        <div className="bg-red-500 text-white p-3 rounded-full">
          <FaShoppingCart className="text-3xl" />
        </div>
        <div className="ml-4">
          <h3 className="text-xl font-semibold">Pending Requests</h3>
          <p className="mt-2 text-2xl">50</p>
        </div>
      </div>
    </div>

      {/* Data table */}
     <div className="mt-16">
     <BookingTable/>
     </div>
    </div>
  );
};

export default Dashboard;
