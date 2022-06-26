import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import ContactService from "../../../services/ContactService";
import Spinner from "../../spinner/Spinner";

const EditContact = () => {
  let navigate = useNavigate();

  let { contactId } = useParams();

  let [state, setState] = useState({
    loading: false,
    contact: {
      name: "",
      phone: "",
    },
    errorMessage: "",
  });

  useEffect(() => {
    async function updateContact() {
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
    updateContact();
  }, [contactId]);

  let updateInput = (event) => {
    setState({
      ...state,
      contact: {
        ...state.contact,
        [event.target.name]: event.target.value,
      },
    });
  };

  let { loading, contact, errorMessage } = state;

  let submitForm = async (event) => {
    event.preventDefault();
    try {
      let response = await ContactService.updateContact(
        state.contact,
        contactId
      );
      if (response) {
        navigate("/contact/list", { replace: true });
      }
    } catch (error) {
      setState({ ...state, errorMessage: error.message });
      navigate(`/contact/edit/${contactId}`, { replace: false });
    }
  };

  return (
    <>
      {/* <pre>{JSON.stringify(contact)}</pre> */}
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="contactForm">
            <div className="heading">Edit Contact</div>
            <div className="form">
              <form onSubmit={submitForm}>
                <span>
                  <input
                    required={true}
                    onChange={updateInput}
                    name="name"
                    type="text"
                    placeholder="Name"
                    value={contact.name}
                  />
                </span>
                <span>
                  <input
                    required={true}
                    onChange={updateInput}
                    name="phone"
                    type="number"
                    placeholder="Phone"
                    value={contact.phone}
                  />
                </span>
                <div className="formBtns">
                  <button className="create" type="submit">
                    Update
                  </button>
                  <Link to={"/contact/list"}>
                    <button className="cancel">Cancel</button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default EditContact;
