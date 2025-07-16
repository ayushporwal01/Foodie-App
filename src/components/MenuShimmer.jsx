import { useEffect } from "react";

const ShimmerItem = () => (
  <div className="item-card">
    <div className="item-text-block">
      <div className="item-line-md animate-shimmer"></div>
      <div className="item-line-sm animate-shimmer"></div>
      <div className="item-line-lg animate-shimmer"></div>
    </div>
    <div className="item-image animate-shimmer"></div>
  </div>
);

const MenuShimmer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center">
      {/* Header */}
      <div className="w-full max-w-[52rem] h-80 md:h-50 bg-gray-200 dark:bg-[#1f1f1f] flex flex-col md:flex-row justify-start items-start p-5 space-y-4 md:space-x-5">
        {/* Image */}
        <div className="w-64 h-40 border border-[#adadad] rounded-sm animate-shimmer"></div>
        {/* Lines */}
        <div className="flex flex-col flex-1 space-y-5 pt-2 md:pt-3 justify-start">
          <div className="w-4/5 md:w-3/4 h-4 bg-[#adadad] animate-shimmer"></div>
          <div className="w-1/2 md:w-1/4 h-4 bg-[#adadad] animate-shimmer"></div>
          <div className="flex space-x-8">
            <div className="w-[28%] min-w-[80px] h-4 bg-[#adadad] animate-shimmer"></div>
            <div className="w-[28%] min-w-[80px] h-4 bg-[#adadad] animate-shimmer"></div>
            <div className="w-[28%] min-w-[80px] h-4 bg-[#adadad] animate-shimmer"></div>
          </div>
        </div>
      </div>

      {/* Menu */}
      <div className="w-full max-w-[52.5rem] h-50 flex flex-col justify-start pt-10">
        {/* Category */}
        <div className="ml-10 flex flex-col space-y-5">
          <div className="w-48 h-4 bg-[#adadad] animate-shimmer"></div>
          <div className="w-30 h-4 bg-[#adadad] animate-shimmer"></div>
        </div>

        {/* Items */}
        {[...Array(10)].map((_, i) => (
          <ShimmerItem key={i} />
        ))}
      </div>
    </div>
  );
};

export default MenuShimmer;
