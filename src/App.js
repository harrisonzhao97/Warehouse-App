import './App.css';
import React, { useState } from 'react';
import ShelfForm from './ShelfForm.jsx';
import ShelfList from './ShelfList.jsx';
import NameForm from './NameForm.jsx';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`
const Child = styled.div`
  flex: 1;
`

function App() {
  const [warehouse, setWarehouse] = useState({});
  const [warehouseName, setWarehouseName] = useState('');
  const [nameEntered, setNameEntered] = useState(false);

  return (
    <div className="App">
      { !nameEntered && <NameForm setWarehouseName={setWarehouseName} setNameEntered={setNameEntered}></NameForm> }
      <h2>{warehouseName}</h2>
      <Container>
        <Child>
          { nameEntered &&
          <div>
            <h3>Shelf Input</h3>
            <ShelfForm warehouseName={warehouseName} warehouse={warehouse} setWarehouse={setWarehouse} />
          </div> }
        </Child>
        <Child>
          { nameEntered &&
            <div>
              <h3>Current Layout</h3>
              <ShelfList warehouseName={warehouseName} warehouse={warehouse} />
            </div> }
        </Child>
      </Container>
    </div>
  );
}

export default App;
