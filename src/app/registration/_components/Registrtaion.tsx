"use client";

import FXForm from "@/components/form/FXForm";
import FXInput from "@/components/form/FXInput";
import Loading from "@/components/UI/Loading";
import { useUserRegistration } from "@/hooks/auth";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const Registrtaion = () => {
  const { mutate: handleUserRegistration, isPending } = useUserRegistration();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    // console.log(data);

    handleUserRegistration(data);
  };

  return (
    <div>
      {isPending && <Loading />}
      <FXForm
        // resolver={zodResolver(registerValidationSchema)}
        onSubmit={onSubmit}
      >
        <div className="py-3">
          <FXInput label="Name" name="name" size="sm" />
        </div>
        <div className="py-3">
          <FXInput label="Email" type="email" name="email" size="sm" />
        </div>

        <div className="py-3">
          <FXInput label="Password" name="password" size="sm" type="password" />
        </div>

        <button className="w-full bg-gradient-to-r from-yellow-500 to-red-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 hover:shadow-lg hover:scale-105">
          Registration
        </button>
      </FXForm>
    </div>
  );
};

export default Registrtaion;
