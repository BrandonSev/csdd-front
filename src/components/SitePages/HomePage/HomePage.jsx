import React from 'react';
import Events from '../../Events/Events';

function HomePage() {
  return (
    <div>
      <div className="container-home">
        <div> Composant menu</div>
        <Events />
        <div>Bulletin d informations</div>
        <div>page lien medias</div>
        <div>Composant Carousel livres</div>
        <div> offres embauche</div>
        <div>Composant footer</div>
      </div>
    </div>
  );
}

export default HomePage;
