import axios from 'axios';
import Inventory from '../pages/Inventory.js';
import React, { useEffect, useState } from 'react';

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

  const deleteMat = async (nameOfMat) => {
    let matToBeDeleted = { name: nameOfMat };
    try {
      const response = await axios.delete('/api/mats', matToBeDeleted);
      const matList = await getAllMats();
      setList(matList);
      console.log(response);
    } catch (error) {
      console.log(error);
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
      <Inventory 
        createMat={createMat} 
        getAllMats={getAllMats} 
        listOfMats={listOfMats} 
        onChange={changeHandler} 
        updateMat={updateMat}
      />
    </>
  )  
}

export default App;
