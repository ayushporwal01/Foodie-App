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
      <div className="w-[55%] h-50 flex flex-col justify-start pt-16">
        <div className="w-48 h-4 bg-[#adadad]">
        
      </div>    
      </div>
    </div>
  );
};

export default MenuShimmer;
