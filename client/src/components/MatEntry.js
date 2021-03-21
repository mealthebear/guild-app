import React, { useState } from 'react';

const MatEntry = ({ mat, quantity }) => {
  return (
    <div>
      <h2>{mat}</h2>
      <p>Quantity in stock: {quantity}</p>
    </div>
  )
}

export default MatEntry;
