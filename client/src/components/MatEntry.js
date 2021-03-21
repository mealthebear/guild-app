import React, { useState } from 'react';

const MatEntry = ({ mat, quantity }) => {
  return (
    <div>
      <h2>{mat}</h2><button type="button">Update Name</button>
      <p>Quantity in stock: {quantity}</p><button type="button">Update Quantity</button>
    </div>
  )
}

export default MatEntry;
