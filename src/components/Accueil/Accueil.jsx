import React from 'react';
import './Accueil.css';

function Accueil() {
  return (
    <div className="accueil">
      <div className="background-image">
        <img src="./assets/background_accueil.jpg" alt="Background" />
      </div>
      <div className="logo">
        <div>
          <img src="./assets/logo_csdd_2021_detoure.png" alt="Logo CSDD" />
        </div>
      </div>
      <h1>CSDD</h1>
      <h2>Compagnons Serrurier Du Devoir</h2>
      <button className="enter-button" type="button">
        Entrer
      </button>
    </div>
  );
}

export default Accueil;
