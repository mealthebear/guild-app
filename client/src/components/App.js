import axios from 'axios';
import Inventory from '../pages/Inventory.js';
import Landing from '../pages/Landing.js';
import Login from '../pages/Login.js';
import Navbar from '../components/Navbar.js';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';

const App = () => {
  const [authorizedUser, setAuthorization] = useState(false);
  const [listOfMats, setList] = useState([]);
  const [messageType, setMessageType] = useState(false);
  const [showMessage, setMessageBoolean] = useState(false);
  const [registerMessageType, setRegisterMessage] = useState(false);
  const [showRegisterMessage, setRegisterBoolean] = useState(false);

  useEffect(() => {
    verifyUser()
    // Try to convert to async/await
    getAllMats()
      .then((response) => {
        setList(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])

  const authenticateUser = async (user) => {
    try {
      const response = await getAdmin(user);
      if (response.data.length) {
        const { username } = user;
        getToken({ username });
        setMessageType(true);
        setMessageBoolean(true);
      } else {
        setMessageType(false);
        setMessageBoolean(true);
      }
    } catch (err) {
      return err;
    }
  }

  const changeHandler = (event) => {
    return event.target.value;
  }

  const createMat = async (event, item, quantity) => {
    event.preventDefault();
    const mat = {
      name: item,
      quantity: quantity,
    };
    try {
      const response = await axios.post('/api/mats', mat);
      const matList = await getAllMats();
      setList(matList.data);
    } catch (err) {
      return err;
    }
  }

  const createUser = async (event, user) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/users', user);
      setRegisterMessage(true);
      setRegisterBoolean(true);
      return response;
    } catch (err) {
      setRegisterMessage(false);
      setRegisterBoolean(true);
      return err;
    }
  }

  const deleteMat = async (nameOfMat) => {
    let matToBeDeleted = { name: nameOfMat };
    try {
      const response = await axios.delete('/api/mats', {
        data: matToBeDeleted,
      });
      const matList = await getAllMats();
      setList(matList.data);
    } catch (error) {
      return error;
    }
  }

  const getAdmin = async (user) => {
    try {
      const response = await axios.get('/api/admins', {
        params: user,
      });
      return response;
    } catch (err) {
      return err;
    }
  }

  const getAllMats = async () => {
    try {
      const response = await axios.get('/api/mats');
      return response;
    } catch (err) {
      return err;
    }
  }

  const getToken = async (user) => {
    try {
      const response = await axios.post('/auth', user)
    } catch (err) {
      return err;
    }
  }

  const getOneMat = async (item) => {
    try {
      const response = axios.get('/api/onemat', {
        params: { name: item }
      })
      return response;
    } catch (err) {
      return err;
    }
  }

  const updateMat = async (newInfo, nameOfMat) => {
    let updateInfo = {
      updatedInfo: newInfo,
      name: nameOfMat,
    }
    try {
      const response = await axios.put('/api/mats', updateInfo);
      const matList = await getAllMats();
      setList(matList.data);
    } catch (err) {
      return err;
    }
  }

  const verifyUser = async () => {
    try {
      const response = await axios.get('/verify-token');
      if (response.data === "OK") {
        setAuthorization(true);
      }
      return response;
    } catch (err) {
      setAuthorization(false);
      return err;
    }
  }

  return (
    <>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/">
            <Landing 
              createUser={createUser} 
              messageType={registerMessageType} 
              showMessage={showRegisterMessage} 
            />
          </Route>
          <Route exact path="/bank">
            {authorizedUser ? 
            <Inventory
              createMat={createMat}
              deleteMat={deleteMat}
              getAllMats={getAllMats}
              listOfMats={listOfMats}
              onChange={changeHandler}
              updateMat={updateMat}
            /> : 
              <Redirect to='/login' />
            }
          </Route>
          <Route exact path="/login">
            {authorizedUser ? 
            <Redirect to='/bank' /> : 
            <Login 
              authenticateUser={authenticateUser} 
              authUser={authorizedUser} 
              messageType={messageType} 
              showMessage={showMessage}
            />
            }
          </Route>
        </Switch>
      </Router>
    </>
  )  
}

export default App;
