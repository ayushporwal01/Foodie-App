import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import ReactSwitch from "react-switch";

//Named Export
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  //dark mode feature
  const [darkMode, setDarkMode] = useState("dark");
  useEffect(() => {
    console.log(darkMode);
    if (darkMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
  };

  return (
    <div className="header h-24 flex justify-between items-center border pr-13 fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black dark:text-white">
      <div className="logo-container">
        <img className="logo w-30" src="/food-logo.png" alt="Food Logo" />
      </div>
      <div className="nav-items">
        <ul className="flex space-x-10">
          <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="hover:text-blue-500">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-blue-500">
            <Link to="/about">About Us</Link>
          </li>
          <li className="hover:text-blue-500">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="hover:text-blue-500">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="hover:text-blue-500 cursor-pointer">Cart</li>
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
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
