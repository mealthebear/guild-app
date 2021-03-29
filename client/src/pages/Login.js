import UserLoginForm from '../components/UserLoginForm.js';
import React, { useState } from 'react';

const Login = (props) => {
  return (
    <>
      <UserLoginForm authenticateUser={props.authenticateUser} />
    </>
  )
}

export default Login;
