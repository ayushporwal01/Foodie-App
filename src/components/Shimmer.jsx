const Shimmer = () => {
  return (
    <div className="flex justify-center items-center dark:bg-black min-h-screen">
      <div className="flex flex-wrap justify-center gap-10 py-4">
        {/* Card */}
        <div className="shimmer-card">
          <div className="shimmer-img"></div>
          <div className="shimmer-line"></div>
          <div className="shimmer-line-short"></div>
          <div className="shimmer-tags">
            <div className="shimmer-tag"></div>
            <div className="shimmer-tag"></div>
            <div className="shimmer-tag"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
