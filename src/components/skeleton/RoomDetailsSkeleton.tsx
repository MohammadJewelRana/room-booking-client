import { Skeleton } from "@nextui-org/skeleton";

const RoomDetailSkeleton = () => {
  return (
    <div className="mx-auto">
      <div className="relative z-10 mb-4">
        <Skeleton className="h-[400px] w-full" />
        <div className="bg-white shadow-md px-4 py-2 rounded-md absolute bottom-4 left-5 z-20">
          <Skeleton className="h-5 w-24" />
        </div>
      </div>

      <div className="flex gap-6 items-center mb-4 py-4">
        <div className="flex items-center gap-2">
          <Skeleton className="h-5 w-16" />
          <Skeleton className="h-5 w-20" />
        </div>
        |
        <div className="flex items-center gap-2">
          <Skeleton className="h-5 w-16" />
          <Skeleton className="h-5 w-20" />
        </div>
      </div>

      <div>
        <Skeleton className="h-6 w-1/2 mb-4" />
        <Skeleton className="text-sm text-gray-500 h-4 w-full mb-2" />
        <Skeleton className="text-sm text-gray-500 h-4 w-full mb-2" />
      </div>
    </div>
  );
};

export default RoomDetailSkeleton;
