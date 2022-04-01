import React, { useState } from 'react';
import Events from '../../Events/Events';
import ModalInfo from '../../ModalInfo/ModalInfo';
import Button from '../../Button/Button';
import Books from '../../Books/Books';
import JobOffers from '../../JobOffers/JobOffers';
import MediaLink from '../../MediaLink/MediaLink';
import './HomePage.css';

function HomePage() {
  const [displayPdf, setDisplayPdf] = useState(true);

  const handleClickPdf = () => {
    setDisplayPdf(true);
  };

  return (
    <div className="container homePage">
      <div className="container-homePage">
        <div className="container-events">
          <Events />
        </div>
        <div className="news">
          <div className="container-info">
            <h3>Bulletin d informations</h3>
            <div className="container-info-button">
              <Button
                className="button-red"
                buttonName="Afficher"
                onClick={handleClickPdf}
              />
              <Button
                className="button-yellow"
                buttonName="Fermer"
                // onClick={!handleClickPdf}
              />
            </div>
            {displayPdf && (
              <ModalInfo onClick={() => setDisplayPdf(!displayPdf)} />
            )}
          </div>
          <div className="container-medias">
            <MediaLink />
          </div>
        </div>
        <div className="container-books">
          <Books />
        </div>
        <div className="container-jobOffers">
          <JobOffers />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
