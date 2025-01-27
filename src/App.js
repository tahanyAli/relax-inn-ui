import React, { useState } from 'react';
import './App.css';
import data from './components/data/data.json';
import data1 from './components/data/room.json';
import Home from './components/Home';
function App() {
  const [data1, setData1] = useState(data);
  console.log(data1);
  
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
