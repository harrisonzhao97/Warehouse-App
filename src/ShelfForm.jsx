import React, { useState } from 'react';
import axios from 'axios';

export default function ShelfForm({ warehouse, setWarehouse, warehouseName }) {
  const zones = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const [shelfName, setShelfName] = useState('');
  const [zoneNumber, setZoneNumber] = useState('');
  const [names, setNames] = useState({});

  const checkUnique = () => {
    if (names[shelfName] === undefined) {
      setNames(prev => ({
        ...prev,
        [shelfName]: 1
      }));
      return true
    }
    return false;
  }

  const shelfInput = (e) => {
    setShelfName(e.target.value);
  }

  const zoneInput = (e) => {
    setZoneNumber(parseInt(e.target.value));
  }

  const addShelf = (e) => {
    e.preventDefault();
    if (warehouse[zoneNumber] && warehouse[zoneNumber].length === 10) {
      alert('Maximum shelf number exceeded');
      return;
    }
    if (!checkUnique()) {
      alert('Please enter a unique name');
      return;
    }
    if (warehouse[zoneNumber] === undefined) {
      setWarehouse(prev => ({
        ...prev,
        [zoneNumber]: [shelfName]
      }))
    } else {
      setWarehouse(prev => ({
        ...prev,
        [zoneNumber]: [...warehouse[zoneNumber], shelfName]
      }))
    }
  }

  const submitWarehouse = (e) => {
    e.preventDefault();
    axios.post('/warehouses', {
      name: warehouseName,
      zones: warehouse
    })
    .then(alert('Warehouse submitted'))
    .catch(err => console.log(err));
  }

  return(
    <div>
      <form onSubmit={addShelf}>
        <input type='text' value={shelfName} onChange={shelfInput} placeholder='Shelf name goes here' required></input>
        <select value={zoneNumber} onChange={zoneInput} required>
          <option disabled={true} value=''>
            Select a zone #
          </option>
          {zones.map((value) => (
            <option value={value} key={value}>
              {value}
            </option>
          ))}
        </select>
        <button type='submit'>Add shelf</button>
      </form>
      <button onClick={submitWarehouse}>Submit Warehouse</button>
    </div>
  )
}