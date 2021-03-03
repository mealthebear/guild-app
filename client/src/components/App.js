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

  const httpMethodCheck = async (event, httpMethod, item, quantity) => {
    event.preventDefault();

    if (httpMethod === 'create') {
      createMat(item, quantity);
    }
    
    if (httpMethod === 'add') {
      try {
        const mat = await getOneMat(item);
        console.log(mat);
      } catch (err) {
        console.log(err);
      }
    }

    if (httpMethod === 'subtract') {
      try {
        const mat = await getOneMat(item);
        console.log(mat);
      } catch (err) {
        console.log(err);
      }
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
      <Inventory onChange={changeHandler} getOneMat={getOneMat} httpCheck={httpMethodCheck} />
    </>
  )  
}

export default App;
