import React, { useState } from 'react';

const LoginMessage = (props) => {
  const errorMessage = <p className="login-message error-message">Username and/or password invalid. Please try again.</p>
  const successMessage = <p className="login-message success-message">You've successfully logged in! You may access the inventory page.</p>

  return (
    <>
      {props.messageType ? successMessage : errorMessage}
    </>
  )
}

export default LoginMessage;
