const About = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      {/* Initial Content */}
      <div className="flex justify-center items-center gap-14">
        <div className="flex flex-col items-center gap-8">
          <h2 className="text-4xl font-bold text-[#545454]">
            Home of your next favorite bite.
          </h2>
        </div>
        <img src="/pizza.png" className="w-96" alt="" />
      </div>
    </div>
  );
};

export default About;
