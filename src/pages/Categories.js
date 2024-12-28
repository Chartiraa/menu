import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllCategories } from '../firebase/firebaseService';
import Preloader from '../components/Preloader';
import './Categories.css';

const Categories = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [minLoadingComplete, setMinLoadingComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMinLoadingComplete(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const cats = await getAllCategories();
        setCategories(cats);

        const imagePromises = cats.map(cat => {
          return new Promise((resolve) => {
            const img = new Image();
            img.src = cat.image;
            img.onload = resolve;
            img.onerror = resolve;
          });
        });

        await Promise.all(imagePromises);
        setImagesLoaded(true);
        setLoading(false);
      } catch (error) {
        console.error('Kategoriler yüklenirken hata:', error);
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading || !imagesLoaded || !minLoadingComplete) {
    return <Preloader />;
  }

  return (
    <div className="categories-page">
      <div className="categories-header">
        <img 
          src="https://firebasestorage.googleapis.com/v0/b/lib-18147.appspot.com/o/images%2FLeras-logo.png?alt=media&token=57f65473-2f3a-45cb-b207-d00cb4ed574f"
          alt="Leras Logo"
          className="categories-logo"
          onClick={() => navigate('/')}
        />
      </div>
      
      <div className="categories-grid">
        {categories.map((category) => (
          <div 
            key={category.id} 
            className="category-card"
            onClick={() => navigate(`/menu/${category.name}`)}
          >
            <div className="category-image">
              <img 
                src={category.image} 
                alt={category.name}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/default-category-banner.jpg';
                }}
              />
            </div>
            <h2>{category.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories; 