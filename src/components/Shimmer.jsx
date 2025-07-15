const ShimmerCard = () => (
  <div className="shimmer-card">
    <div className="shimmer-img animate-shimmer"></div>
    <div className="shimmer-line animate-shimmer"></div>
    <div className="shimmer-line-short animate-shimmer"></div>
    <div className="shimmer-tags">
      <div className="shimmer-tag animate-shimmer"></div>
      <div className="shimmer-tag animate-shimmer"></div>
      <div className="shimmer-tag animate-shimmer"></div>
    </div>
  </div>
);

const Shimmer = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-wrap justify-center gap-10 py-4">
        {/* Card */}
        {[...Array(20)].map((_, i) => (
          <ShimmerCard key={i} />
        ))}
      </div>
    </div>
  
};

export default Shimmer;
