import React, { useEffect, useState } from 'react';

const Inventory = (props) => {
  const [matName, setMat] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [httpAction, setAction] = useState('');

  return (
    <div>
      <h1>Welcome to the Inventory Page!</h1>
      <form onSubmit={(event) => props.httpCheck(event, httpAction, matName, quantity)}>
        <h2>Guild Mats Form</h2>
        <input name="name" onChange={(event) => setMat(props.onChange(event))} placeholder="Item Name" required />
        <input name="quantity" onChange={(event) => setQuantity(props.onChange(event))} placeholder="Quantity" required />
        <h3>What would you like to do?</h3>

        <label htmlFor="create">Create new item</label>
        <input name="crud" onChange={(event) => setAction(props.onChange(event))} type="radio" defaultValue="create" required />

        <label htmlFor="add">Add quantity</label>
        <input name="crud" onChange={(event) => setAction(props.onChange(event))} type="radio" defaultValue="add" />

        <label htmlFor="subtract">Subtract quantity</label>
        <input name="crud" onChange={(event) => setAction(props.onChange(event))} type="radio" defaultValue="subtract" />

        <label htmlFor="delete">Delete item</label>
        <input name="crud" onChange={(event) => setAction(props.onChange(event))} type="radio" defaultValue="delete" />

        <input type="submit" value="Submit" />
        
      </form>
    </div>
  )
}

export default Inventory;
