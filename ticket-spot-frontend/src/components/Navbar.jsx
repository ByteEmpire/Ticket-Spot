import React, { useState, useRef, forwardRef, useImperativeHandle } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const indianCities = [
  'Mumbai', 'Delhi', 'Kolkata', 'Chennai', 'Bangalore', 'Hyderabad',
  'Ahmedabad', 'Pune', 'Jaipur', 'Lucknow', 'Kanpur', 'Nagpur',
  'Indore', 'Bhopal', 'Patna', 'Vadodara', 'Ghaziabad', 'Ludhiana',
  'Agra', 'Nashik', 'Faridabad', 'Meerut', 'Rajkot', 'Varanasi',
  'Srinagar', 'Amritsar', 'Chandigarh', 'Coimbatore', 'Visakhapatnam',
  // Add more cities as needed
];

const categories = [
  { name: 'Movies', path: '/movies' }, 
  { name: 'Stand-up', path: '/standup'},
  { name: 'Events', path: '/events' },
  { name: 'Concerts', path: '/concerts' }
];

const Navbar = forwardRef((props, ref) => {
  const [selectedLocation, setSelectedLocation] = useState('Mumbai');
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef(null);

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
    console.log('Selected Location:', event.target.value);
    // Add logic to filter events based on location
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    // Add logic to filter events based on search query (optional, can be done on submit)
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log('Search Query:', searchQuery);
    // Add logic to navigate to a search results page or filter events
  };

  // Expose method to focus search input to parent via ref
  useImperativeHandle(ref, () => ({
    focusSearchInput: () => {
      if (searchInputRef.current) {
        searchInputRef.current.focus();
      }
    }
  }));

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <i className="fas fa-ticket-alt logo-icon"></i>
        Ticket Spot
      </Link>
      <form onSubmit={handleSearchSubmit} className="search-bar">
        {/* You can make this clickable if you want */}
        <i 
          className="fas fa-search search-icon" 
          style={{ cursor: 'pointer' }}
          onClick={() => {
            if (searchInputRef.current) searchInputRef.current.focus();
          }}
        ></i>
        <input
          ref={searchInputRef}
          type="text"
          placeholder="Search for movies and shows"
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-input"
        />
      </form>
      <ul className="category-list">
        {categories.map((category) => (
          <li key={category.name} className="category-item">
            <Link to={category.path} className="category-link">
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="nav-actions">
        <div className="location-selector">
          <i className="fas fa-map-marker-alt location-icon"></i>
          <select
            value={selectedLocation}
            onChange={handleLocationChange}
            className="location-select"
          >
            {indianCities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
        <Link to="/login" className="login-button">
          <i className="fas fa-user login-icon"></i>
          Login
        </Link>
      </div>
    </nav>
  );
});

export default Navbar;
