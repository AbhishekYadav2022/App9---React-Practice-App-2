import React, { useState } from "react";
import "./AddContact.css";
import { Link, useNavigate } from "react-router-dom";
import ContactService from "../../../services/ContactService";

function AddContact() {

  let navigate = useNavigate();

  let [state, setState] = useState({
    loading: false,
    contact: {
      name: "",
      phone: "",
    },
    errorMessage: "",
  });

  let updateInput = (event) => {
    setState({
      ...state,
      contact: {
        ...state.contact,
        [event.target.name]: event.target.value,
      },
    });
  };

  let submitForm = async (event) => {
    event.preventDefault();
    try{
        let response = await ContactService.createContact(state.contact)
        if (response){
          navigate('/contact/list', {replace: true})
        }
    }
    catch (error) {
      setState({...state, errorMessage: error.message})
      navigate('/contact/add', {replace: false})
    }
  }

  let { loading, contact, groups, errorMessage } = state;

  return (
    <>
      {/* <pre>{JSON.stringify(state.contact)}</pre> */}
      <div className="contactForm">
        <div className="heading">Contact Form</div>
        <div className="form">
          <form onSubmit={submitForm}>
            <span>
              <input
                required={true}
                name="name"
                value={contact.name}
                onChange={updateInput}
                type="text"
                placeholder="Name"
              />
            </span>
            <span>
              <input
                required={true}
                name="phone"
                value={contact.phone}
                onChange={updateInput}
                type="number"
                placeholder="Phone"
              />
            </span>
            <div className="formBtns">
              <button className="create" type="submit">
                Create
              </button>
              <Link to={"/contact/list"}>
                <button className="cancel">Cancel</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddContact;
