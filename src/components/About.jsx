const About = () => {

  return (
    <div className="h-screen flex justify-center items-center overflow-y-hidden">
      {/* Initial Content */}
      <div className="flex justify-center items-center gap-14">
        <h2 className="text-4xl font-bold text-gray-700">
          Home of your next favorite bite.
        </h2>
        <img src="/pizza.png" className="w-96" alt="" />
      </div>
    </div>
  );
};

export default About;
