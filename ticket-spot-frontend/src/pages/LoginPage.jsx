// LoginPage.jsx
import React, { useState } from 'react';
import './LoginPage.css';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';

function LoginPage() {
  const [mobileNumber, setMobileNumber] = useState('');
  const navigate = useNavigate();

  const handleMobileNumberChange = (event) => {
    const value = event.target.value.replace(/[^0-9]/g, '');
    if (value.length <= 10) {
      setMobileNumber(value);
    }
  };

  const handleContinue = () => {
    // Add your logic here to handle the "Continue" action
    // For example, you might want to send the mobileNumber to an authentication service
    console.log('Continue with mobile number:', mobileNumber);
  };

  const handleClose = () => {
    navigate('/'); // Navigate to the homepage when the close button is clicked
  };

  return (
    <div className="login-container">
      <motion.div
        className="login-modal"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="modal-header">
          <h2>Get Started</h2>
          <motion.span
            className="close-button"
            onClick={handleClose}
            whileHover={{ rotate: 90, scale: 1.2 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            &times;
          </motion.span>
        </div>

        <div className="social-login-buttons">
          <motion.button
            className="social-button google"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fab fa-google"></i>
            <span>Continue with Google</span>
          </motion.button>

          <motion.button
            className="social-button email"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="far fa-envelope"></i>
            <span>Continue with Email</span>
          </motion.button>

          <motion.button
            className="social-button apple"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fab fa-apple"></i>
            <span>Continue with Apple</span>
          </motion.button>
        </div>

        <div className="separator">
          <span>OR</span>
        </div>

        <div className="mobile-login">
          <div className="mobile-input-group">
            <span>IN +91</span>
            <input
              type="tel"
              placeholder="Enter mobile number"
              value={mobileNumber}
              onChange={handleMobileNumberChange}
              maxLength="10"
            />
          </div>
          <motion.button
            className="continue-button"
            onClick={handleContinue}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Continue
          </motion.button>
        </div>

        <div className="terms">
          <p>
          I agree to the{' '}
            <Link to="/terms">Terms & Conditions</Link> &{' '}
            <Link to="/privacy">Privacy Policy</Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default LoginPage;