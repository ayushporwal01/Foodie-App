// const Shimmer = () => {
//   return (
//     <div className="flex justify-center items-center dark:bg-black">
//       <div className="shimmer-container grid grid-cols-5 gap-10 py-6">
//         <div className="w-56 h-64 bg-gray-200 dark:bg-gray-500"></div>
//         <div className="w-56 h-64 bg-gray-200 dark:bg-gray-500"></div>
//         <div className="w-56 h-64 bg-gray-200 dark:bg-gray-500"></div>
//         <div className="w-56 h-64 bg-gray-200 dark:bg-gray-500"></div>
//         <div className="w-56 h-64 bg-gray-200 dark:bg-gray-500"></div>
//         <div className="w-56 h-64 bg-gray-200 dark:bg-gray-500"></div>
//         <div className="w-56 h-64 bg-gray-200 dark:bg-gray-500"></div>
//         <div className="w-56 h-64 bg-gray-200 dark:bg-gray-500"></div>
//         <div className="w-56 h-64 bg-gray-200 dark:bg-gray-500"></div>
//         <div className="w-56 h-64 bg-gray-200 dark:bg-gray-500"></div>
//         <div className="w-56 h-64 bg-gray-200 dark:bg-gray-500"></div>
//         <div className="w-56 h-64 bg-gray-200 dark:bg-gray-500"></div>
//         <div className="w-56 h-64 bg-gray-200 dark:bg-gray-500"></div>
//         <div className="w-56 h-64 bg-gray-200 dark:bg-gray-500"></div>
//         <div className="w-56 h-64 bg-gray-200 dark:bg-gray-500"></div>
//       </div>
//     </div>
//   );
// };

import { ShimmerPostItem } from "react-shimmer-effects";

const Shimmer = () => {
  return (
    <div className="flex justify-center items-center dark:bg-black">
      <div className="shimmer-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 py-6">
        {/* Render shimmer cards dynamically */}
        {Array.from({ length: 15 }).map((_, index) => (
          <ShimmerPostItem
            key={index}
            card
            title
            text
            cta
            imageType="thumbnail"
            imageWidth={80}
            imageHeight={80}
            contentCenter
          />
        ))}
      </div>
    </div>
  );
};

export default Shimmer;
