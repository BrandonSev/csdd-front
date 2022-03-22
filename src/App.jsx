import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Accueil from './components/Accueil/Accueil';
import EspaceMembre from './components/EspaceMembre/EspaceMembre';
import Home from './components/Home/Home';
import Formation from './components/Formation/Formation';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/espace-membre" element={<EspaceMembre />} />
        <Route path="/home" element={<Home />} />
        <Route path="/formation" element={<Formation/>} />
      </Routes>
    </div>
  );
}

export default App;
