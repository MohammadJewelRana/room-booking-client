"use server"

import axiosInstance from "@/lib/AxiosInstance";
import { FieldValues } from "react-hook-form";

export const createRoom = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/room/create-room", userData);

    return data;
  } catch (error: any) {
    console.log(error.response.data.message);

    throw new Error(error.response.data.message);
  }
};


