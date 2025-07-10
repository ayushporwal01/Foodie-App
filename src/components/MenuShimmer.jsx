import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const MenuShimmer = () => {
  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="flex items-start gap-4 py-4 border-b border-gray-200 dark:border-gray-700"
        >
          {/* Image Placeholder */}
          <Skeleton
            width={80}
            height={80}
            borderRadius={8}
            baseColor="#e5e7eb"
            highlightColor="#f3f4f6"
          />

          {/* Text placeholders */}
          <div className="flex-1 space-y-2">
            <Skeleton width="60%" height={20} />
            <Skeleton width="80%" height={14} />
            <Skeleton width="40%" height={16} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuShimmer;
