import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ContactList.css";
import profile from "../../../images/profile.png";
import add_link from "../../../images/add_link.png";
import add_file from "../../../images/add_file.png";
import ContactService from "../../../services/ContactService";
import Spinner from "../../spinner/Spinner";

const ContactList = () => {
  let [state, setState] = useState({
    loading: false,
    contacts: [],
    errorMessage: "",
  });

  // useEffect(async () => {

  // }, []);

  useEffect(() => {
    async function getData() {
      try {
        setState({ ...state, loading: true });
        let response = await ContactService.getAllContacts();
        setState({
          ...setState,
          loading: false,
          contacts: response.data,
        });
      } catch (error) {
        setState({
          ...state,
          loading: false,
          errorMessage: error.message,
        });
      }
    }
    getData();
  }, []);

  let { loading, contacts, errorMessage } = state;

  let clickDelete = async (contactId) => {
    try {
      let response = await ContactService.deleteContact(contactId);
      if (response) {
        setState({ ...state, loading: true });
        let response = await ContactService.getAllContacts();
        setState({
          ...setState,
          loading: false,
          contacts: response.data,
        });
      }
    } catch (error) {
      setState({
        ...state,
        loading: false,
        errorMessage: error.message,
      });
    }
  };

  return (
    <div className="mainContainer">
      {/* <pre>{JSON.stringify(contacts)}</pre> */}
      <Link to={"/contact/add"}>
        {/* <button className="newContact">New Contact</button> */}
        <img className="addContact" src={add_file} />
      </Link>

      {/* Showing Spinner  */}
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="container">
            {/* Looping through the content  */}
            {contacts.length > 0 &&
              contacts.map((contact) => {
                return (
                  <>
                    <div className="contactCard" key={contact.id}>
                      <img className="profile" src={profile} />
                      <div className="contactDetails">
                        <span className="name">{contact.name}</span>
                        <span className="phone">{contact.phone}</span>
                      </div>
                      <div className="actionBtns">
                        <Link to={`/contact/view/${contact.id}`}>
                          <button className="view">View</button>
                        </Link>
                        <Link to={`/contact/edit/${contact.id}`}>
                          <button className="edit">Edit</button>
                        </Link>
                        <button
                          className="delete"
                          onClick={() => clickDelete(contact.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
        </>
      )}
    </div>
  );
};

export default ContactList;
