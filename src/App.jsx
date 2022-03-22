import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './components/SitePages/Home/Home';
import LoginPage from './components/SitePages/LoginPage/LoginPage';
import Register from './components/SitePages/Register/Register';
import Formation from './components/SitePages/Formation/Formation';
import Memoire from './components/SitePages/Memoire/Memoire';
import CommissionDesRites from './components/SitePages/CommissionDesRites/CommissionDesrites';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Formation" element={<Formation />} />
        <Route path="/Memoire" element={<Memoire />} />
        <Route path="/Commission" element={<CommissionDesRites />} />
      </Routes>
    </div>
  );
}

export default App;
