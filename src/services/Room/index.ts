"use server";

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

export const getAllRoom = async () => {
  try {
    const { data } = await axiosInstance.get("/room");
    return data;
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
