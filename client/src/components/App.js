import axios from 'axios';
import Inventory from '../pages/Inventory.js';
import Landing from '../pages/Landing.js';
import Login from '../pages/Login.js';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  const [listOfMats, setList] = useState([]);

  useEffect(() => {
    // Try to convert to async/await
    getAllMats()
      .then((response) => {
        console.log(response);
        setList(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])
  
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
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }

  const createUser = async (event, user) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/users', user);
      console.log(response);
    } catch (err) {
      console.log(err);
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
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  const getAdmin = async (user) => {
    try {
      const response = await axios.get('/api/admins', {
        params: user,
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }

  const getAllMats = async () => {
    try {
      const response = await axios.get('/api/mats');
      return response;
    } catch (err) {
      console.log(err);
    }
  }

  const getOneMat = async (item) => {
    try {
      const response = axios.get('/api/onemat', {
        params: { name: item }
      })
      console.log(response);
      return response;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  const updateMat = async (newInfo, nameOfMat) => {
    let updateInfo = {
      updatedInfo: newInfo,
      name: nameOfMat,
    }
    console.log('** This is the updated info **', updateInfo);
    try {
      const response = await axios.put('/api/mats', updateInfo);
      const matList = await getAllMats();
      setList(matList.data);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Landing createUser={createUser} />
          </Route>
          <Route exact path="/bank">
            <Inventory
              createMat={createMat}
              deleteMat={deleteMat}
              getAllMats={getAllMats}
              listOfMats={listOfMats}
              onChange={changeHandler}
              updateMat={updateMat}
            />
          </Route>
          <Route exact path="/login">
            <Login getAdmin={getAdmin} />
          </Route>
        </Switch>
      </Router>
    </>
  )  
}

export default App;
