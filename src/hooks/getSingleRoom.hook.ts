import { useQuery } from "@tanstack/react-query";
import { getSingleRoomById } from "@/services/Room"; 

export const useGetSingleRoom = (id: string) => {
  return useQuery({
    queryKey: ["GET_SINGLE_ROOM", id],  
    queryFn: async () => await getSingleRoomById(id),  
    enabled: !!id,  
  });
};