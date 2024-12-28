import React, { useEffect, useState } from 'react';
import './Preloader.css';

const MIN_LOADING_TIME = 1000; // 1 saniye

const Preloader = () => {
  const [minTimeElapsed, setMinTimeElapsed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMinTimeElapsed(true);
    }, MIN_LOADING_TIME);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`preloader ${minTimeElapsed ? 'fade-out' : ''}`}>
      <div className="preloader-content">
        <img 
          src="https://firebasestorage.googleapis.com/v0/b/lib-18147.appspot.com/o/images%2FLeras-logo.png?alt=media&token=57f65473-2f3a-45cb-b207-d00cb4ed574f" 
          alt="Leras Logo" 
          className="preloader-logo"
        />
      </div>
    </div>
  );
};

export default Preloader; 