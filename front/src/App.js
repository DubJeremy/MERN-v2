import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Items from './pages/Items';
import WishList from './pages/WishList';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path='/wishlist' element={<WishList />} />
        <Route path='/produits' element={<Items />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
