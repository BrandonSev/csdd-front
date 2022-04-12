import React from 'react';
import Button from '../../Button/Button';
import innovation from '../../../assets/innovation.png';
import congresGalerie from '../../../assets/congresGalerie.png';
import concoursFerronerie from '../../../assets/concoursFerronerie.png';
import concoursSoudure from '../../../assets/concoursSoudure.png';

function Memoire() {
  return (
    <div className="container formation-container">
      <h1 className="TitleForMobile">Mémoire</h1>
      <div className="child">
        <div className="formation-image-container">
          <img className="formation-image" src={innovation} alt="INNOVATIONS" />
        </div>
        <div className="formation-btn-container">
          <div>
            <Button className="formation-btn" buttonName="INNOVATIONS" />
          </div>
        </div>
      </div>

      <div className="child">
        <div className="formation-image-container">
          <img
            className="formation-image"
            src={congresGalerie}
            alt="CONGRES GALERIE"
          />
        </div>
        <div className="formation-btn-container">
          <div>
            <Button className="formation-btn" buttonName="CONGRES GALERIE" />
          </div>
        </div>
      </div>

      <div className="child">
        <div className="formation-image-container">
          <img
            className="formation-image"
            src={concoursFerronerie}
            alt="CONCOURS DE FERRONERIE"
          />
        </div>
        <div className="formation-btn-container">
          <div>
            <Button
              className="formation-btn"
              buttonName="CONCOURS DE FERRONERIE"
            />
          </div>
        </div>
      </div>

      <div className="child">
        <div className="formation-image-container">
          <img
            className="formation-image"
            src={concoursSoudure}
            alt="CONCOURS DE SOUDURE"
          />
        </div>
        <div className="formation-btn-container">
          <div>
            <Button
              className="formation-btn"
              buttonName="CONCOURS DE SOUDURE"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Memoire;
