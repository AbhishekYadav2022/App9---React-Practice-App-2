import React from "react";
import { Link } from "react-router-dom";
import "./ContactList.css";

const ContactList = () => {
  return (
    <>
      <Link to={"/contact/add"}>
        <button className="newContact">New Contact</button>
      </Link>
      <div className="container">
        <div className="contactCard">
          <div className="contactDetails">
            <span className="name">Name: Abhishek</span>
            <span className="phone">Phone: 9067465890</span>
          </div>
          <div className="actionBtns">
            <Link to={"/contact/view/:contactId"}>
              <button className="view">View</button>
            </Link>
            <Link to={"/contact/edit/:contactId"}>
              <button className="edit">Edit</button>
            </Link>
            <button className="delete">Delete</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactList;
