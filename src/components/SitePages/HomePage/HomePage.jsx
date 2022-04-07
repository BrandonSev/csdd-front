import React, { useState } from 'react';
import Events from '../../Events/Events';
import ModalInfo from '../../ModalInfo/ModalInfo';
import Button from '../../Button/Button';
import Books from '../../Books/Books';
import JobOffers from '../../JobOffers/JobOffers';
import MediaLink from '../../MediaLink/MediaLink';
import './HomePage.css';
import info from '../../../assets/info.pdf';
// import infoimg from '../../assets/infoimg.jpg';

function HomePage() {
  const [displayPdf, setDisplayPdf] = useState('start');
  triggerDisplayPdfBigState = () => {
    setDisplayPdf('displayPdfBig');
  };

  const DisplayPdfButton = (props) => {
    return <button onClick={props.displayPdfBig}>Add pdf</button>;
  };

  // const handleClickPdf = () => {
  //   setDisplayPdf(true);
  // };

  return (
    <div className="container homePage">
      <div className="container-homePage">
        <div className="container-events">
          <Events />
        </div>
        <div className="news">
          <div className="container-info">
            <h3>Bulletin d informations</h3>
            {displayPdf === 'displayPdfBig' && (
              <DisplayPdfButton
                displayPdfBig={this.triggerDisplayPdfBigState}
              />
            )}
{/* 
            <iframe
              className="iframe-info"
              src={info}
              type="application/pdf"
              frameBorder="0"
              height="100%"
              width="100%"
            /> */}
            {/* <img
                className="modal-img-info"
                src={infoimg}
                alt="bulletin d'information"
              ></img> */}
            {/* </div> */}
            {/* 
            {displayPdf && (
              <ModalInfo
                className="modal-size"
                onClick={() => setDisplayPdf(!displayPdf)}
              />
            )} */}
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
