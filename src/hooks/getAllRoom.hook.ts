import { getAllRoom } from "@/services/Room";
import { useQuery } from "@tanstack/react-query";

export const useGetAllRoom = () => {
  return useQuery({
    queryKey: ["GET_ALL_ROOM"],
    queryFn: async () => await getAllRoom(),
  });
};
