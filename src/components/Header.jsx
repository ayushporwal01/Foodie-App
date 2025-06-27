import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

//Named Export
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="header flex justify-between items-center border pr-13">
      <div className="logo-container">
        <img className="logo w-30" src="/food-logo.png" alt="Food Logo" />
      </div>
      <div className="nav-items">
        <ul className="flex space-x-10">
          <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="cursor-pointer">Cart</li>
          <button
            className="login-btn w-18 h-8 bg-gray-500 text-white hover:bg-gray-600 transition-all ease-in cursor-pointer"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
