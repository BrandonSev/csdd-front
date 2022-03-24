import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './components/SitePages/HomePage/HomePage';
import Home from './components/SitePages/Home/Home';
import LoginPage from './components/SitePages/LoginPage/LoginPage';
import Register from './components/SitePages/Register/Register';
import Formation from './components/SitePages/Formation/Formation';
import Memoire from './components/SitePages/Memoire/Memoire';
import CommissionDesRites from './components/SitePages/CommissionDesRites/CommissionDesRites';
import MonCompte from './components/SitePages/MonCompte';
import Navbar from './components/Navbar';
import EventsDashboard from './components/SitePages/EventsDashboard/EventsDashboard';
import Footer from './components/Footer';
import JobOffersDashboard from './components/SitePages/JobOffersDashboard/JobOffersDashboard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Navbar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/formation" element={<Formation />} />
        <Route path="/mon-compte" element={<MonCompte />} />
        <Route path="/Memoire" element={<Memoire />} />
        <Route path="/Commission" element={<CommissionDesRites />} />
        <Route path="/Events-dashboard" element={<EventsDashboard />} />
        <Route path="/JobOffers-dashboard" element={<JobOffersDashboard />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
