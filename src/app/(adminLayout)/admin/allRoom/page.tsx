 
import { metaDataSEO } from "@/utils/MetaData";
import AdminRoomCard from "./_components/AdminRoomCard";

export const metadata = metaDataSEO({
  tabTitle: "roomBooker | Admin | Room",
  des: "Welcome to our room booking website. Admin Panel All Room",
});
const page = () => {
  return (
    <div>
      <div>
        <h1 className="text-center text-3xl  font-bold py-8">
          All Amazing Room
        </h1>
      </div>

      {/* room card  */}
      <div>
        <AdminRoomCard />
      </div>
    </div>
  );
};

export default page;
