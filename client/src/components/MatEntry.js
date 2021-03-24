import React, { useState } from 'react';

const MatEntry = ({ mat, quantity }) => {
  const [matName, setMat] = useState('');
  const [matQuantity, setQuantity] = useState(0);
  const [showNameUpdate, setNameBoolean] = useState(false);
  const [showQuantityUpdate, setQuantityBoolean] = useState(false);

  return (
    <div className="mat-entry">
      <div className="mat-name-wrapper mat-section-wrapper">
        <span className="mat-name">{mat}</span>
        {showNameUpdate ? <>
        <input className="form-input mat-entry-input" name="name" placeholder="Item Name" />
        <button className="mat-entry-button confirm-button" onClick={() => setNameBoolean(!showNameUpdate)} type="button">Confirm</button>
        <button className="mat-entry-button cancel-button" onClick={() => setNameBoolean(!showNameUpdate)} type="button">X</button>
        </> :
        <button className="mat-entry-button update-button" onClick={setNameBoolean} type="button">Update Name</button>
        }
      </div>
      
      <div className="mat-section-wrapper mat-quantity-wrapper">
        <span className="mat-quantity">Quantity in stock: {quantity}</span>
        {showQuantityUpdate ? <>
        <input className="form-input mat-entry-input" name="quantity" placeholder="Quantity" />
        <button className="mat-entry-button confirm-button" onClick={() => setQuantityBoolean(!showQuantityUpdate)} type="button">Confirm</button>
        <button className="mat-entry-button cancel-button" onClick={() => setQuantityBoolean(!showQuantityUpdate)} type="button">X</button>
        </> :
        <button className="mat-entry-button update-button" onClick={setQuantityBoolean} type="button">Update Quantity</button>
        }
      </div>
    </div>
  )
}

export default MatEntry;
