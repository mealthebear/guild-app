import UserLoginForm from '../components/UserLoginForm.js';
import React, { useState } from 'react';

const Login = (props) => {
  return (
    <>
      <UserLoginForm 
        authenticateUser={props.authenticateUser}
        messageType={props.messageType}
        showMessage={props.showMessage}
      />
    </>
  )
}

export default Login;
