import Container from "@/components/UI/Container";
import Reservation from "../_components/Reservation";
import LeftSidebar from "../_components/LeftSidebar";
import AmenitiesRules from "../_components/AmenitiesRules";
import RoomCard from "@/components/home/Card/RoomCard";

const Page = ({ params }: any) => {
  return (
    <div className="p-2">
      <Container>
        <div className="flex  justify-between gap-2 flex-wrap">
          <div className="w-full md:w-8/12 ">
            <LeftSidebar id={params?.roomId} />
            <AmenitiesRules/>
          </div>

          <div className="w-full md:w-3/12 border">
            <Reservation />
          </div>
        </div>
      </Container>
      <RoomCard dataShow={3}/>
 
    </div>
  );
};

export default Page;
