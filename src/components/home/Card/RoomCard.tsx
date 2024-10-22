 

"use client"

import CardSkeleton from "@/components/skeleton/CardSkeleton";
import SingleRoomCard from "./SingleRoomCard";
import { useGetAllRoom } from "@/hooks/getAllRoom.hook";

const RoomCard = ({ dataShow }: { dataShow: any }) => {
  // const roomData = [
  //   {
  //     id: 1,
  //     roomTitle: "Deluxe Room",
  //     bedCount: 1,
  //     personCount: 2,
  //     roomDescription:
  //       "A spacious deluxe room with a king-size bed, offering stunning views and premium amenities.",
  //     rent: 150,
  //     roomImages: [img1, img2, img3],
  //   },
  //   {
  //     id: 2,
  //     roomTitle: "Family Suite",
  //     bedCount: 2,
  //     personCount: 4,
  //     roomDescription:
  //       "Perfect for families, this suite includes two beds and a separate living area for relaxation.",
  //     rent: 200,
  //     roomImages: [img3, img1, img2, img3],
  //   },
  //   {
  //     id: 3,
  //     roomTitle: "Single Room",
  //     bedCount: 1,
  //     personCount: 1,
  //     roomDescription:
  //       "A cozy single room designed for solo travelers, equipped with all essential amenities.",
  //     rent: 80,
  //     roomImages: [img1, img2],
  //   },
  //   {
  //     id: 4,
  //     roomTitle: "Luxury Suite",
  //     bedCount: 1,
  //     personCount: 2,
  //     roomDescription:
  //       "An elegant suite with a private balcony, spacious living area, and luxurious furnishings.",
  //     rent: 300,
  //     roomImages: [img3, img1, img2, img3],
  //   },
  //   {
  //     id: 5,
  //     roomTitle: "Standard Double Room",
  //     bedCount: 2,
  //     personCount: 2,
  //     roomDescription:
  //       "A comfortable double room with modern decor and essential amenities for a pleasant stay.",
  //     rent: 120,
  //     roomImages: [img2, img3],
  //   },
  //   {
  //     id: 6,
  //     roomTitle: "Executive Room",
  //     bedCount: 1,
  //     personCount: 2,
  //     roomDescription:
  //       "A stylish executive room featuring a work desk and premium amenities for business travelers.",
  //     rent: 180,
  //     roomImages: [img3, img1, img2, img3],
  //   },
  // ];
  
  const {
    data: roomAllData,
    isLoading,
    isError,
    error,
    refetch,
  } = useGetAllRoom();

  const roomData = roomAllData?.data;
  //   const isPending=true;
  const isPending = false;

  if (isPending) {
    return <CardSkeleton />;
  }

  return (
    <>
      <div className="my-16">
        {/* Heading and Subheading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Amazing Room </h1>
          <p className="text-gray-500">
            Please visit and explore for more details
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {dataShow === true ? (
            <>
              {roomData?.map((item:any, index:any) => (
                <SingleRoomCard key={index} singleRoomData={item} />
              ))}
            </>
          ) : (
            <>
              {roomData
                ?.slice(0, dataShow)
                .map((item:any, index:any) => (
                  <SingleRoomCard key={index} singleRoomData={item} />
                ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default RoomCard;
