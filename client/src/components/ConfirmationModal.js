import React, { useState } from 'react';

const ConfirmationModal = ({ deleteMat, mat, setModalBoolean, showModal }) => {
  const confirmDelete = () => {
    setModalBoolean(!showModal);
    deleteMat(mat);
  }

  return (
    <div className="confirmation-modal">
      <p className="modal-message">Are you sure you want to remove {mat} from inventory?</p>
      <div className="modal-buttons-group">
        <button className="confirm-button mat-entry-button modal-button" onClick={confirmDelete} type="button">Confirm</button>
        <button className="cancel-button mat-entry-button modal-button" onClick={() => setModalBoolean(!showModal)} type="button">Cancel</button>
      </div>
    </div>
  )
}

export default ConfirmationModal;
