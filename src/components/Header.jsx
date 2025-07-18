import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { FaSun, FaMoon } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { useSelector } from "react-redux";

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
    <div className="header h-16 md:h-20 flex justify-between items-center px-6 gap-6 bg-white dark:bg-black border-b fixed top-0 left-0 right-0 z-50 dark:text-white">
      {/* Logo */}
      <img
        className="logo w-[70px] md:w-[85px] md:ml-5 shrink-0"
        src="/foodie.png"
        alt="Food Logo"
      />
      <div className="nav-items flex items-center space-x-8 md:space-x-10 mr-3">
        {/* Navigation */}
        <ul className="flex space-x-10">
          <li className="font-medium text-gray-700 dark:text-white hover:text-[#e08300] hidden md:block">
            <Link to="/"> Home</Link>
          </li>
          <li className="font-medium text-gray-700 dark:text-white hover:text-[#e08300] hidden md:block">
            <Link to="/about"> About Us</Link>
          </li>
          <li className="font-medium text-gray-700 dark:text-white hover:text-[#e08300] hidden md:block">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="relative hover:text-[#e08300] cursor-pointer">
            <Link
              to="/cart"
              className="relative flex items-center justify-center"
            >
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
              onlineStatus ? "text-green-500" : "text-red-700"
            }`}
          >
            ●
          </span>
        </div>

        {/* Dark Mode Toggle */}
        <div className="-ml-3 md:-ml-5">
          <button
            onClick={toggleDarkMode}
            className="text-xl transition-all duration-300 ease-in-out hover:text-[#e08300] mt-1 cursor-pointer"
          >
            <span
              className={`inline-block transform transition-all duration-300 ${
                darkMode === "dark"
                  ? "rotate-0 scale-100"
                  : "rotate-180 scale-110"
              }`}
            >
              {darkMode === "dark" ? (
                <FaMoon className="text-white" />
              ) : (
                <FaSun className="text-yellow-500" />
              )}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
