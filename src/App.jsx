import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './components/SitePages/HomePage/HomePage';
import Home from './components/SitePages/Home/Home';
import LoginPage from './components/SitePages/LoginPage/LoginPage';
import Register from './components/SitePages/Register/Register';
import Formation from './components/SitePages/Formation/Formation';
import Memoire from './components/SitePages/Memoire/Memoire';
import ComissionDesrites from './components/SitePages/ComissionDesRite/ComissionDesrites';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/Formation" element={<Formation />} />
        <Route path="/Memoire" element={<Memoire />} />
        <Route path="/Comission" element={<ComissionDesrites />} />
      </Routes>
    </div>
  );
}

export default App;
