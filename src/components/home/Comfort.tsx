import Image from "next/image";
import React from "react";
import img1 from "@/assets/banner/your_comfort_img1.png";
import img2 from "@/assets/banner/your_comfort_img2.png";

const Comfort = () => {
  return (
    <div className="flex  my-12 md:my-32 flex-col md:flex-row items-center justify-center ">
      {/* Left Image */}
      <div className="md:w-3/12 flex-shrink-0 z-10">
        <Image
          src={img1}
          height={400}
          width={200}
          alt="pic1"
          className="w-full h-full object-cover md:h-[400px] md:ml-[50px] "
        />
      </div>

      {/* Middle Text Div */}
      <div className="bg-gray-200 px-4 md:px-16 mx-2 md:w-5/12 flex flex-col justify-center items-center py-12">
        <h1 className="text-center text-4xl font-semibold py-4">
          YOUR COMFORT IS OUR PRIORITY
        </h1>
        <p className="text-center text-gray-500 text-sm leading-7 py-8">
          Our Comfort Is Our Priority&quot; expresses a commitment to providing the
          highest level of comfort and satisfaction for our customers. Whether
          you&apos;re staying with us, using our services, or purchasing our
          products, we prioritize your needs and ensure a relaxing and
          enjoyable experience.
        </p>
        <p className="text-center text-gray-500 text-sm leading-7 py-4">
          From cozy accommodations and personalized services to high-quality
          products designed with your comfort in mind, everything we do is
          centered around making you feel at ease and valued. Your comfort
          isn&apos;t just our goal—it&apos;s our top priority.
        </p>
        <div className="text-center">
          <button className="bg-slate-800 text-white font-semibold py-2 px-4 rounded-full text-sm hover:bg-slate-600 transition duration-300 ease-in-out">
            See More
          </button>
          
        </div>
      </div>

      {/* Right Image */}
      <div className="md:w-3/12 flex-shrink-0">
        <Image
          src={img2}
          height={400}
          width={200}
          alt="pic2"
          className="w-full h-full object-cover md:h-[400px] md:-ml-[30px]"
        />
      </div>
    </div>
  );
};

export default Comfort;
