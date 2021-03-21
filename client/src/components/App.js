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
      <Inventory 
        createMat={createMat} 
        getAllMats={getAllMats} 
        listOfMats={listOfMats} 
        onChange={changeHandler} 
      />
    </>
  )  
}

export default App;
