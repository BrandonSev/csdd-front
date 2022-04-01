import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './components/SitePages/HomePage/HomePage';
import Home from './components/SitePages/Home/Home';
import LoginPage from './components/SitePages/LoginPage/LoginPage';
import Register from './components/SitePages/Register/Register';
import ForgotPw from './components/SitePages/ForgotPw/ForgotPw';
import Formation from './components/SitePages/Formation/Formation';
import Memoire from './components/SitePages/Memoire/Memoire';
import CommissionDesRites from './components/SitePages/CommissionDesRites/CommissionDesRites';
import MonCompte from './components/SitePages/MonCompte';
import Navbar from './components/Navbar';
import EventsDashboard from './components/SitePages/EventsDashboard/EventsDashboard';
import Footer from './components/Footer';
import JobOffersDashboard from './components/SitePages/JobOffersDashboard/JobOffersDashboard';
import VieDeLaCorpo from './components/SitePages/VieDeLaCorpo/Corpo';
import DashboardMessage from './components/DashboardMessage/DashboardMessage';
import UserDashboard from './components/SitePages/UserDashboard';
import MediaDashboard from './components/SitePages/MediaDashboard';
import BookDashboard from './components/SitePages/BookDashboard/BookDashboard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [loggedInAdmin, setLoggedInAdmin] = useState(true);
  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {loggedIn && !loggedInAdmin ? (
        <>
          <Navbar />
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/formation" element={<Formation />} />
            <Route path="/memoire" element={<Memoire />} />
            <Route path="/commission" element={<CommissionDesRites />} />
            <Route path="/vie-de-la-corpo" element={<VieDeLaCorpo />} />
            <Route path="/mon-compte" element={<MonCompte />} />
          </Routes>
          <Footer />
        </>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/password" element={<ForgotPw />} />
        </Routes>
      )}
      {loggedIn && loggedInAdmin && (
        <Routes>
          <Route path="/dashboard/message" element={<DashboardMessage />} />
          <Route path="/dashboard/utilisateurs" element={<UserDashboard />} />
          <Route path="/dashboard/medias" element={<MediaDashboard />} />
          <Route path="/dashboard/evenements" element={<EventsDashboard />} />
          <Route path="/dashboard/metiers" element={<BookDashboard />} />
          <Route
            path="/dashboard/offre-embauche"
            element={<JobOffersDashboard />}
          />
        </Routes>
      )}
    </div>
  );
}

export default App;
