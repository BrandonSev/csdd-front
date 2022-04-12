import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
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
import ResetPassword from './components/SitePages/ResetPassword';
import Dashboard from './components/Dashboard';
import DashboardHeader from './components/Dashboard/DashboardHeader';
import DashboardMenu from './components/Dashboard/DashboardMenu';
import DashboardBody from './components/Dashboard/DashboardBody';

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
  const [events, setEvents] = useState([]);
  const [books, setBooks] = useState([]);
  const [jobOffers, setJobOffers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [assets, setAssets] = useState([]);

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
            if (res.data.user?.roles?.includes('admin')) {
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
          .get(`${process.env.REACT_APP_BACKEND_URL}/api/roles`)
          .then((res) => setRoles(res.data))
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
        axios
          .get(`${process.env.REACT_APP_BACKEND_URL}/api/events/`)
          .then(({ data }) => setEvents(data))
          .catch((err) =>
            toast.error(
              'Une erreur est survenue lors de la récupération des évènements'
            )
          ),
        axios
          .get(`${process.env.REACT_APP_BACKEND_URL}/api/books/`)
          .then((response) => response.data)
          .then((data) => {
            setBooks(data);
          })
          .catch((err) =>
            toast.error(
              'Une erreur est survenue lors de la récupération des livres'
            )
          ),
        axios
          .get(`${process.env.REACT_APP_BACKEND_URL}/api/jobOffers/`)
          .then(({ data }) => {
            setJobOffers(data);
          })
          .catch((err) =>
            toast.error(
              'Une erreur est survenue lors de la récupération des offres d embauche'
            )
          ),
        axios
          .get(`${process.env.REACT_APP_BACKEND_URL}/api/assets/`)
          .then(({ data }) => {
            setAssets(data);
          })
          .catch((err) =>
            toast.error('Une erreur est survenue lors des assest')
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
          events,
          setEvents,
          books,
          setBooks,
          jobOffers,
          setJobOffers,
          roles,
          assets,
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
          <Dashboard>
            <DashboardHeader />
            <DashboardMenu />
            <DashboardBody>
              <Routes>
                <Route
                  path="/dashboard/message"
                  element={<DashboardMessage />}
                />
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
            </DashboardBody>
          </Dashboard>
        )}
      </AppContext.Provider>
    </div>
  );
}

export default App;
