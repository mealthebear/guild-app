import axios from 'axios';
import Inventory from '../pages/Inventory.js';
import React, { useState } from 'react';

const App = () => {
  
  const changeHandler = (event) => {
    return event.target.value;
  }

  const createMat = async (item, quantity) => {
    const mat = {
      name: item,
      quantity: quantity,
    };
    try {
      const response = await axios.post('/api/mats', mat);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }

  const getAllMats = async () => {
    try {
      const response = await axios.get('/api/mats');
      console.log(response);
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

  const updateMat = async (newInfo, nameOfMat, action) => {
    let updateInfo = {
      updatedInfo: newInfo,
      existingInfo: nameOfMat,
    }

    try {
      const response = axios.put('/api/mats', updateInfo);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <Inventory onChange={changeHandler} getOneMat={getOneMat} createMat={createMat} />
    </>
  )  
}

export default App;
