import MatEntry from './MatEntry.js';
import React, { useState } from 'react';

const MatList = ({ mats }) => {
  return (
    <div className="mat-list">
      {mats.map((mat, index) => {
        return <MatEntry key={index} mat={mat.name} quantity={mat.quantity} />
      })}
    </div>
  )
}

export default MatList;
