import React from 'react';
import { Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <div className="App">
      <Routes>
<<<<<<< HEAD
        <Route path="/home" element={<Home />} />
=======
        <Route path="/" element={<Home />} />
        <Route path="/MemberArea" element={<MemberArea />} />
        <Route path="/AccessRequest" element={<AccessRequest />} />
        <Route path="/Formation" element={<Formation />} />
>>>>>>> 7a1f4d32d8b627b01f22909fd7a7aad6777f086c
      </Routes>
    </div>
  );
}

export default App;
