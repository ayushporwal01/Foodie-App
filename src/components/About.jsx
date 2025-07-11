import { useState } from "react";


const About = () => {
  const [showProfile, setShowProfile] = useState(false);
  
  return (
    <div className="flex justify-center items-center py-48">
      {/* Initial Content */}
      <div className="flex justify-center items-center gap-14">
        <h2 className="text-4xl font-bold text-gray-700">
          Home of your next favorite bite."
        </h2>
        <img src="/pizza.png" className="w-96 " alt="" />
      </div>

      {/* Show Profile Button */}
      <button className="bg-blue-500">Show Profile</button>
    </div>
  );
};

export default About;
