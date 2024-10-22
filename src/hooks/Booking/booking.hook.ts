import {
  createBooking,
  deleteBookingById,
  getAllBooking,
  getSingleBookingById,
  updateSingleBookingById,
} from "@/services/Booking";

import { useMutation, useQuery } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

export const useCreateBooking = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["CREATE_Booking"],
    mutationFn: async (userData) => await createBooking(userData),
    onSuccess: () => {
      toast.success("Booking creation successful.");
    },
    onError: (error) => {
      console.log(error, "auth");
      toast.error(error.message);
    },
  });
};

export const useGetAllBooking = () => {
  return useQuery({
    queryKey: ["GET_ALL_Booking"],
    queryFn: async () => await getAllBooking(),
  });
};

export const useDeleteBooking = () => {
  return useMutation({
    mutationKey: ["DELETE_BOOKING"],
    mutationFn: async (bookingId: string) => {
      await deleteBookingById(bookingId);
    },
    onSuccess: () => {
      toast.success("Booking deleted successfully.");
    },
    onError: (error) => {
      console.error(error);
      toast.error(error.message || "Failed to delete booking.");
    },
  });
};

export const useGetSingleBooking = (id: string) => {
  return useQuery({
    queryKey: ["BOOKING", id],
    queryFn: async () => await getSingleBookingById(id),
    enabled: !!id,
  });
};

export const useUpdateBooking = (roomId: string) => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["UPDATE_BOOKING", roomId],
    mutationFn: async (updatedData) =>
      await updateSingleBookingById(roomId, updatedData),
    onSuccess: () => {
      toast.success("Booking update successful.");
    },
    onError: (error) => {
      console.log(error, "update error");
      toast.error(error.message);
    },
  });
};
