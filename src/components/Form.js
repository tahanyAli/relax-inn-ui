import React from "react";
import "./Form.css";
function Form() {
  return (
    <form className="form">
      <div>
        <div className="group">
          <div className="input-group">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              placeholder="Amman, Istanbul"
              className="input"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="checkin">Check In</label>
            <input
              type="date"
              id="checkin"
              name="checkin"
              className="input"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="checkout">Check Out</label>
            <input
              type="date"
              id="checkout"
              name="checkout"
              className="input"
              required
            />
          </div>
        </div>
        <div className="group">
          <div className="input-group">
            <label id="sort">Sort By</label>
            <select
              id="sort"
              aria-label="Floating label select example"
              className="input"
            >
              <option value="NO_SORT">NO SORT</option>
              <option value="PRICE">PRICE</option>
              <option value="STAR_RATING_HIGHEST_FIRST">
                STAR RATING HIGHEST FIRST
              </option>
              <option value="BEST_SELLER">BEST SELLER</option>
            </select>
          </div>
          <div className="input-group">
            <label htmlFor="Guest">Guests</label>
            <input
              type="number"
              id="Guest"
              name="Guest"
              min="1"
              className="input"
              placeholder="Number of guests"
              required
            />
          </div>
        </div>
        <div className="btns-group">
          <button type="submit" className="btn">
            Search
          </button>
        </div>
      </div>
    </form>
  );
}

export default Form;
