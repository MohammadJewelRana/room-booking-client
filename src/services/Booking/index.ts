"use server";

import envConfig from "@/config/envConfig";
import axiosInstance from "@/lib/AxiosInstance";
import { revalidateTag } from "next/cache";
import { FieldValues } from "react-hook-form";

export const createBooking = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/room/create-booking", userData);

    revalidateTag('room');

    return data;
  } catch (error: any) {
    console.log(error.response.data.message);

    throw new Error(error.response.data.message);
  }
};

// export const getAllRoom = async () => {
//   try {
//     const fetchOptions={
//       next:{
//         tags:['room']
//       }
//     }

//     const { data } = await axiosInstance.get("/room");
//     return data;
//   } catch (error: any) {
//     console.log(error.response.data.message);
//     throw new Error(error.response.data.message);
//   }
// };

export const getAllBooking = async () => {
  try {
    const fetchOptions = {
      next: {
        tags: ["booking"],
      },
    };
    const res = await fetch(`${envConfig.baseApi}/booking`, fetchOptions);


    return res.json();
  } catch (error: any) {
    console.log(error.response.data.message);
    throw new Error(error.response.data.message);
  }
};

export const deleteBookingById = async (id: string) => {
  try {
    const { data } = await axiosInstance.delete(`/booking/${id}`);
    
    return data;
  } catch (error: any) {
    console.log(error.response.data.message);
    throw new Error(error.response.data.message);
  }
};

export const getSingleBookingById = async (id: string) => {
  try {
    const { data } = await axiosInstance.get(`/booking/${id}`);
    return data;
  } catch (error: any) {
    console.log(error.response.data.message);
    throw new Error(error.response.data.message);
  }
};

export const updateSingleBookingById = async (id: string, updatedData: any) => {
  try {
    const { data } = await axiosInstance.patch(`/booking/${id}`, updatedData);
    return data;
  } catch (error: any) {
    console.log(error.response.data.message);
    throw new Error(error.response.data.message);
  }
};


