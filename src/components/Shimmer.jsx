const Shimmer = () => {
  return (
    <div className="flex justify-center items-center dark:bg-black min-h-screen">
      <div className="shimmer-container flex flex-wrap justify-center gap-10 py-4">
        <div className="w-60 p-4 bg-white rounded-lg shadow-2xl hover:shadow-black/50 transition-all duration-300 animate-pulse">
            <div className="h-40 bg-gray-300 rounded mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
