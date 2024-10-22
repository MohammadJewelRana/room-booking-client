import { createRoom } from "@/services/Room";
import { useMutation } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

export const useCreateRoom = () => {
    return useMutation<any, Error, FieldValues>({
      mutationKey: ["CREATE_ROOM"],
      mutationFn: async (userData) => await createRoom(userData),
      onSuccess: () => {
        toast.success("Room creation successful.");
      },
      onError: (error) => {
          console.log(error,'auth')
        toast.error(error.message);
      },
    });
  };
   