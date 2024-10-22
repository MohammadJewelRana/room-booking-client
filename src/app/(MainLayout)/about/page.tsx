import NoDesign from "@/components/UI/NoDesign";
import { metaDataSEO } from "@/utils/MetaData";
export const metadata = metaDataSEO({
  tabTitle: "roomBooker | About",
  des: "Welcome to our room booking website. About page ",
});
const page = () => {
  return (
    <div>
      <NoDesign />
    </div>
  );
};

export default page;
