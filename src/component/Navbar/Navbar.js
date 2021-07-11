import React from 'react';
import logo from '../../logo_a.png';
import './navbar.scss';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-name">
        <img src={logo} alt="anime-logo" height="40px" width="40px" />
        <p>anime</p>
      </div>
      <ul className="nav-links">
        <li>
          <a href="/" className="nav-link">
            Home
          </a>
        </li>
        <li>
          <a href="/" className="nav-link active">
            Anime
          </a>
        </li>
        <li>
          <a href="/" className="nav-link">
            About
          </a>
        </li>
      </ul>
    </nav>
  );
}
