"use server";

import axiosInstance from "@/lib/AxiosInstance";

import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

export const registerUser = async (userData: FieldValues) => {
  try {
    // const { data } = await axiosInstance.post("/user/create-user", userData);
    const result = await axiosInstance.post("/user/create-user", userData);

    // console.log(result);

    return result.data;
  } catch (error: any) {
    console.log(error.response.data.message);

    throw new Error(error.response.data.message);
  }
};

export const loginUser = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/user/login", userData);

    //cookies set
    if (data.success) {
      cookies().set("accessToken", data?.data?.accessToken);
      cookies().set("refreshToken", data?.data?.refreshToken);
    }

    return data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};

export const logout = () => {
  cookies().delete("accessToken");
  cookies().delete("refreshToken");
};
