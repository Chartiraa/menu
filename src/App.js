import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Categories from './pages/Categories';
import MenuList from './components/MenuList';
import BottomBar from './components/BottomBar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Categories />} />
          <Route path="/menu/:category" element={<MenuList />} />
        </Routes>
        <BottomBar />
      </div>
    </Router>
  );
}

export default App;
