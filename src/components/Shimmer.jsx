import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Shimmer = () => {
  return (
    <div className="flex justify-center items-center dark:bg-black min-h-screen">
      <div className="shimmer-container flex flex-wrap justify-center gap-10 py-4">
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
