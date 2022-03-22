import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="background-image">
        <img src="assets/background_accueil.jpg" alt="Background" />
      </div>
      <div className="big-logo">
        <div>
          <img src="assets/logo.png" alt="Logo CSDD" />
        </div>
      </div>
      <div className="content">
        <h1>CSDD</h1>
        <h2>Compagnons Serrurier Du Devoir</h2>
        <button className="enter-button" type="button">
          Entrer
        </button>
      </div>
    </div>
  );
}

export default Home;
