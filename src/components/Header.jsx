import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import ReactSwitch from "react-switch";
import { FaSun, FaMoon } from "react-icons/fa";
import { useSelector } from "react-redux";

//Named Export
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

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
    <div className="header h-24 flex justify-between items-center border-b pr-13 fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black dark:text-white ">
      <div className="logo-container">
        <img className="logo w-24 ml-10" src="/foodie2.png" alt="Food Logo" />
      </div>
      <div className="nav-items">
        <ul className="flex space-x-10">
          <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className=" hover:text-[#e08300]">
            <Link to="/">Home</Link>
          </li>
          <li className=" hover:text-[#e08300]">
            <Link to="/about">About Us</Link>
          </li>
          <li className=" hover:text-[#e08300]">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className=" hover:text-[#e08300]">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className=" hover:text-[#e08300] cursor-pointer">
            <Link to="/cart"> Cart ({cartItems.length} items)</Link>
          </li>
          <button
            className="login-btn w-18 h-8 bg-gray-500 text-white hover:bg-gray-600 transition-all ease-in cursor-pointer"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>

          <li className="font-semibold cursor-pointer">{loggedInUser}</li>

          {/* Dark Mode Toggle */}
          <li className="flex items-center gap-2">
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
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
