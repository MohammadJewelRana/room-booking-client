import { Skeleton } from "@nextui-org/skeleton";

const CardSkeleton = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="mb-12 w-[380px] shadow-sm p-2">
            <Skeleton className="h-32 w-full mb-4" />

            <div className="flex gap-6 items-center mb-4">
              <div className="flex items-center gap-2">
                <Skeleton className="h-5 w-20" />
                <Skeleton className="h-5 w-16" />
              </div>
              <div className="flex items-center gap-2">
                <Skeleton className="h-5 w-20" />
                <Skeleton className="h-5 w-16" />
              </div>
            </div>

            <Skeleton className="h-6 w-3/4 mb-2" />

            <Skeleton className="text-gray-500 text-[12px] text-justify h-4 w-full mb-2" />

            <Skeleton className="text-sm underline py-4 text-blue-600 h-5 w-32" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSkeleton;
