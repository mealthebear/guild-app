import React, { useState } from 'react';

const MatEntry = ({ mat, quantity }) => {
  const [showNameUpdate, setNameBoolean] = useState(false);
  const [showQuantityUpdate, setQuantityBoolean] = useState(false);

  return (
    <div>
      <h2>{mat}</h2><button type="button">Update Name</button>
      <p>Quantity in stock: {quantity}</p><button type="button">Update Quantity</button>
    </div>
  )
}

export default MatEntry;
