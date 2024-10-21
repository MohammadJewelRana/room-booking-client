 
import img from "@/assets/feature/1677921970592.jpg";
import Image from "next/image";

const NoDesign = () => {
  return (
    <div className="flex flex-col items-center justify-center  bg-gray-100 text-center py-32">
      <h1 className="text-4xl font-bold mb-4">🚧 Under Construction</h1>
      <p className="text-lg text-gray-600 mb-8">
        Be patient! Our developers are working hard to design this page.
      </p>
      <Image
        src={img.src}
        alt="Under Construction"
        className="w-1/2 max-w-md mb-4"
        height={200}
        width={200}
      />
      <p className="text-md text-gray-500">Thank you for your understanding!</p>
    </div>
  );
};

export default NoDesign;
