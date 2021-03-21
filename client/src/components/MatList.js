import MatEntry from './MatEntry.js';
import React, { useState } from 'react';

const MatList = ({ mats }) => {
  return (
    <>
      {mats.map((mat, index) => {
        return <MatEntry key={index} mat={mat.name} quantity={mat.quantity} />
      })}
    </>
  )
}

export default MatList;
