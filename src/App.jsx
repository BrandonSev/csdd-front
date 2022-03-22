import React from 'react';
import { Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
<<<<<<< HEAD
import Accueil from './components/Accueil/Accueil';
import EspaceMembre from './components/EspaceMembre/EspaceMembre';
import Home from './components/Home/Home';
=======
import Home from './components/SitePages/Home/Home';
import MemberArea from './components/SitePages/MemberArea/MemberArea';
import AccessRequest from './components/SitePages/AccessRequest/AccessRequest';
>>>>>>> 7a1f4d32d8b627b01f22909fd7a7aad6777f086c
import Formation from './components/Formation/Formation';
=======

import Home from './components/SitePages/Home/Home';
import LoginPage from './components/SitePages/LoginPage/LoginPage';
import Register from './components/SitePages/Register/Register';
import Formation from './components/SitePages/Formation/Formation';
import Memoire from './components/SitePages/Memoire/Memoire';
>>>>>>> 1658ad37323c3b421b6f7e53a6525bbee00640de

function App() {
  return (
    <div className="App">
      <Routes>
<<<<<<< HEAD
        <Route path="/home" element={<Home />} />
=======
        <Route path="/" element={<Home />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Formation" element={<Formation />} />
<<<<<<< HEAD
>>>>>>> 7a1f4d32d8b627b01f22909fd7a7aad6777f086c
=======
        <Route path="/Memoire" element={<Memoire />} />
>>>>>>> 1658ad37323c3b421b6f7e53a6525bbee00640de
      </Routes>
    </div>
  );
}

export default App;
