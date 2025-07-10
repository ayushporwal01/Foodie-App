import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Shimmer = () => {
  return (
    <div className="flex justify-center items-center dark:bg-black min-h-screen">
      <div className="shimmer-container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 py-6">
        {Array.from({ length: 15 }).map((_, index) => (
          <Skeleton
            key={index}
            width={224}
            height={256}
            borderRadius={8}
            baseColor="#e5e7eb"
            highlightColor="#f3f4f6"
          />
        ))}
      </div>
    </div>
  );
};

export default Shimmer;
