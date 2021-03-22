import MatList from '../components/MatList.js';
import React, { useEffect, useState } from 'react';

const Inventory = (props) => {
  const [matName, setMat] = useState('');
  const [quantity, setQuantity] = useState(0);

  return (
    <div>
      <h1 className="header">Welcome to the Inventory Page!</h1>
      <form onSubmit={(event) => props.createMat(event, matName, quantity)}>
        <h2 className="subheading">Add an Item to Inventory</h2>
        <div className="input-field-group">
          <label className="form-label">Item Name</label>
          <input className="form-input" name="name" onChange={(event) => setMat(props.onChange(event))} placeholder="Enter Item" required />
        </div>
        <div className="input-field-group">
          <label className="form-label">Quantity</label>
          <input className="form-input" name="quantity" onChange={(event) => setQuantity(props.onChange(event))} placeholder="Enter Quantity" required />
        </div>
        <input type="submit" value="Submit" />
        
      </form>
      <MatList mats={props.listOfMats} />
    </div>
  )
}

export default Inventory;
