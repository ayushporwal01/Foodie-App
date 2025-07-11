import { useState } from "react";

const About = () => {
  const [showProfile, setShowProfile] = useState(false);

  const toggleProfile = () => setShowProfile((prev) => !prev);

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      {/* Initial Content */}
      <div className="flex items-center justify-center">
        <h2 className="text-6xl max-w-1/2 font-bold text-[#555] leading-snug">
          Home of your next favorite meal.
        </h2>

        <img src="/pizza.png" className="w-96" alt="" />
      </div>

      {/* Profile Section */}
      
      
      {/* Show Profile Button */}
      <div>
        <button
          onClick={toggleProfile}
          className="px-4 py-2 bg-[#e08300] hover:bg-[#e08e00] text-md font-bold text-white rounded-full cursor-pointer"
        >
          {showProfile ? "Hide Profile" : "Show Profile"}
        </button>
      </div>
    </div>
  );
};

export default About;
