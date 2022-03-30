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
            alt="PROGRESSION DE DESSINS"
          />
        </div>
        <div className="formation-btn-container">
          <div>
            <Button
              className="formation-btn"
              buttonName="PROGRESSION DE DESSINS"
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
            alt="MINI STAGES"
          />
        </div>
        <div className="formation-btn-container">
          <div>
            <Button
              className="formation-btn"
              buttonName="MINI STAGES"
            />
          </div>
        </div>
      </div>

      <div className="child">
        <div className="formation-image-container">
          <img className="formation-image" src="#" alt="PARCOURS DE FORMATION" />
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
          <img className="formation-image" src="#" alt="ARCHIVES" />
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
