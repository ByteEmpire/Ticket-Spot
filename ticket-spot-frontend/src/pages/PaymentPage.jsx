import React, { useState } from 'react';
import { FaCreditCard, FaUniversity, FaGooglePay, FaCheckCircle } from 'react-icons/fa';
import './PaymentPage.css';

const PaymentPage = ({ selectedSeats = [], totalPrice = 0, onPaymentSuccess }) => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [cardDetails, setCardDetails] = useState({ number: '', name: '', expiry: '', cvv: '' });
  const [upiId, setUpiId] = useState('');
  const [bank, setBank] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handlePayment = () => {
    // Basic validation
    if (paymentMethod === 'card') {
      const { number, name, expiry, cvv } = cardDetails;
      if (!number || number.length < 16 || !name || !expiry || !cvv || cvv.length < 3) {
        alert('Please enter complete and valid card details.');
        return;
      }
    } else if (paymentMethod === 'upi' && !upiId) {
      alert('Please enter a valid UPI ID.');
      return;
    } else if (paymentMethod === 'netbanking' && !bank) {
      alert('Please select a bank.');
      return;
    }
  
    // Proceed with payment simulation
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);

      // Wait 3 seconds to show success message, then call parent callback and reset form
      setTimeout(() => {
        if (onPaymentSuccess) onPaymentSuccess();

        // Clear form inputs and reset payment method & success state
        setCardDetails({ number: '', name: '', expiry: '', cvv: '' });
        setUpiId('');
        setBank('');
        setPaymentMethod('');
        setSuccess(false);
      }, 3000);
    }, 2000);
  };

  const renderFields = () => {
    switch (paymentMethod) {
      case 'card':
        return (
          <div className="payment-fields">
            <input
              type="text"
              placeholder="Card Number"
              maxLength={16}
              value={cardDetails.number}
              onChange={(e) => setCardDetails({ ...cardDetails, number: e.target.value })}
            />
            <input
              type="text"
              placeholder="Name on Card"
              value={cardDetails.name}
              onChange={(e) => setCardDetails({ ...cardDetails, name: e.target.value })}
            />
            <div className="row">
              <input
                type="text"
                placeholder="MM/YY"
                maxLength={5}
                value={cardDetails.expiry}
                onChange={(e) => setCardDetails({ ...cardDetails, expiry: e.target.value })}
              />
              <input
                type="password"
                placeholder="CVV"
                maxLength={3}
                value={cardDetails.cvv}
                onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
              />
            </div>
          </div>
        );

      case 'upi':
        return (
          <div className="payment-fields">
            <input
              type="text"
              placeholder="Enter UPI ID (e.g. name@upi)"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
            />
          </div>
        );

      case 'netbanking':
        return (
          <div className="payment-fields">
            <select value={bank} onChange={(e) => setBank(e.target.value)}>
              <option value="">Choose a bank</option>
              <option value="SBI">State Bank of India</option>
              <option value="HDFC">HDFC Bank</option>
              <option value="ICICI">ICICI Bank</option>
              <option value="AXIS">Axis Bank</option>
            </select>
          </div>
        );

      default:
        return null;
    }
  };

  if (success) {
    return (
      <div className="payment-success">
        <FaCheckCircle size={50} color="green" />
        <h2>Payment Successful!</h2>
        <p>Thank you for your purchase.</p>
      </div>
    );
  }

  return (
    <div className="payment-container">
      <h1 className="payment-heading">Secure Payment</h1>

      <div className="summary-card">
        <h2>🎟️ Order Summary</h2>
        <p>Seats: {selectedSeats.length ? selectedSeats.join(', ') : 'None'}</p>
        <p>Total: ₹{totalPrice}</p>
      </div>

      <h2 className="choose-heading">Select Payment Method</h2>
      <div className="payment-options">
        <div
          className={`option ${paymentMethod === 'card' ? 'selected' : ''}`}
          onClick={() => setPaymentMethod('card')}
        >
          <FaCreditCard /> Card
        </div>
        <div
          className={`option ${paymentMethod === 'upi' ? 'selected' : ''}`}
          onClick={() => setPaymentMethod('upi')}
        >
          <FaGooglePay /> UPI
        </div>
        <div
          className={`option ${paymentMethod === 'netbanking' ? 'selected' : ''}`}
          onClick={() => setPaymentMethod('netbanking')}
        >
          <FaUniversity /> Net Banking
        </div>
      </div>

      {renderFields()}

      <button className="pay-button" onClick={handlePayment} disabled={!paymentMethod || loading}>
        {loading ? 'Processing...' : `Pay ₹${totalPrice}`}
      </button>
    </div>
  );
};

export default PaymentPage;
