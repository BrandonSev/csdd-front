import React, { useState } from 'react';
import Events from '../../Events/Events';
import './HomePage.css';
import ModalInfo from '../../ModalInfo/ModalInfo';
import Button from '../../Button/Button';
import Books from '../../Books/Books';
import JobOffers from '../../JobOffers/JobOffers';
import MediaLink from '../../MediaLink/MediaLink';

function HomePage() {
  const [displayPdf, setDisplayPdf] = useState(true);

  const handleClick = (e) => {
    setDisplayPdf(true);
  };

  return (
    <div className="body-homePage">
      <div className="container-home">
        <div> Composant menu</div>
        <div>
          <Events />
        </div>
        <section className="news">
          <div className="container-info">
            <h3>Bulletin d informations</h3>
            <Button
              className="info-button"
              buttonName="Afficher"
              onClick={handleClick}
            />
            {displayPdf && (
              <ModalInfo onClick={(e) => setDisplayPdf(!displayPdf)} />
            )}
          </div>
          <div className="container-medias">
            <MediaLink />
          </div>
        </section>

        <div>
          <Books />
        </div>
        <div>
          <JobOffers />
        </div>
        <div>Composant footer</div>
      </div>
    </div>
  );
}

export default HomePage;
