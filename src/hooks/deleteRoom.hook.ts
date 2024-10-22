import { useMutation } from "@tanstack/react-query";
  // Ensure you have this package installed
import { deleteRoomById } from "@/services/Room"; // Import your delete function
import { toast } from "sonner";

export const useDeleteRoom = () => {
  return useMutation({
    mutationKey: ["DELETE_ROOM"],  
    mutationFn: async (roomId: string) => {  
      await deleteRoomById(roomId);  
    },
    onSuccess: () => {
      toast.success("Room deleted successfully.");  
    },
    onError: (error) => {
      console.error(error);  
      toast.error(error.message || "Failed to delete room.");  
    },
  });
};
