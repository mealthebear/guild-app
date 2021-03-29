import React, { useState } from 'react';

const UserLoginForm = (props) => {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const getAdmin = (event) => {
    event.preventDefault()
    const userObject = {
      password: password,
      username: username,
    };
    props.getAdmin(userObject);
  }

  return (
    <>
    <img className="blue-gradient" src="./images/blue-gradient.jpg" />
    <form className="login-form" onSubmit={(event) => getAdmin(event)}>
      <h2 className="subheading subheading-login">Login To Your Account</h2>
      <div className="input-field-group">
        <label className="form-label">Username</label>
        <input className="form-input form-input-login" onChange={(event) => setUsername(event.target.value)} placeholder="Enter Username" required />
      </div>
      <div className="input-field-group">
        <label className="form-label">Password</label>
        <input className="form-input form-input-login" onChange={(event) => setPassword(event.target.value)} placeholder="Enter Password" required />
      </div>
      <input className="confirm-button confirm-button-login" type="submit" value="Login" />
    </form>
    </>
  )
}

export default UserLoginForm;
