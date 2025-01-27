import React from "react";
import imgCard from "./assets/fairmont1.jpg";
import imgCard1 from "./assets/aqaba1.jpg";
import imgCard2 from "./assets/four.jpg";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SocialDistanceIcon from "@mui/icons-material/SocialDistance";
import SanitizerIcon from "@mui/icons-material/Sanitizer";
import "./Explore.css";

function Expolre() {
  return (
    <div className="container">
      <h2 className="text-center">Luxury Hotels in Jordan</h2>
      <div className="cards">
        <div className="card">
          <img src={imgCard} alt="" />
          <div>
            <h3>Fairmont Amman</h3>
            <p>
              The five star deluxe Fairmont Amman hotel offers contemporary
              design and unparalleled views of the stunning Amman hills
            </p>
          </div>
          <div>
            <small>
              Beirut Street, Fifth Circle 6, 6, Amman, 11183, Jordan
            </small>
          </div>
        </div>
        <div className="card">
          <img src={imgCard1} alt="" />
          <div>
            <h3>Kempinski Hotel Aqaba</h3>
            <p>
              Overlooking the Red Sea, this beach resort offers 5 different
              dining outlets and an outdoor pool bordering white sandy beaches.
              Its modern designs add to the tranquillity of the surroundings.
            </p>
          </div>
          <div>
            <small>King Hussein Street, 77110 Aqaba, Jordan</small>
          </div>
        </div>
        <div className="card">
          <img src={imgCard2} alt="" />
          <div>
            <h3>Four Seasons Hotel Amman</h3>
            <p>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the f.
            </p>
          </div>
          <div>
            <small>5th Circle, Al-Kindi Street, 11195 Amman, Jordan</small>
          </div>
        </div>
      </div>
      <div>
        <section className="travelSection">
          <h2>Travel with confidence</h2>
          <div className="travelContainer">
            <ul>
            <h5>Official health standards</h5>
              <li>
                <CheckCircleIcon />
                <span>
                  Properties adhering to corporate/organisational sanitisation
                  guidelines.
                </span>
              </li>
              <h5>Social distancing</h5>
              <li>
                
                <SocialDistanceIcon />
                <span>
                  Contactless check-in and check-out along with other social
                  distancing measures.
                </span>
              </li>
              <h5>Hygiene and Sanitization</h5>
              <li>
                
                <SanitizerIcon />
                <span>
                  The use of disinfectant and whether properties enforce a gap
                  period between stays.
                </span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Expolre;
