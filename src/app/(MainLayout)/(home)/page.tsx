import RoomCard from "@/components/home/Card/RoomCard";
import Caresoul from "@/components/home/Caresoul";
import Comfort from "@/components/home/Comfort";
import Featured from "@/components/home/Featured";
import Renovated from "@/components/home/Renovated";
import NewsletterSection from "@/components/shared/NewsLetterSection";

const page = () => {
  return (
    <div>
     <Caresoul/>  
      <Featured/>
      <RoomCard dataShow={6}/>
      <Comfort />
      <Renovated />
      <NewsletterSection/>
    </div>
  );
};

export default page;
