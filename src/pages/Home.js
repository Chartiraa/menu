import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  useEffect(() => {
    // Ana sayfada bottom bar'ı gizle
    const bottomBar = document.querySelector('.bottom-bar');
    if (bottomBar) {
      bottomBar.style.display = 'none';
    }

    // Component unmount olduğunda bottom bar'ı tekrar göster
    return () => {
      if (bottomBar) {
        bottomBar.style.display = 'flex';
      }
    };
  }, []);

  return (
    <div className="home-container">
      <div className="home-content">
        <img 
          src="https://firebasestorage.googleapis.com/v0/b/lib-18147.appspot.com/o/images%2FLeras-logo.png?alt=media&token=57f65473-2f3a-45cb-b207-d00cb4ed574f"
          alt="Leras Logo"
          className="home-logo"
        />
        <div className="home-buttons">
          <Link to="/menu" className="home-button menu-button">
            MENÜ
          </Link>
          <a 
            href="https://www.instagram.com/leraskozan/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="home-button instagram-button"
          >
            <FaInstagram className="instagram-icon" />
            <span>INSTAGRAM</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home; 