"use client";
import Image from "next/image";
import registraionImage from "@/assets/reg/login.png";
import FXForm from "@/components/form/FXForm";
import FXInput from "@/components/form/FXInput";

import { FieldValues, SubmitHandler } from "react-hook-form";
import Link from "next/link";

const Page = () => {
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);

    // handleUserRegistration(userData);
  };

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
            <FXForm
              //! Only for development
              //   defaultValues={{
              //     name: "Mir Hussain",
              //     email: "mir@gmail.com",
              //     mobileNumber: "01711223344",
              //     password: "123456",
              //   }}
              // resolver={zodResolver(registerValidationSchema)}
              onSubmit={onSubmit}
            >
              <div className="py-3">
                <FXInput label="Email" name="email" size="sm" />
              </div>

              <div className="py-3">
                <FXInput
                  label="Password"
                  name="password"
                  size="sm"
                  type="password"
                />
              </div>

              <button className="w-full bg-gradient-to-r from-yellow-500 to-red-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 hover:shadow-lg hover:scale-105">
                Login
              </button>
            </FXForm>
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
