import React from 'react';

import Button from '../../Button/Button';

function CommissionDesRites() {
  return (
    <div className="formation-container">
      <div className="child">
        <div className="formation-image-container">
          <img
            className="formation-image"
            src="#"
            alt="DEROULEMENT CELEBRATIONS"
          />
        </div>
        <div className="formation-btn-container">
          <Button
            className="formation-btn"
            buttonName="DEROULEMENT CELEBRATIONS"
          />
        </div>
      </div>

      <div className="child">
        <div className="formation-image-container">
          <img
            className="formation-image"
            src="#"
            alt="ENSEIGNEMENT COMPAGNONIQUE"
          />
        </div>
        <div className="formation-btn-container">
          <Button
            className="formation-btn"
            buttonName="ENSEIGNEMENT COMPAGNONIQUE"
          />
        </div>
      </div>

      <div className="child">
        <div className="formation-image-container">
          <img
            className="formation-image"
            src="#"
            alt="CULTURE COMPAGNONIQUE"
          />
        </div>
        <div className="formation-btn-container">
          <Button
            className="formation-btn"
            buttonName="CULTURE COMPAGNONIQUE"
          />
        </div>
      </div>
    </div>
  );
}

export default CommissionDesRites;
