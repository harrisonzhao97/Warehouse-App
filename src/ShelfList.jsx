// import React, { useEffect } from 'react';

export default function ShelfList({ warehouse }) {
  return(
    <div>
      {Object.keys(warehouse).map((zoneNumber, i) => (
        <div key={i}>
          Zone {zoneNumber} {warehouse[zoneNumber].map((name, index) => (
            <li key={index}>
              {name}
            </li>
          ))}
        </div>
      ))}
    </div>
  )
}