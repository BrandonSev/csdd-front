import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Accueil from './components/Accueil/Accueil';
import EspaceMembre from './components/EspaceMembre/EspaceMembre';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/espace-membre" element={<EspaceMembre />} />
        {/* <Input
        type="text"
        className="input-orange"
        value={state?.firstname}
        name="firstname"
        handleChange={(e) => setState({ ...state, firstname: e.target.value })}
      />
      <Input
        type="text"
        className="input-orange"
        value={state?.lastname}
        name="lastname"
        handleChange={(e) => setState({ ...state, lastname: e.target.value })}
      />
      <Input
        type="text"
        className="input-orange"
        value={state?.telephone}
        name="telephone"
        handleChange={(e) => setState({ ...state, telephone: e.target.value })}
      /> */}
      </Routes>
    </div>
  );
}

export default App;
