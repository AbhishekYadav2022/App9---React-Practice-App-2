import React, { useEffect, useState } from "react";
import "./ViewContact.css";
import { Link, useParams } from "react-router-dom";
import camera from "../../../images/camera.png";
import ContactService from "../../../services/ContactService";
import Spinner from "../../spinner/Spinner";

const ViewContact = () => {
  let { contactId } = useParams();

  let [state, setState] = useState({
    loading: false,
    contact: {},
    errorMessage: "",
  });

  useEffect(() => {
    async function getContactData() {
      try {
        setState({ ...state, loading: true });
        let response = await ContactService.getContact(contactId);
        setState({
          ...state,
          loading: false,
          contact: response.data,
        });
      } catch (error) {
        setState({
          ...state,
          loading: false,
          errorMessage: error.message,
        });
      }
    }
    getContactData();
  }, [contactId]);

  let { loading, contact, errorMessage } = state;
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          {/* <h1>{contactId}</h1> */}
          <div className="viewContainer">
            <div className="contactCard">
              <img className="camera" src={camera} alt="profile_picture" />
              <div className="contactDetails">
                <span className="name">Name: {contact.name}</span>
                <span className="phone">Phone: {contact.phone}</span>
              </div>
              <div className="actionBtns">
                <Link to={"/contact/list"}>
                  <button className="back">Back</button>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ViewContact;
