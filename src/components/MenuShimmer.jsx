const MenuShimmer = () => {
  return (
    <div className="min-h-screen flex flex-col items-center">
      {/* Header */}
      <div className="w-[55%] h-50 bg-gray-200 dark:bg-[#1f1f1f] flex justify-start items-center p-5 gap-x-5">
        {/* Image */}
        <div className="w-64 h-40 border border-[#adadad] rounded-sm animate-shimmer"></div>
        {/* Lines */}
        <div className="flex flex-col flex-1 space-y-8">
          <div className="w-[90%] h-4 bg-[#adadad] animate-shimmer"></div>
          <div className="w-[25%] h-4 bg-[#adadad] mt-2 animate-shimmer"></div>
          <div className="flex space-x-5 mt-2">
            <div className="w-[40%] h-4 bg-[#adadad] animate-shimmer"></div>
            <div className="w-[40%] h-4 bg-[#adadad] animate-shimmer"></div>
            <div className="w-[40%] h-4 bg-[#adadad] animate-shimmer"></div>
          </div>
        </div>
      </div>

      {/* Menu */}
      <div className="w-[55%] h-50 flex flex-col justify-start pt-10">
        {/* Category */}
        <div className="ml-10 flex flex-col space-y-5">
          <div className="w-48 h-4 bg-[#adadad] animate-shimmer"></div>
          <div className="w-30 h-4 bg-[#adadad] animate-shimmer"></div>
        </div>

        {/* Items */}
        <div className="item-card">
          <div className="item-text-block">
            <div className="item-line-md animate-shimmer"></div>
            <div className="item-line-sm animate-shimmer"></div>
            <div className="item-line-lg animate-shimmer"></div>
          </div>
          <div className="item-image animate-shimmer"></div>
        </div>
        <div className="item-card">
          <div className="item-text-block">
            <div className="item-line-md animate-shimmer"></div>
            <div className="item-line-sm animate-shimmer"></div>
            <div className="item-line-lg animate-shimmer"></div>
          </div>
          <div className="item-image animate-shimmer"></div>
        </div>
        <div className="item-card">
          <div className="item-text-block">
            <div className="item-line-md animate-shimmer"></div>
            <div className="item-line-sm animate-shimmer"></div>
            <div className="item-line-lg animate-shimmer"></div>
          </div>
          <div className="item-image animate-shimmer"></div>
        </div>
        <div className="item-card">
          <div className="item-text-block">
            <div className="item-line-md animate-shimmer"></div>
            <div className="item-line-sm animate-shimmer"></div>
            <div className="item-line-lg animate-shimmer"></div>
          </div>
          <div className="item-image animate-shimmer"></div>
        </div>
        <div className="item-card">
          <div className="item-text-block">
            <div className="item-line-md animate-shimmer"></div>
            <div className="item-line-sm animate-shimmer"></div>
            <div className="item-line-lg animate-shimmer"></div>
          </div>
          <div className="item-image animate-shimmer"></div>
        </div>
        <div className="item-card">
          <div className="item-text-block">
            <div className="item-line-md animate-shimmer"></div>
            <div className="item-line-sm animate-shimmer"></div>
            <div className="item-line-lg animate-shimmer"></div>
          </div>
          <div className="item-image animate-shimmer"></div>
        </div>
        <div className="item-card">
          <div className="item-text-block">
            <div className="item-line-md animate-shimmer"></div>
            <div className="item-line-sm animate-shimmer"></div>
            <div className="item-line-lg animate-shimmer"></div>
          </div>
          <div className="item-image animate-shimmer"></div>
        </div>
        <div className="item-card">
          <div className="item-text-block">
            <div className="item-line-md animate-shimmer"></div>
            <div className="item-line-sm animate-shimmer"></div>
            <div className="item-line-lg animate-shimmer"></div>
          </div>
          <div className="item-image animate-shimmer"></div>
        </div>
        <div className="item-card">
          <div className="item-text-block">
            <div className="item-line-md animate-shimmer"></div>
            <div className="item-line-sm animate-shimmer"></div>
            <div className="item-line-lg animate-shimmer"></div>
          </div>
          <div className="item-image animate-shimmer"></div>
        </div>
        <div className="item-card">
          <div className="item-text-block">
            <div className="item-line-md animate-shimmer"></div>
            <div className="item-line-sm animate-shimmer"></div>
            <div className="item-line-lg animate-shimmer"></div>
          </div>
          <div className="item-image animate-shimmer"></div>
        </div>
      </div>
    </div>
  );
};

export default MenuShimmer;
