import MatList from '../components/MatList.js';
import React, { useEffect, useState } from 'react';

const Inventory = (props) => {
  const [matName, setMat] = useState('');
  const [quantity, setQuantity] = useState(0);

  return (
    <div>
      <h1>Welcome to the Inventory Page!</h1>
      <form onSubmit={(event) => props.createMat(event, matName, quantity)}>
        <h2>Add an Item to Inventory</h2>
        <input name="name" onChange={(event) => setMat(props.onChange(event))} placeholder="Item Name" required />
        <input name="quantity" onChange={(event) => setQuantity(props.onChange(event))} placeholder="Quantity" required />

        <input type="submit" value="Submit" />
        
      </form>
      <MatList mats={props.listOfMats} />
    </div>
  )
}

export default Inventory;
