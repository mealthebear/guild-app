import React, { useState } from 'react';

const ConfirmationModal = ({ message }) => {
  return (
    <div className="confirmation-modal">
      <p className="modal-message">{ message }</p>
      <div className="modal-buttons-group">
        <button className="confirm-button mat-entry-button modal-button" type="button">Confirm</button>
        <button className="cancel-button mat-entry-button modal-button" type="button">Cancel</button>
      </div>
    </div>
  )
}

export default ConfirmationModal;
