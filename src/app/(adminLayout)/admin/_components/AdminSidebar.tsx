import Image from "next/image";
import Link from "next/link";

import {
  FaBars,
  FaTimes,
  FaTachometerAlt,
  FaUsers,
  FaShoppingCart,
  FaCog,
  FaPlus,
  FaDoorOpen,
  FaUser,
  FaChartLine,
  FaHome,
  FaBook,
} from "react-icons/fa";
import img from "@/assets/reg/login.png";

const AdminSidebar = () => {
  const adminPath = [
    { title: "Dashboard", iconNav: <FaTachometerAlt />, path: "/admin" },
    { title: "Create Room", iconNav: <FaPlus />, path: "/admin/createRoom" },
    { title: "Room", iconNav: <FaDoorOpen />, path: "/admin/allRoom" },
    { title: "Booking", iconNav: <FaBook />, path: "/admin/booking" },
    { title: "User", iconNav: <FaUser />, path: "/admin/user" },
    { title: "Settings", iconNav: <FaCog />, path: "/admin" },
    { title: "Analytics", iconNav: <FaChartLine />, path: "/admin" },
  ];

  return (
    <div>
      <div className="flex flex-col items-center mb-6">
        <Image
          src={img}
          alt="Profile"
          className="w-24 h-24 rounded-full mb-4"
        />
        <h2 className="text-xl font-semibold"> Md. Jewel Rana</h2>
        <p className="text-white text-[12px]">js.rana0326@gmail.com</p>
      </div>
      <hr className="px-4 w-56 mx-auto  border-gray-400" />

      <nav className="mt-6">
        {adminPath?.map((item, index) => (
          <>
            <Link
              href={item?.path}
              className="block py-2.5 px-4 hover:bg-gray-700 rounded flex items-center"
            >
               <span className="">{item?.iconNav}</span>  <span className="ml-3">{item?.title}</span>

            </Link>
          </>
        ))}
      </nav>
      <hr className="px-4 w-56 mx-auto  border-gray-400 py-4 mt-8" />
      <Link
              href='/'
              className="block py-2.5 px-4 hover:bg-gray-700 rounded flex items-center"
            >
               <FaHome/>    <span className="ml-3"> Back To Home</span>

            </Link>
    </div>
  );
};

export default AdminSidebar;
