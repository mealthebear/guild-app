import React, { useEffect, useState } from 'react';

const Inventory = (props) => {
  const [matName, setMat] = useState('');
  const [quantity, setQuantity] = useState(0);

  return (
    <div>
      <h1>Welcome to the Inventory Page!</h1>
      <form onSubmit={props.createMat(matName, quantity)}>
        <h2>Add an Item to Inventory</h2>
        <input name="name" onChange={(event) => setMat(props.onChange(event))} placeholder="Item Name" required />
        <input name="quantity" onChange={(event) => setQuantity(props.onChange(event))} placeholder="Quantity" required />

        <input type="submit" value="Submit" />
        
      </form>
    </div>
  )
}

export default Inventory;
