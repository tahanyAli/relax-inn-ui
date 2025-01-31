import React from "react";
import noImage from "./assets/aqaba1.jpg";
import "./Rooms.css";

const Rooms = ({ roomsData, hotels, addToCart }) => {
  console.log(hotels);

  const getRandomPrice = () => Math.floor(Math.random() * (200 - 50) + 50);

  return (
    roomsData.length > 0 && (
      <div className="rooms-container">
        <div className="hotel-info">
        <h2>{hotels?.[0]?.name || "Hotel"}</h2>
          <img
            src={hotels?.[0]?.img || noImage}
            alt="hotel"
            className="hotel-img"
          />
          
          <div>
            <h5>Services In All Our Hotels</h5>
            <div className="services">
              <div className="service">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
                </svg>{" "}
                Wi-Fi
              </div>
              <div className="service">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.9 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM4 19h16v2H4z" />
                </svg>{" "}
                Breakfast
              </div>
              <div className="service">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M22 11h-4.17l3.24-3.24-1.41-1.42L15 11h-2V9l4.66-4.66-1.42-1.41L13 6.17V2h-2v4.17L7.76 2.93 6.34 4.34 11 9v2H9L4.34 6.34 2.93 7.76 6.17 11H2v2h4.17l-3.24 3.24 1.41 1.42L9 13h2v2l-4.66 4.66 1.42 1.41L11 17.83V22h2v-4.17l3.24 3.24 1.42-1.41L13 15v-2h2l4.66 4.66 1.41-1.42L17.83 13H22z" />
                </svg>{" "}
                Air Conditioner
              </div>
              <div className="service">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M2 17h20v2H2zm11.84-9.21c.1-.24.16-.51.16-.79 0-1.1-.9-2-2-2s-2 .9-2 2c0 .28.06.55.16.79C6.25 8.6 3.27 11.93 3 16h18c-.27-4.07-3.25-7.4-7.16-8.21z" />
                </svg>{" "}
                Room Service
              </div>
            </div>
          </div>
        </div>

        <div className="rooms-list">
          {roomsData.map((el, index) => {
            const price = getRandomPrice();
            const stayDays = 1;

            return (
              <div key={index} className="room-card">
              <img
                    src={el.images.length ? el.images[0].fullSizeUrl : noImage}
                    alt="room"
                  />
             
                <div className="room-details">
                  <h5>{el.roomName}</h5>
                  <p>
                    {el.maxOccupancy.length ? (
                      <>
                        Max children: {el.maxOccupancy.messageChildren}
                        <br />
                        {el.maxOccupancy.messageTotal}
                      </>
                    ) : (
                      "Max children: (including up to 3 children)"
                    )}
                  </p>
                  <div className="room-pricing">
                    Price:
                    <span>${price}</span>
                  </div>
                  
                </div>
                <button
                    id={el.roomName}
                    value={`$${price}`}
                    onClick={addToCart}
                    className="book-button"
                  >
                    Book Now
                  </button>
              </div>
            );
          })}
        </div>
      </div>
    )
  );
};

export default Rooms;
