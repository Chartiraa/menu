import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getAllMenuItems, getAllCategories } from '../firebase/firebaseService';
import Preloader from './Preloader';
import './MenuList.css';

const MenuList = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [menuItems, setMenuItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [minLoadingComplete, setMinLoadingComplete] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [items, cats] = await Promise.all([
          getAllMenuItems(),
          getAllCategories()
        ]);
        setMenuItems(items);
        setCategories(cats);
        
        // Tüm görsellerin yüklenmesini bekle
        const imagePromises = cats.map(cat => {
          return new Promise((resolve) => {
            const img = new Image();
            img.src = cat.image;
            img.onload = resolve;
            img.onerror = resolve; // Hata durumunda da devam et
          });
        });

        await Promise.all(imagePromises);
        setImagesLoaded(true);
        setLoading(false);
      } catch (err) {
        setError("Menü yüklenirken bir hata oluştu");
        console.error(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMinLoadingComplete(true);
    }, 1000); // 1 saniye

    return () => clearTimeout(timer);
  }, []);

  const filteredItems = category === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.productCategory === category);

  if (loading || !imagesLoaded || !minLoadingComplete) {
    return <Preloader />;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="menu-container">
      <div className="menu-header">
        <img 
          src="https://firebasestorage.googleapis.com/v0/b/lib-18147.appspot.com/o/images%2FLeras-logo.png?alt=media&token=57f65473-2f3a-45cb-b207-d00cb4ed574f"
          alt="Leras Logo"
          className="menu-logo"
          onClick={() => navigate('/')}
        />
        <h2 className="category-title">{category}</h2>
      </div>

      {/* Kategoriler scroll kısmı şimdilik yorum satırına alındı
      <div className="categories-wrapper">
        <div className="categories-scroll">
          {categories.map(cat => (
            <div
              key={cat.id}
              className={`category-item ${cat.name === category ? 'active' : ''}`}
              onClick={() => navigate(`/menu/${cat.name}`)}
            >
              {cat.name}
            </div>
          ))}
        </div>
      </div>
      */}

      <div className="menu-section">
        <div className="menu-grid">
          {filteredItems.map((item) => (
            <div key={item.id} className="menu-item">
              <div className="menu-item-content">
                <h3>{item.productName}</h3>
                <div className="menu-item-footer">
                  <span className="price">{item.productPrice} TL</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuList; 