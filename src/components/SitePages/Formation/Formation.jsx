import React from 'react';
import Button from '../../Button/Button';
import progressionDessin from '../../../assets/progressionDessin.gif';
import progressionAtelier from '../../../assets/progressionAtelier.png';
import archive from '../../../assets/archive.png';
import parcoursFormation from '../../../assets/parcoursFormation.gif';
import miniStage from '../../../assets/miniStage.png';

function Formation() {
  return (
    <div className="container formation-container">
      <h1 className="TitleForMobile">Formation</h1>
      <div className="child">
        <div className="formation-image-container">
          <img
            className="formation-image"
            src={progressionDessin}
            alt="PROGRESSION DE DESSINS"
          />
        </div>
        <div className="formation-btn-container">
          <Button
            className="formation-btn"
            buttonName="PROGRESSION DE DESSINS"
          />
        </div>
      </div>

      <div className="child">
        <div className="formation-image-container">
          <img
            className="formation-image"
            src={progressionAtelier}
            alt="PROGRESSION D'ATELIER"
          />
        </div>
        <div className="formation-btn-container">
          <div>
            <Button
              className="formation-btn"
              buttonName="PROGRESSION D'ATELIER"
            />
          </div>
        </div>
      </div>

      <div className="child">
        <div className="formation-image-container">
          <img className="formation-image" src={miniStage} alt="MINI STAGES" />
        </div>
        <div className="formation-btn-container">
          <div>
            <Button className="formation-btn" buttonName="MINI STAGES" />
          </div>
        </div>
      </div>

      <div className="child">
        <div className="formation-image-container">
          <img
            className="formation-image"
            src={parcoursFormation}
            alt="PARCOURS DE FORMATION"
          />
        </div>
        <div className="formation-btn-container">
          <div>
            <Button
              className="formation-btn"
              buttonName="PARCOURS DE FORMATION"
            />
          </div>
        </div>
      </div>

      <div className="child">
        <div className="formation-image-container">
          <img className="formation-image" src={archive} alt="ARCHIVES" />
        </div>
        <div className="formation-btn-container">
          <div>
            <Button className="formation-btn" buttonName="ARCHIVES" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Formation;
