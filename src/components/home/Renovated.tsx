import banner from "@/assets/banner/banner1.jpg";

const Renovated = () => {
  return (
    <div>
      <div
        className="relative bg-center bg-no-repeat bg-cover pt-24   text-black"
        style={{ backgroundImage: `url(${banner.src})` }} // Use imported image for the background
      >
        {/* Overlay for darker background effect */}
        <div className="absolute inset-7 bg-black bg-opacity-0" />

        <div className="relative max-w-7xl mx-auto h-full flex flex-col justify-center items-center text-center text-black px-4">
          <h1 className="text-xl font-bold mb-4 tracking-widest">
            NEW RENOVATED
          </h1>

          <h1 className="text-5xl mb-6 text-green-700 ">
            Luxury Hotel in Zermatt
          </h1>
          <div className="text-lg text-justify text-gray-800 py-4">
            <p className="text-center">
              Welcome to our hotel! We are pleased to offer a variety of rooms
              that are designed to provide a comfortable and relaxing stay for
              our guests. Whether you are traveling for business or leisure, we
              have the perfect room to meet your needs.
            </p>
            <p className="my-4 text-center">
              For guests seeking a more luxurious experience, we offer premium
              rooms with additional amenities such as larger beds, seating
              areas, and stunning views of the city.
            </p>
          </div>

          <button className="bg-slate-800 text-white font-semibold py-4 px-12 rounded-full hover:bg-slate-600 transition duration-300 ease-in-out shadow-lg">
            Learn More
          </button>

          {/* add a vertical line in this div height 100px */}
          <div className="h-24 border-l-2 border-slate-800  mt-12" />
        </div>
      </div>
    </div>
  );
};

export default Renovated;
