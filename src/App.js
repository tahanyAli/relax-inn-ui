import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import data from "./components/data/data.json";
import data2 from './components/data/room.json';
import Header from "./components/Header";
import Hotels from "./components/Hotels";
import Home from "./components/Home";
import Rooms from "./components/Rooms";
import Footer from "./components/Footer";

function App() {
  const [data1] = useState(data);
  const [rooms, setRooms] = useState(data2);
  const [hotels, setHotels] = useState([]);
  const navigate = useNavigate(); // Use navigate hook

  const handleRoomsData = (e) => {
    const selectedHotel = data.find(hotel => hotel.id === Number(e.target.id));
    
    if (selectedHotel) {
      setHotels([selectedHotel]); // Save selected hotel
      // const filteredRooms = data2.filter(room => room.hotelId === selectedHotel.id);
      // setRooms(filteredRooms);
      
      console.log("Navigating to /rooms with hotel:", selectedHotel.name);
      navigate("/rooms"); // Navigate to Rooms page
    }
  };

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<Hotels hotelsData={data1} handleRoomsData={handleRoomsData} />} />
        <Route path="/rooms" element={<Rooms roomsData={rooms} hotels={hotels} />} />
      </Routes>
      <Footer />
    </div>
  );
}

// Wrap the App component with Router for routing to work
export default function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
