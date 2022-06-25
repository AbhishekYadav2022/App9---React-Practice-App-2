import React from "react";
import { Link } from "react-router-dom"
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <ul>
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <li>Contact Us</li>
          <li>Services</li>
          <li>Blog</li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
