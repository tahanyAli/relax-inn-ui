import React, { useState } from "react";
import "./App.css";
import data from "./components/data/data.json";
// import data1 from './components/data/room.json';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Hotels from "./components/Hotels";
import Home from "./components/Home";
import Footer from "./components/Footer"
function App() {
  const [data1, setData] = useState(data);
  console.log(data1);

  return (
    <div className="App">
    <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<Hotels hotelsData={data1} />} />
        </Routes>
      </Router>
    <Footer />
    </div>
  );
}

export default App;
