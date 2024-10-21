import Image from "next/image";
import registraionImage from "@/assets/reg/login.png";

import Link from "next/link";
import Login from "./_components/Login";
import { metaDataSEO } from "@/utils/MetaData";

export const metadata = metaDataSEO({
  tabTitle: "roomBooker | Login",
  des: "Welcome to our room booking website Login Page",
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
            <Login />
          </div>

          <div className="flex lg:justify-between items-center flex-wrap justify-center mt-8 gap-2 ">
            <p> Dont&apos;t have an account? </p>
            <Link href="/registration">
              <button className="  text-black border border-red-400   py-1 px-4  rounded-lg   transition duration-300   hover:scale-105">
                Registration
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
