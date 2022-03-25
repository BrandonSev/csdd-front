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
import DashboardPage from './components/Dashboard/DashboardPage';
import JobOffersDashboard from './components/SitePages/JobOffersDashboard/JobOffersDashboard';
import VieDeLaCorpo from './components/SitePages/VieDeLaCorpo/Corpo';
import UserDashboard from './components/SitePages/UserDashboard';

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
        <Route path="/memoire" element={<Memoire />} />
        <Route path="/commission" element={<CommissionDesRites />} />
        <Route path="/Events-dashboard" element={<EventsDashboard />} />
        <Route path="/jobOffers-dashboard" element={<JobOffersDashboard />} />
        <Route path="/vie-de-la-corpo" element={<VieDeLaCorpo />} />
      </Routes>
      <Footer />
      <Routes>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/dashboard/users" element={<UserDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
