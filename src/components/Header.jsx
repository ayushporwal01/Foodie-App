import { useState, useEffect } from "react";

//Named Export
const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  //if no dependency array => useEffect called on every render
  //if dependency array is empty => useEffect called only on initial render(once)
  //if dependency array is [btnName] => useEffect called when btnName update
  useEffect(() => {
    console.log("useEffect called!");
  });

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="/food-logo.png" alt="Food Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login-btn"
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
