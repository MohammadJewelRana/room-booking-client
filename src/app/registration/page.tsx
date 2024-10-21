import Image from "next/image";
import registraionImage from "@/assets/reg/reg1.jpg";

import Link from "next/link";
import { metaDataSEO } from "@/utils/MetaData";
import Registrtaion from "./_components/Registrtaion";

export const metadata = metaDataSEO({
  tabTitle: "roomBooker | Registration",
  des: "Welcome to our room booking website Registration Page",
});

const Page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center  p-4   ">
      <div className="flex items-center justify-center gap-4 max-w-6xl w-full flex-wrap   shadow-lg   ">
        <div className="lg:max-w-[45%] w-full   p-2">
          <Image
            src={registraionImage}
            height={200}
            width={200}
            alt="registration"
            className="rounded-lg w-full h-auto"
          />
        </div>
        {/* Right Side */}
        <div className="   p-8 rounded-md lg:max-w-[45%] w-full">
          <div className="   text-black flex flex-col items-center mx-auto ">
            <Image
              src="/logo.avif"
              height={400}
              width={200}
              alt="logo"
              className="h-20 w-20 rounded-full mb-4"
            />
            <h1 className=" text-lg font-semibold mb-4">
              We are the roomBooker team
            </h1>
          </div>

          <div>
            <Registrtaion />
          </div>
          <Link href="/registration" className="text-center  text-blue-600">
            {" "}
            <p className="py-4">Terms and conditions</p>
          </Link>

          <div className="flex lg:justify-between items-center flex-wrap justify-center mt-8 gap-2 ">
            <p>Have an account? </p>
            <Link href="/login">
              <button className="  text-black border border-red-400   py-1 px-4  rounded-lg   transition duration-300   hover:scale-105">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
