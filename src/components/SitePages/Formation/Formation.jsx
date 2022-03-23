import React from 'react';
import './Formation.css';

import Button from '../../Button/Button';

function Formation() {
  return (
    <div className="formation-container">
      <div className="child">
        <div className="formation-image-container">
          <img
            className="formation-image"
            src="#"
            alt="PROGRESSION DE DESSIN"
          />
        </div>
        <div className="formation-btn-container">
          <div>
            <Button
              className="formation-btn"
              buttonName="PROGRESSION DE DESSIN"
            />
          </div>
        </div>
      </div>

      <div className="child">
        <div className="formation-image-container">
          <img
            className="formation-image"
            src="#"
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
          <img
            className="formation-image"
            src="#"
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
          <img className="formation-image" src="#" alt="MINI-STAGE" />
        </div>
        <div className="formation-btn-container">
          <div>
            <Button className="formation-btn" buttonName="MINI-STAGE" />
          </div>
        </div>
      </div>

      <div className="child">
        <div className="formation-image-container">
          <img className="formation-image" src="#" alt="PARCOUR DE FORMATION" />
        </div>
        <div className="formation-btn-container">
          <div>
            <Button
              className="formation-btn"
              buttonName="PARCOUR DE FORMATION"
            />
          </div>
        </div>
      </div>

      <div className="child">
        <div className="formation-image-container">
          <img className="formation-image" src="#" alt="ARCHIVE" />
        </div>
        <div className="formation-btn-container">
          <div>
            <Button className="formation-btn" buttonName="ARCHIVE" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Formation;
