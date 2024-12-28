import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaInstagram, FaUtensils } from 'react-icons/fa';
import './BottomBar.css';

const BottomBar = () => {
  const navigate = useNavigate();

  return (
    <div className="bottom-bar">
      <button 
        className="bottom-bar-button"
        onClick={() => navigate('/menu')}
      >
        <FaUtensils className="bottom-bar-icon" />
        <span>Menü</span>
      </button>
      
      <button 
        className="bottom-bar-button"
        onClick={() => window.open('https://www.instagram.com/leraskozan/', '_blank')}
      >
        <FaInstagram className="bottom-bar-icon" />
        <span>Instagram</span>
      </button>
    </div>
  );
};

export default BottomBar; 