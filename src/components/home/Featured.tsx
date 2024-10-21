import parking from "@/assets/feature/parking.svg";
import group from "@/assets/feature/Group.svg";
import breakfast from "@/assets/feature/breakfast.svg";
import work from "@/assets/feature/work.svg";
import wifi from "@/assets/feature/wifi.svg";
import swimming from "@/assets/feature/swim.svg";
import gym from "@/assets/feature/weight.svg";
import spa from "@/assets/feature/spa.svg";

import Image from "next/image";
import Container from "../UI/Container";

const Featured = () => {
  const featureData = [
    { title: "Parking", iconFeature: parking },
    { title: "Media", iconFeature: group },
    { title: "Swimming Pool", iconFeature: swimming },
    { title: "Spa", iconFeature: spa },
    { title: "GYM", iconFeature: gym },
    { title: "Wifi", iconFeature: wifi },
    { title: "Breakfast", iconFeature: breakfast },
    { title: "Workspace", iconFeature: work },
  ];

  return (
  <div className="mb-36">
       <Container>
      <div className="text-center ">
        <h1 className="font-bold text-3xl py-6">
          {" "}
          Visit Our Famous Facilities
        </h1>
        <p className="text-gray-500 text-[12px] max-w-2xl mx-auto mb-8">
          A wonderful serenity has taken possession of my entire soul, like
          these sweet mornings of spring which I enjoy with my whole heart.
        </p>
      </div>

      <div className="  flex items-center justify-between gap-24 flex-wrap ">
        {/* <div className=" grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-4 place-items-center "> */}
        {featureData?.map((item, index) => (
          <>
            <div key={index} className="text-gray-600 ">
              <Image
                src={item?.iconFeature}
                height={200}
                width={200}
                alt="feature"
                className="h-12 w-12 mb-3"
              />
              <p>Parking</p>
            </div>
          </>
        ))}
      </div>
    </Container>
  </div>
  );
};

export default Featured;
