import { useState } from "react";

const About = () => {
  const [showProfile, setShowProfile] = useState(false);

  const toggleProfile = () => setShowProfile((prev) => !prev);

  return (
    <div className="relative h-screen flex flex-col justify-center items-center overflow-hidden dark:bg-black">
      {/* Initial Content */}
      <div
        className={`absolute inset-0 flex items-center justify-center space-x-5 transition-transform duration-500 ease-in-out ${
          showProfile ? "-translate-x-full" : "translate-x-0"
        }`}
      >
        <h2 className="text-6xl max-w-[35%] font-bold text-[#555] leading-snug">
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
        <div className="bg-white rounded-2xl shadow-xl p-8 w-[90%] max-w-lg mx-auto text-center">
          {/* GitHub Profile Image */}
          <img
            src="https://github.com/ayushporwal01.png"
            className="h-30 rounded-full mx-auto mb-4 border-2 border-gray-300"
            loading="lazy"
            alt="GitHub Avatar"
          />
          {/* Name + Tagline */}
          <h2 className="text-3xl font-bold text-[#333] mb-1">Ayush Porwal</h2>
          <p className="text-gray-600 text-lg">Frontend Developer</p>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mt-4 text-2xl text-[#444]">
            <a
              href="https://github.com/ayushporwal01"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github hover:text-black"></i>
            </a>
            <a
              href="https://linkedin.com/in/ayushporwal1"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin hover:text-blue-600"></i>
            </a>
            <a
              href="https://twitter.com/AyushPorwal113"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-twitter hover:text-blue-400"></i>
            </a>
            <a
              href="https://reddit.com/user/Fluffy_Log7489"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-reddit hover:text-orange-500"></i>
            </a>
            <a
              href="https://instagram.com/porwalayushofficial"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-instagram hover:text-pink-500"></i>
            </a>
          </div>

          {/* Skills */}
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <span className="bg-gray-100 text-sm px-3 py-1 rounded-full">
              HTML
            </span>
            <span className="bg-gray-100 text-sm px-3 py-1 rounded-full">
              CSS
            </span>
            <span className="bg-gray-100 text-sm px-3 py-1 rounded-full">
              JavaScript
            </span>
            <span className="bg-gray-100 text-sm px-3 py-1 rounded-full">
              Tailwind
            </span>
            <span className="bg-gray-100 text-sm px-3 py-1 rounded-full">
              React
            </span>
          </div>
        </div>
      </div>

      {/* Show Profile Button */}
      <div className="absolute bottom-28">
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
