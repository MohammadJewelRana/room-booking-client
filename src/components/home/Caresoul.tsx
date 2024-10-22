import banner from "@/assets/home/2.jpg";
import Link from "next/link";

const Caresoul = () => {
  return (
    <div>
      <div
        className="relative bg-center bg-no-repeat bg-cover pt-24 mt-12 h-[600px] text-black flex flex-col justify-center items-center"
        style={{ backgroundImage: `url(${banner.src})` }}
      >
        <div className="absolute inset-2 md:inset-12 bg-black bg-opacity-50" />

        <div className="relative max-w-7xl mx-auto h-full flex flex-col justify-center items-center text-center text-black px-4">
          <h1 className="text-4xl font-bold mb-4 text-white shadow-lg">
            Welcome to Our Hotel
          </h1>
          <p className="text-lg mb-6 text-white shadow-lg text-center max-w-3xl">
            Experience luxury and comfort like never before. Book your stay
            today and create unforgettable memories.
          </p>
          <Link href="/room" className="mt-4">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Book Now
            </button>
          </Link>

         
          <div className="h-24 border-l-2 border-white  mt-12" />
         
        </div>
      </div>
    </div>
  );
};

export default Caresoul;
