import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import ReactSwitch from "react-switch";
import { FaSun, FaMoon } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { useSelector } from "react-redux";

//Named Export
const Header = () => {
  const onlineStatus = useOnlineStatus();

  //Subscribing to the Store using a Selector
  const cartItems = useSelector((store) => store.cart.items);

  //dark mode feature
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    if (darkMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
  };

  return (
    <div className="header h-20 flex justify-between items-center border-b pr-13 fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black dark:text-white ">
      <div className="logo-container">
        <img className="logo w-[90px] ml-8" src="/foodie2.png" alt="Food Logo" />
      </div>
      <div className="nav-items flex items-center space-x-10">
        {/* Navigation */}
        <ul className="flex space-x-10">
          <li className="font-medium text-gray-700 dark:text-white hover:text-[#e08300] hidden">
            <Link to="/">Home</Link>
          </li>
          <li className="font-medium text-gray-700 dark:text-white hover:text-[#e08300] hidden">
            <Link to="/about">About Us</Link>
          </li>
          <li className="font-medium text-gray-700 dark:text-white hover:text-[#e08300] hidden">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="relative hover:text-[#e08300] cursor-pointer">
            <Link to="/cart" className="relative flex items-center justify-center">
              <TiShoppingCart className="text-2xl text-[#444] dark:text-white" />
              <span className="absolute -top-0.5 -right-1.5 bg-[#e08300] text-white text-[10px] w-3.5 h-3.5 rounded-full flex justify-center items-center">
                {cartItems.length}
              </span>
            </Link>
          </li>
        </ul>

        <div className="flex items-center space-x-4">
          {/* Login / Logout Button */}
          <button className="login-btn px-3.5 py-1 bg-[#e08300] text-white font-medium rounded-md hover:bg-[#f08c00] transition-all ease-in cursor-pointer">
            Login
          </button>

          {/* Online Status */}
          <span
            className={`text-sm select-none ${
              onlineStatus ? "text-green-500" : "text-red-500"
            }`}
          >
            ●
          </span>
        </div>

        {/* Dark Mode Toggle */}
        <ReactSwitch
          onChange={toggleDarkMode}
          checked={darkMode === "dark"}
          checkedIcon={
            <div className="flex items-center justify-center h-full pl-1 text-white text-xs">
              <FaMoon size={12} />
            </div>
          }
          uncheckedIcon={
            <div className="flex items-center justify-center h-full pl-1 text-yellow-500 text-xs">
              <FaSun size={12} />
            </div>
          }
        />
      </div>
    </div>
  );
};

export default Header;
