import React, { useState } from 'react';

const MatEntry = ({ mat, setModal, quantity, updateMat }) => {
  const [matName, setMat] = useState('');
  const [matQuantity, setQuantity] = useState(0);
  const [showNameUpdate, setNameBoolean] = useState(false);
  const [showQuantityUpdate, setQuantityBoolean] = useState(false);

  const confirmNameUpdate = (updatedInfo, nameOfMat) => {
    setNameBoolean(!showNameUpdate);
    updateMat(updatedInfo, nameOfMat);
  }

  const confirmQuantityUpdate = (updatedInfo, nameOfMat) => {
    setQuantityBoolean(!showQuantityUpdate);
    updateMat(updatedInfo, nameOfMat)
  }

  const resetName = () => {
    setNameBoolean(!showNameUpdate);
    setMat('');
  }

  const resetQuantity = () => {
    setQuantityBoolean(!showQuantityUpdate);
    setQuantity(0);
  }

  return (
    <div className="mat-entry">
      <button className="mat-entry-button delete-button" onClick={(event) => setModal(event)} name={mat} type="button">X</button>
      <div className="mat-name-wrapper mat-section-wrapper">
        <span className="mat-name">{mat}</span>
        {showNameUpdate ? <>
        <input className="form-input mat-entry-input" onChange={(event) => setMat(event.target.value)} name="name" placeholder="Item Name" />
        <button className="confirm-button mat-entry-button" onClick={() => confirmNameUpdate({ name: matName }, { name: mat })} type="button">Confirm</button>
        <button className="cancel-button mat-entry-button" onClick={() => resetName()} type="button">Cancel</button>
        </> :
        <button className="mat-entry-button update-button" onClick={setNameBoolean} type="button">Update Name</button>
        }
      </div>
      
      <div className="mat-section-wrapper mat-quantity-wrapper">
        <span className="mat-quantity">Quantity in stock: {quantity}</span>
        {showQuantityUpdate ? <>
        <input className="form-input mat-entry-input" onChange={(event) => setQuantity(event.target.value)} name="quantity" placeholder="Quantity" />
        <button className="confirm-button mat-entry-button" onClick={() => confirmQuantityUpdate({ quantity: matQuantity }, { name: mat })} type="button">Confirm</button>
        <button className="cancel-button mat-entry-button" onClick={() => resetQuantity()} type="button">Cancel</button>
        </> :
        <button className="mat-entry-button update-button" onClick={setQuantityBoolean} type="button">Update Quantity</button>
        }
      </div>
    </div>
  )
}

export default MatEntry;
