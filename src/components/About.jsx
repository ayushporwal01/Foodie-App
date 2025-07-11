const About = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      {/* Initial Content */}
      <div className="flex justify-center items-center gap-14">
        <div c>
          <h2 className="text-4xl font-bold text-gray-700">
            Home of your next favorite bite.
          </h2>
          <button className="px-4 py-1.5 bg-black text-lg text-white font-bold rounded-md">Show Profile</button>
        </div>
        <img src="/pizza.png" className="w-96" alt="" />
      </div>
    </div>
  );
};

export default About;
