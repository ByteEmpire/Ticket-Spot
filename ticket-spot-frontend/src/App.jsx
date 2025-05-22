import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import EventListPage from './pages/EventListPage';
import LoginPage from './pages/LoginPage';
import TermsConditionsPage from './pages/TermsConditionsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import StandupPage from './pages/StandupPage';
import MoviesPage from './pages/MoviesPage';
import ConcertsPage from './pages/ConcertsPage';
import BookingPage from './pages/BookingPage';
import PaymentPage from './pages/PaymentPage';

function App() {
  // Ref to expose the focusSearch method in Navbar
  const navbarRef = useRef(null);

  // Function to trigger focus on Navbar search input
  const handleSearchIconClick = () => {
    if (navbarRef.current && navbarRef.current.focusSearchInput) {
      navbarRef.current.focusSearchInput();
    }
  };

  return (
    <Router>
      <div>
        {/* Pass the ref to Navbar to expose focusSearchInput method */}
        <Navbar ref={navbarRef} />

        <Routes>
          {/* Pass handleSearchIconClick to HomePage */}
          <Route path="/" element={<HomePage onSearchIconClick={handleSearchIconClick} />} />
          <Route path="/events" element={<EventListPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/terms" element={<TermsConditionsPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/standup" element={<StandupPage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/concerts" element={<ConcertsPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/payment" element={<PaymentPageWrapper />} />
        </Routes>
      </div>
    </Router>
  );
}

// Wrapper to extract props from route state and pass to PaymentPage
const PaymentPageWrapper = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { selectedSeats = [], totalPrice = 0 } = location.state || {};

  return (
    <PaymentPage
      selectedSeats={selectedSeats}
      totalPrice={totalPrice}
      onPaymentSuccess={() => navigate('/')}
    />
  );
};

export default App;
