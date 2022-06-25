import React from "react";
import { Link } from 'react-router-dom'


const EditContact = () => {
  return (
    <>
      <div className="contactForm">
        <div className="heading">Edit Contact</div>
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
          <button className="create" type="submit">
            Update
          </button>
          <Link to={"/contact/list"}>
            <button className="cancel">Cancel</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default EditContact;
