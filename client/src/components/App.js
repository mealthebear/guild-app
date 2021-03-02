import axios from 'axios';
import Inventory from '../pages/Inventory.js';
import React, { useState } from 'react';

const App = () => {

  const getAllMats = async () => {
    try {
      const response = await axios.get('/api/mats');
      console.log(response);
      return response;
    } catch (err) {
      console.log(err);
    }
  }

  const getOneMat = async (event) => {
    event.preventDefault()
    console.log(event.target);
    let nameOfMat = event.target.value;
    try {
      const response = axios.get('/api/onemat', {
        params: { name: nameOfMat }
      })
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }

  const updateMat = async (newInfo, nameOfMat, action) => {
    let updateInfo = {
      updatedInfo: newInfo,
      existingInfo: nameOfMat,
    }
    try {
      const response = axios.put('/api/mats');
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <Inventory getOneMat={getOneMat}/>
    </>
  )  
}

export default App;
