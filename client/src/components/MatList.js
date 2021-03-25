import MatEntry from './MatEntry.js';
import React, { useState } from 'react';

const MatList = ({ mats, setModal, updateMat }) => {
  return (
    <div className="mat-list">
      {mats.map((mat, index) => {
        return <MatEntry
          key={index}
          mat={mat.name}
          setModal={setModal}
          quantity={mat.quantity}
          updateMat={updateMat}
        />
      })}
    </div>
  )
}

export default MatList;
