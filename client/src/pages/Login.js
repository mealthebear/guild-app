import UserLoginForm from '../components/UserLoginForm.js';
import React, { useState } from 'react';

const Login = (props) => {
  return (
    <>
      <UserLoginForm getAdmin={props.getAdmin} />
    </>
  )
}

export default Login;
