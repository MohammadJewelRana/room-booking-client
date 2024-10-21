"use client";

import { useUser } from "@/app/context/user.provider";
import FXForm from "@/components/form/FXForm";
import FXInput from "@/components/form/FXInput";
import Loading from "@/components/UI/Loading";
import { useUserLogin } from "@/hooks/auth";
import { useRouter, useSearchParams } from "next/navigation";
import { FieldValues, SubmitHandler } from "react-hook-form";

const Login = () => {
  const { mutate: handleUserLogin, isPending, isSuccess } = useUserLogin();
  const {setIsLoading:userLoading}=useUser();

  
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect"); //get redirect path
  const router = useRouter();


  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);

    handleUserLogin(data);
    userLoading(true)


  };

  if (!isPending && isSuccess) {
    if (redirect) {
      router.push(redirect);
    } else {
      router.push("/");
    }
  }

  return (
    <div>
      {isPending && <Loading />}
      <FXForm
        // resolver={zodResolver(registerValidationSchema)}
        onSubmit={onSubmit}
      >
        <div className="py-3 text-black">
          <FXInput label="Email" name="email" size="sm" />
        </div>

        <div className="py-3">
          <FXInput label="Password" name="password" size="sm" type="password" />
        </div>

        <button className="w-full bg-gradient-to-r from-yellow-500 to-red-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 hover:shadow-lg hover:scale-105">
          Login
        </button>
      </FXForm>
    </div>
  );
};

export default Login;
