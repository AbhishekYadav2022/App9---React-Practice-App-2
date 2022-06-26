import React from "react";
import loader from "../../images/loader.gif"
import loader1 from "../../images/loader1.gif"
import "./Spinner.css"

const Spinner = () => {
  return (
    <>
      <img className="loader" src={loader} alt="Loading..." />
    </>
  );
};

export default Spinner;
