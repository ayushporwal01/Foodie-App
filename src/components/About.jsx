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
      <div
        className={`absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-in-out ${
          showProfile ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold text-[#444] mb-4">Your Profile</h2>
          <p className="text-lg text-gray-600 max-w-md">
            Welcome to your profile! Here you can manage your orders,
            preferences, and more.
          </p>
        </div>
      </div>
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
