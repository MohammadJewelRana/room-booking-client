import { createRoom, updateSingleRoomById } from "@/services/Room";
import { useMutation } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

export const useUpdateRoom = (roomId: string) => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["UPDATE_ROOM", roomId],  
    mutationFn: async (updatedData) => await updateSingleRoomById(roomId, updatedData),
    onSuccess: () => {
      toast.success("Room update successful.");
    },
    onError: (error) => {
      console.log(error, 'update error');
      toast.error(error.message);
    },
  });
};
