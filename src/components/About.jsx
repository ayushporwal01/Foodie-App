const About = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      {/* Initial Content */}
      <div className="flex justify-center items-center">
        <h2 className="text-6xl max-w-1/2 font-bold text-[#555] leading-snug">
          Home of your next favorite bite.
        </h2>

        <img src="/pizza.png" className="w-96" alt="" />
      </div>
    </div>
  );
};

export default About;
