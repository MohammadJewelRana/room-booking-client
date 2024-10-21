import { title } from "process";
import React from "react";
import {
  FaAirFreshener,
  FaTv,
  FaDog,
  FaLock,
  FaWifi,
  FaBath,
  FaFan,
  FaCloud,
  FaCheck,
  FaClock,
  FaSmokingBan,
} from "react-icons/fa";

 

 
const AmenitiesRules = () => {
  const amenitiesData = [
    { title: "Air Conditioner", iconTitle: <FaAirFreshener /> },
    { title: "Bathtub", iconTitle: <FaBath /> },
    { title: "Cable Tv", iconTitle: <FaTv /> },
    { title: "Hair Dryer", iconTitle: <FaFan /> },
    { title: "Pet Friendly", iconTitle: <FaDog /> },
    { title: "Refrigerator", iconTitle: <FaCloud /> },
    { title: "Safe Box", iconTitle: <FaLock /> },
    { title: "Wifi", iconTitle: <FaWifi /> },
  ];
  const amenities = [
    { text: "Check-in : 3:00 PM - 09:00 PM", icon: <FaClock /> },
    { text: "Check-out : 11:00 AM", icon: <FaClock /> },
    { text: "No Smoking", icon: <FaSmokingBan /> },
    { text: "Keep belonging Safe", icon: <FaLock /> },
  ];

  return (
    <div>
      {/* amenities  */}
      <hr className=" border-gray-300 border-1 my-8" />
      <div>
        <h1 className="text-2xl font-semibold  pb-8 ">Amenities</h1>
        <div className="grid grid-cols-2 gap-6">
          {amenitiesData?.map((item, index) => (
            <div key={index}>
              <div className="flex gap-3 items-center text-md text-gray-600">
                <span>{item?.iconTitle}</span>
                <p>{item?.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr className=" border-gray-300 border-1 my-8" />
      {/* rules  */}
      <div>
        <h1 className="text-2xl font-semibold   pb-8 ">House Rules</h1>
        <div>
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="text-md text-gray-600 flex items-center gap-3 mb-6"
            >
              {amenity.icon}
              <p>{amenity.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AmenitiesRules;
