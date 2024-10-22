"use server";

import envConfig from "@/config/envConfig";
import axiosInstance from "@/lib/AxiosInstance";
import { revalidateTag } from "next/cache";
import { FieldValues } from "react-hook-form";

export const createRoom = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/room/create-room", userData);

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

export const getAllRoom = async () => {
  try {
    const fetchOptions = {
      next: {
        tags: ["room"],
      },
    };
    const res = await fetch(`${envConfig.baseApi}/room`, fetchOptions);


    return res.json();
  } catch (error: any) {
    console.log(error.response.data.message);
    throw new Error(error.response.data.message);
  }
};

export const deleteRoomById = async (id: string) => {
  try {
    const { data } = await axiosInstance.delete(`/room/${id}`);
    
    return data;
  } catch (error: any) {
    console.log(error.response.data.message);
    throw new Error(error.response.data.message);
  }
};

export const getSingleRoomById = async (id: string) => {
  try {
    const { data } = await axiosInstance.get(`/room/${id}`);
    return data;
  } catch (error: any) {
    console.log(error.response.data.message);
    throw new Error(error.response.data.message);
  }
};

export const updateSingleRoomById = async (id: string, updatedData: any) => {
  try {
    const { data } = await axiosInstance.patch(`/room/${id}`, updatedData);
    return data;
  } catch (error: any) {
    console.log(error.response.data.message);
    throw new Error(error.response.data.message);
  }
};


