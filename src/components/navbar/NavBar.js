import React from "react";
import Spinner from "../spinner/Spinner";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <ul>
          <li>Home</li>
          <li>Contact Us</li>
          <li>Services</li>
          <li>Blog</li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
