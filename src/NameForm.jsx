import React, { useState } from 'react';

export default function NameForm({ setWarehouseName, setNameEntered }) {
  const [nameInput, setNameInput] = useState('');

  const handleChange = (e) => {
    setNameInput(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setNameEntered(true);
    setWarehouseName(nameInput);
  }

  return(
    <div>
      <h2>Enter Warehouse Name</h2>
      <form onSubmit={handleSubmit}>
        <input type='text' value={nameInput} onChange={handleChange} required></input>
        <button type='submit'>Submit Name</button>
      </form>
    </div>
  )
}