import React, { useState } from "react";
import "./BookingPage.css";
import { FaChair, FaCouch, FaTv } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const seatConfig = {
  rows: ["A", "B", "C", "D", "E", "F", "G"],
  cols: Array.from({ length: 12 }, (_, i) => i + 1),
  premiumRows: ["E", "F"],
  reclinerRow: ["G"],
  premiumPrice: 500,
  executivePrice: 350,
  reclinerPrice: 700,
};

const bookedSeats = ["A2", "B5", "C3", "D8"]; // mock booked seats

const BookingPage = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const navigate = useNavigate();

  const getSeatType = (row) => {
    if (seatConfig.reclinerRow.includes(row)) return "recliner";
    if (seatConfig.premiumRows.includes(row)) return "premium";
    return "executive";
  };

  const getSeatPrice = (row) => {
    const type = getSeatType(row);
    if (type === "premium") return seatConfig.premiumPrice;
    if (type === "recliner") return seatConfig.reclinerPrice;
    return seatConfig.executivePrice;
  };

  const toggleSeat = (seat) => {
    if (bookedSeats.includes(seat)) return;
    setSelectedSeats((prev) =>
      prev.includes(seat)
        ? prev.filter((s) => s !== seat)
        : [...prev, seat]
    );
  };

  const handlePayment = () => {
    const totalPrice = selectedSeats.reduce((sum, seat) => {
      const row = seat.charAt(0);
      return sum + getSeatPrice(row);
    }, 0);

    navigate("/payment", { state: { selectedSeats, totalPrice } });
  };

  return (
    <div className="booking-container">
      <h1 className="booking-heading">🎫 Select Your Seats</h1>

      <div className="screen-container">
        <div className="screen">
          <FaTv />
          <span>Screen This Way</span>
        </div>
      </div>

      <div className="seat-map">
        {seatConfig.rows.map((row) => (
          <div key={row} className={`seat-row ${getSeatType(row)}`}>
            {seatConfig.cols.map((col) => {
              const seat = `${row}${col}`;
              const isBooked = bookedSeats.includes(seat);
              const isSelected = selectedSeats.includes(seat);
              const seatType = getSeatType(row);
              const isRecliner = seatType === "recliner";

              const shouldAddGap = col % 4 === 0 && col < seatConfig.cols.length;

              return (
                <React.Fragment key={seat}>
                  <div
                    className={`seat ${isBooked ? "booked" : ""} ${
                      isSelected ? "selected" : ""
                    } ${seatType}`}
                    onClick={() => toggleSeat(seat)}
                  >
                    {isRecliner ? <FaCouch /> : <FaChair />}
                    <span className="seat-number">{col}</span>
                  </div>
                  {shouldAddGap && <div className="seat-gap"></div>}
                </React.Fragment>
              );
            })}
            <span className="row-label">{row}</span>
            <span className="seat-price">₹{getSeatPrice(row)}</span>
          </div>
        ))}
      </div>

      <div className="legend">
        <div className="legend-item">
          <div className="seat executive"><FaChair /></div>
          <span>Executive (₹{seatConfig.executivePrice})</span>
        </div>
        <div className="legend-item">
          <div className="seat premium"><FaChair /></div>
          <span>Premium (₹{seatConfig.premiumPrice})</span>
        </div>
        <div className="legend-item">
          <div className="seat recliner"><FaCouch /></div>
          <span>Recliner (₹{seatConfig.reclinerPrice})</span>
        </div>
        <div className="legend-item">
          <div className="seat booked"><FaChair /></div>
          <span>Booked</span>
        </div>
      </div>

      <div className="summary">
        <p>🪑 Selected Seats: {selectedSeats.join(", ") || "None"}</p>
        <p>
          💰 Total Price: ₹
          {selectedSeats.reduce((sum, seat) => {
            const row = seat.charAt(0);
            return sum + getSeatPrice(row);
          }, 0)}
        </p>
        <button className="payment-button" onClick={handlePayment}>
          Continue to Payment
        </button>
      </div>
    </div>
  );
};

export default BookingPage;
