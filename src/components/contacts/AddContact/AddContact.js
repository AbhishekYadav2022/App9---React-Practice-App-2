import React from "react";
import "./AddContact.css";
import {Link} from 'react-router-dom'

function AddContact() {
  return (
    <>
      <div className="contactForm">
        <div className="heading">Contact Form</div>
        <div className="form">
          <form action="">
            <span>
              <input type="text" placeholder="Name" />
            </span>
            <span>
              <input type="text" placeholder="Phone" />
            </span>
          </form>
        </div>
        <div className="formBtns">
          <button className="create" type="submit">Create</button>
          <Link to={'/contact/list'}><button className="cancel">Cancel</button></Link>
        </div>
      </div>
    </>
  );
}

export default AddContact;
