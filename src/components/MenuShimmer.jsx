const MenuShimmer = () => {
  return (
    <div className="min-h-screen flex flex-col items-center">
      {/* Header */}
      <div className="w-[55%] h-50 bg-gray-200 flex justify-start items-center p-4 gap-x-5">
        {/* Image */}
        <div className="w-64 h-40 border border-[#adadad] rounded-sm"></div>
        {/* Lines */}
        <div className="flex flex-col flex-1 space-y-8">
          <div className="w-[90%] h-4 bg-[#adadad]"></div>
          <div className="w-[25%] h-4 bg-[#adadad] mt-2"></div>
          <div className="flex space-x-5 mt-2">
            <div className="w-[40%] h-4 bg-[#adadad]"></div>
            <div className="w-[40%] h-4 bg-[#adadad]"></div>
            <div className="w-[40%] h-4 bg-[#adadad]"></div>
          </div>
        </div>
      </div>

      {/* Menu */}
      <div className="w-[55%] h-50 flex flex-col justify-start pt-10">
        {/* Category */}
        <div className="ml-10 flex flex-col space-y-5">
          <div className="w-48 h-4 bg-[#adadad]"></div>
          <div className="w-30 h-4 bg-[#adadad]"></div>
        </div>

        {/* Items */}
        <div className="flex justify-between items-center gap-5 bg-white shadow-light mt-10 p-4">
          <div className="flex flex-col space-y-3">
            <div className="w-56 h-4 bg-[#adadad] ml-10"></div>
            <div className="w-28 h-4 bg-[#adadad] ml-10 mt-4"></div>
            <div className="w-64 h-4 bg-[#adadad] ml-10 mt-4"></div>
          </div>
          <div className="h-[105px] w-[105px] bg-gray-200 border border-[#adadad] rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default MenuShimmer;
