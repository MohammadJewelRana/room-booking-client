import RoomCard from "@/components/home/Card/RoomCard";
import Comfort from "@/components/home/Comfort";
import Renovated from "@/components/home/Renovated";
import NewsletterSection from "@/components/shared/NewsLetterSection";

const page = () => {
  return (
    <div>
      <RoomCard dataShow={6}/>
      <Comfort />
      <Renovated />
      <NewsletterSection/>
    </div>
  );
};

export default page;
