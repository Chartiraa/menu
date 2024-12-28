import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <h1>Lezzet Durağı</h1>
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#menu">Menü</a>
          </li>
          <li className="nav-item">
            <a href="#about">Hakkımızda</a>
          </li>
          <li className="nav-item">
            <a href="#contact">İletişim</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 