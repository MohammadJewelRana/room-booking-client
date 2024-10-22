const Dashboard = () => {
  return (
    <div className="">
      {/* Metrics or cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold">Total Users</h3>
          <p className="mt-2 text-2xl">1200</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold">New Orders</h3>
          <p className="mt-2 text-2xl">150</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold">Total Revenue</h3>
          <p className="mt-2 text-2xl">$45,000</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold">Pending Requests</h3>
          <p className="mt-2 text-2xl">50</p>
        </div>
      </div>

      {/* Data table */}
      <div className="mt-8 bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Order ID</th>
                <th className="py-2 px-4 border-b">Customer</th>
                {/* <th className="py-2 px-4 border-b">Status</th> */}
                <th className="py-2 px-4 border-b">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b">#12345</td>
                <td className="py-2 px-4 border-b">John Doe</td>
                {/* <td className="py-2 px-4 border-b">Pending</td> */}
                <td className="py-2 px-4 border-b">$500</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">#12346</td>
                <td className="py-2 px-4 border-b">Jane Smith</td>
                {/* <td className="py-2 px-4 border-b">Completed</td> */}
                <td className="py-2 px-4 border-b">$300</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
