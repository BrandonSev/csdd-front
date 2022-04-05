import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { toast, ToastContainer } from 'react-toastify';
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
import 'react-toastify/dist/ReactToastify.css';
import { AppContext } from './context/AppContext';
import { useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import ResetPassword from './components/SitePages/ResetPassword';

function App() {
  const [user, setUser] = useState(null);
  const [rooms, setRooms] = useState();
  const [receptionPlace, setReceptionPlace] = useState();
  const [provinces, setProvinces] = useState();
  const [adoptionPlace, setAdoptionPlace] = useState();
  const [loggedIn, setLoggedIn] = useState(false);
  const [loggedInAdmin, setLoggedInAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    (async () => {
      await axios
        .get(`${process.env.REACT_APP_BACKEND_URL}/verifyToken`, {
          withCredentials: true,
          validateStatus: (status) => {
            return status >= 200 && status <= 404;
          },
        })
        .then((res) => {
          if (res.status === 200) {
            setUser(res.data.user);
            setLoggedIn(true);
            console.log(res.data.user);
            if (res.data.user?.roles.includes('admin')) {
              setLoggedInAdmin(true);
            }
          }
        })
        .catch((err) => {
          console.error(err.message);
        });
      setLoading(false);
    })();
  }, [loggedIn, loggedInAdmin]);

  useEffect(() => {
    (async () => {
      await axios.all([
        axios
          .get(`${process.env.REACT_APP_BACKEND_URL}/api/province`)
          .then((res) => setProvinces(res.data))
          .catch((err) =>
            toast.error(
              'Une erreur est survenue lors de la récupération des provinces'
            )
          ),
        axios
          .get(`${process.env.REACT_APP_BACKEND_URL}/api/adoptionPlace`)
          .then((res) => setAdoptionPlace(res.data))
          .catch((err) =>
            toast.error(
              "Une erreur est survenue lors de la récupération des lieux d'adoption"
            )
          ),
        axios
          .get(`${process.env.REACT_APP_BACKEND_URL}/api/room`)
          .then((res) => setRooms(res.data))
          .catch((err) =>
            toast.error(
              'Une erreur est survenue lors de la récupération des chambres'
            )
          ),
        axios
          .get(`${process.env.REACT_APP_BACKEND_URL}/api/receptionPlace`)
          .then((res) => setReceptionPlace(res.data))
          .catch((err) =>
            toast.error(
              'Une erreur est survenue lors de la récupération des lieux de réception'
            )
          ),
      ]);
    })();
  }, []);

  return (
    <div className="App">
      <AppContext.Provider
        value={{
          loggedIn,
          loggedInAdmin,
          setLoggedIn,
          setLoggedInAdmin,
          user,
          setUser,
          provinces,
          adoptionPlace,
          rooms,
          receptionPlace,
        }}
      >
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
        {!loading && loggedIn && (
          <div>
            {!location.pathname.includes('/dashboard') && <Navbar />}
            <Routes>
              <Route path="/home" element={<HomePage />} />
              <Route path="/formation" element={<Formation />} />
              <Route path="/memoire" element={<Memoire />} />
              <Route path="/commission" element={<CommissionDesRites />} />
              <Route path="/vie-de-la-corpo" element={<VieDeLaCorpo />} />
              <Route path="/mon-compte" element={<MonCompte />} />
            </Routes>
            {!location.pathname.includes('/dashboard') && <Footer />}
          </div>
        )}
        {!loading && !loggedIn && !loggedInAdmin && (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/password" element={<ForgotPw />} />
            <Route
              path="/password/reset-password/:id/:token"
              element={<ResetPassword />}
            />
          </Routes>
        )}
        {!loading && loggedInAdmin && (
          <div>
            <Routes>
              <Route path="/dashboard/message" element={<DashboardMessage />} />
              <Route
                path="/dashboard/utilisateurs"
                element={<UserDashboard />}
              />
              <Route path="/dashboard/medias" element={<MediaDashboard />} />
              <Route
                path="/dashboard/evenements"
                element={<EventsDashboard />}
              />
              <Route path="/dashboard/metiers" element={<BookDashboard />} />
              <Route
                path="/dashboard/offre-embauche"
                element={<JobOffersDashboard />}
              />
            </Routes>
          </div>
        )}
      </AppContext.Provider>
    </div>
  );
}

export default App;
