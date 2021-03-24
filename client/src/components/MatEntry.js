import React, { useState } from 'react';

const MatEntry = ({ mat, quantity }) => {
  const [matName, setMat] = useState('');
  const [matQuantity, setQuantity] = useState(0);
  const [showNameUpdate, setNameBoolean] = useState(false);
  const [showQuantityUpdate, setQuantityBoolean] = useState(false);

  return (
    <div className="mat-entry">
      <div className="mat-name-wrapper">
        <span className="mat-name">{mat}</span>
        {showNameUpdate ? <>
        <input name="name" placeholder="Item Name" />
        <button onClick={() => setNameBoolean(!showNameUpdate)} type="button">Confirm</button>
        <button onClick={() => setNameBoolean(!showNameUpdate)} type="button">X</button>
        </> :
        <button onClick={setNameBoolean} type="button">Update Name</button>
        }
      </div>
      
      <div className="mat-quantity-wrapper">
        <span className="mat-quantity">Quantity in stock: {quantity}</span>
        {showQuantityUpdate ? <>
        <input name="quantity" placeholder="Quantity" />
        <button onClick={() => setQuantityBoolean(!showQuantityUpdate)} type="button">Confirm</button>
        <button onClick={() => setQuantityBoolean(!showQuantityUpdate)} type="button">X</button>
        </> :
        <button onClick={setQuantityBoolean} type="button">Update Quantity</button>
        }
      </div>
    </div>
  )
}

export default MatEntry;
