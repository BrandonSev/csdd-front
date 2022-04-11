import React from 'react';
import Button from '../../Button/Button';
import deroulementCelebrations from '../../../assets/deroulementCelebrations.png';
import enseignementCompagnonique from '../../../assets/enseignementCompagnonique.png';
import cultureCompagnonique from '../../../assets/cultureCompagnonique.png';

function CommissionDesRites() {
  return (
    <div className="container">
      <div className="formation-container">
        <div className="child">
          <div className="formation-image-container">
            <img
              className="formation-image"
              src={deroulementCelebrations}
              alt="DEROULEMENT CELEBRATIONS"
            />
          </div>
          <div className="formation-btn-container">
            <div>
              <Button
                className="formation-btn"
                buttonName="DEROULEMENT CELEBRATIONS"
              />
            </div>
          </div>
        </div>

        <div className="child">
          <div className="formation-image-container">
            <img
              className="formation-image"
              src={enseignementCompagnonique}
              alt="ENSEIGNEMENT COMPAGNONIQUE"
            />
          </div>
          <div className="formation-btn-container">
            <div>
              <Button
                className="formation-btn"
                buttonName="ENSEIGNEMENT COMPAGNONIQUE"
              />
            </div>
          </div>
        </div>

        <div className="child">
          <div className="formation-image-container">
            <img
              className="formation-image"
              src={cultureCompagnonique}
              alt="CULTURE COMPAGNONIQUE"
            />
          </div>
          <div className="formation-btn-container">
            <div>
              <Button
                className="formation-btn"
                buttonName="CULTURE COMPAGNONIQUE"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommissionDesRites;
