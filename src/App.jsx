import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './components/SitePages/HomePage/HomePage';
import Home from './components/SitePages/Home/Home';
import LoginPage from './components/SitePages/LoginPage/LoginPage';
import Register from './components/SitePages/Register/Register';
import Formation from './components/SitePages/Formation/Formation';
import Memoire from './components/SitePages/Memoire/Memoire';
import CommissionDesRites from './components/SitePages/CommissionDesRites/CommissionDesRites';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/Formation" element={<Formation />} />
        <Route path="/mon-compte" element={<MonCompte />} />
        <Route path="/Memoire" element={<Memoire />} />
        <Route path="/Commission" element={<CommissionDesRites />} />
      </Routes>
    </div>
  );
}

export default App;
