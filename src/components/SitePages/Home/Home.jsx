import React from 'react';
import { NavLink } from 'react-router-dom';

import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="background-image">
        <img src="assets/background_accueil.jpg" alt="Background" />
      </div>
      <div className="big-logo">
        <div>
          <img src="assets/logo-detoure-blanc.png" alt="Logo CSDD" />
        </div>
      </div>
      <div className="content">
        <h1>CSDD</h1>
        <h2>Compagnons Serruriers Du Devoir</h2>
        <NavLink to="/Login" className="button-yellow" type="button">
          Entrer
        </NavLink>
      </div>
    </div>
  );
}

export default Home;
