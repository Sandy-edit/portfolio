import React, { useState } from 'react';
import './navbar.css';
import logo from "../images/logo.png";

export default function Navbar() {
  const [active, setActive] = useState(null);

  const enter = (name) => {
    setActive(name);
  };

  const leave = () => {
    setActive(null);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={logo} alt="Logo" style={{height:"3rem"}}/>
      </div>
      
      <ul className="navbar-links">
        {/* Shop Dropdown */}
        <li 
          className="dropdown"
          onMouseEnter={() => enter('shop')}
          onMouseLeave={leave}
        >
          <a href="#shop" className="dropdown-toggle">Shop ▾</a>
          {active === 'shop' && (
            <div className="dropdown-menu mega-menu">
              <div className="dropdown-column">
                <h4>By Type</h4>
                <ul>
                  <li><a href="#strategy">Strategy Games</a></li>
                  <li><a href="#family">Family Games</a></li>
                  <li><a href="#party">Party Games</a></li>
                  <li><a href="#cooperative">Cooperative</a></li>
                </ul>
              </div>
              <div className="dropdown-column">
                <h4>By Players</h4>
                <ul>
                  <li><a href="#2players">2 Players</a></li>
                  <li><a href="#3-4players">3 - 4 Players</a></li>
                  <li><a href="#5plus">5+ Players</a></li>
                </ul>
              </div>
              <div className="dropdown-column">
                <h4>Difficulty</h4>
                <ul>
                  <li><a href="#gateway">Gateway</a></li>
                  <li><a href="#medium">Medium</a></li>
                  <li><a href="#heavy">Heavy</a></li>
                </ul>
              </div>
            </div>
          )}
        </li>

        <li 
          className="dropdown"
          onMouseEnter={() => enter('story')}
          onMouseLeave={leave}
        >
          <a href="#story" className="dropdown-toggle">Our Story ▾</a>
          {active === 'story' && (
            <ul className="dropdown-menu simple-menu">
              <li><a href="#about">About Us</a></li>
              <li><a href="#team">Our Team</a></li>
              <li><a href="#mission">Our Mission</a></li>
            </ul>
          )}
        </li>

        <li><a href="#categories">Categories</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="navbar-actions">
        <button className="cart-btn">
          🛒 Cart <span className="cart-count">0</span>
        </button>
      </div>
    </nav>
  );
}

