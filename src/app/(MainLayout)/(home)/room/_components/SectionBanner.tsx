import poolsideRoom from "@/assets/room/poolside-room-768x512.png";

const SectionBanner = () => {
  return (
    <div>
      <div
        className="relative bg-center bg-no-repeat bg-cover pt-24   text-black"
        style={{ backgroundImage: `url(${poolsideRoom.src})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>

        <div className="relative max-w-7xl mx-auto h-full flex flex-col justify-center items-center text-center text-black px-4">
          <h1 className="text-5xl mb-6 text-white ">Room Details</h1>

          <div className="h-24 border-l-2 border-white  mt-12"></div>
        </div>
      </div>
    </div>
  );
};

export default SectionBanner;
