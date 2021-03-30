import React, { useState } from 'react';

const RegisterMessage = (props) => {
  const errorMessage = <p 
    className="register-message register-message-error">
      Oops! Looks like something went wrong. Please enter your info again.
  </p>
  
  const successMessage = <p 
    className="register-message register-message-success">
      Thank you! We'll reach out to you soon.
  </p>

  return (
    <>
      {props.messageType ? successMessage : errorMessage}
    </>
  )
}

export default RegisterMessage;
