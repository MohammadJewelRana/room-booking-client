import Image from "next/image";
import img from "@/assets/room/room3_gallery1-600x598.png";
import { FaBed, FaPeopleArrows } from "react-icons/fa";

const LeftSidebar = ({ id }: { id: string }) => {
  return (
    <div className="">
      params: {id}
      <div>
        <div className="relative z-10">
          <Image
            src={img.src}
            height={200}
            width={200}
            alt="image"
            className="w-full h-[400px]"
          />
          <div className="bg-white shadow-md px-4 py-2 rounded-md absolute bottom-4 left-5 z-20">
            <p>
              From <span className="font-bold">${"1000"}</span>
            </p>
          </div>
        </div>

        <div>
          <div className="flex gap-6 items-center mb-4 py-4">
            <div className="flex items-center gap-2">
              <FaPeopleArrows />
              <p className="text-[14px] text-gray-500">4 Guests</p>
            </div>{" "}
            |
            <div className="flex items-center gap-2">
              <FaBed />
              <p className="text-[14px] text-gray-500">2 Beds</p>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-xl font-bold py-4">PoolSide Room</h1>
          <p className="text-sm text-gray-500 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus similique eveniet ex iusto sit delectus voluptate
            quisquam mollitia animi sint? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Id, ad?Lorem ipsum dolor sit amet consectetur
            adipisicing elit. In ea incidunt suscipit ipsum nobis dolorem cum
            provident culpa odit tempore.
          </p>
        </div>
      </div>
      {/* availability  */}
      <hr className=" border-gray-300 border-1 my-8" />
      <div>
        <h1 className="text-2xl font-semibold   pb-8 ">Availability </h1>
        <div>show calender two</div>
      </div>
    </div>
  );
};

export default LeftSidebar;
