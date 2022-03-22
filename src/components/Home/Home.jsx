import React from 'react';
import Carousel from '../Carousel/Carousel';
import Carousel2 from '../Carousel/Carousel2';
import Events from '../Events/Events';

function Home() {
  return (
    <div>
      <div className="container-home">
        <div> Composant menu</div>
        <Carousel />
        <Events/>
        <div>Bulletin d informations</div>
        <div>page lien medias</div>
        <div>Composant Carousel livres</div>
        <Carousel2 />
        <div> offres embauche</div>
        <div>Composant footer</div>
      </div>
    </div>
  );
}

export default Home;
