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

  const handleClickPdf = () => {
    setDisplayPdf(true);
  };

  return (
    <div className="body-homePage">
      <div className="container-home">
        <Events />
        <section className="news">
          <div className="container-info">
            <h3>Bulletin d informations</h3>
            <Button
              className="button-red"
              buttonName="Afficher"
              onClick={handleClickPdf}
            />
            {displayPdf && (
              <ModalInfo onClick={() => setDisplayPdf(!displayPdf)} />
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
