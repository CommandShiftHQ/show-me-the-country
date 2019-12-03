import React from "react";

import "../styles/ErrorMessage.css";

const ErrorMessage = props => (
  <div className="alert">
    <span className="closebtn" onClick={props.handleOnClick}>
      &times;
    </span>
    Opps something went wrong!
  </div>
);

export default ErrorMessage;
