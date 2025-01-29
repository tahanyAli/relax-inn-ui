import React from "react";
import "./Hotels.css";

const Hotels = ({ hotelsData, handleRoomsData }) => {
  return (
    hotelsData && (
      <div className="hotels-container">
        <h2 className="section-title">Most Popular Hotels</h2>
        <div className="hotels-grid">
          {hotelsData.map((item, index) => (
            <div className="hotel-card" key={index}>
              <img src={item.img} alt={item.name} className="hotel-image" />
              <div className="hotel-details">
                <h3 className="hotel-name">{item.name}</h3>
                <p className="hotel-info">
                  <span className="hotel-price">Price: {item.price ? item.price.price.current : "TBD"}</span>
                  <span className="hotel-rating">Rate: {item.starRating} ★</span>
                </p>
                <button
                  className="rooms-button"
                  id={item.id}
                  value={item.price ? item.price.price.current : "TBD"}
                  onClick={(e) => handleRoomsData(e)}
                >
                  Rooms
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  );
};

export default Hotels;
