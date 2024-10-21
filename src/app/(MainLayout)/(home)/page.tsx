import RoomCard from "@/components/home/Card/RoomCard";
import Comfort from "@/components/home/Comfort";
import Renovated from "@/components/home/Renovated";

const page = () => {
  return (
    <div>
      <RoomCard/>
      <Comfort />
      <Renovated />
    </div>
  );
};

export default page;
