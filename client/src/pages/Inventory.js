import Form from '../components/Form.js';
import React, { useEffect, useState } from 'react';

const Inventory = () => {
  const inputFields = [
    { name: 'name', placeholder: 'Item Name', required: 'required' },
    { name: 'quantity', placeholder: 'Quantity', required: 'required' },
    { heading: 'What would you like to do?', label: 'Create new item', name: 'action', required: 'required', type: 'radio', defaultValue: 'new' },
    { label: 'Add quantity', name: 'action', type: 'radio', defaultValue:'add' },
    { label: 'Subtract quantity', name: 'action', type: 'radio', defaultValue: 'subtract' },
    { label: 'Delete item', name: 'action', type: 'radio', defaultValue: 'delete' }
  ];
  return (
    <div>
      <h1>Welcome to the Inventory Page!</h1>
      <Form heading={'Guild Mats Form'} inputFields={inputFields}/>
    </div>
  )
}

export default Inventory;
