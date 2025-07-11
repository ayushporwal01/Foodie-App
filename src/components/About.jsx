const About = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      {/* Initial Content */}
      <div className="flex flex-col justify-center items-center">
        <div className="flex items-center justify-center">
          <h2 className="text-6xl max-w-1/2 font-bold text-[#555] leading-snug">
            Home of your next favorite bite.
          </h2>

          <img src="/pizza.png" className="w-96" alt="" />
        </div>
        <button className="px-4 py-2 bg-[#e08300] hover:bg-[#e08e00] text-md font-bold text-white rounded-full cursor-pointer">Show Profile</button>
      </div>
    </div>
  );
};

export default About;
