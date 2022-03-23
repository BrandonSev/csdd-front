import React from 'react';

import Button from '../../Button/Button';

function Memoire() {
  return (
    <div className="formation-container">
      <div className="child">
        <div className="formation-image-container">
          <img className="formation-image" src="#" alt="INNOVATIONS" />
        </div>
        <div className="formation-btn-container">
          <Button className="formation-btn" buttonName="INNOVATIONS" />
        </div>
      </div>

      <div className="child">
        <div className="formation-image-container">
          <img className="formation-image" src="#" alt="CONGRES" />
        </div>
        <div className="formation-btn-container">
          <Button className="formation-btn" buttonName="CONGRES PHOTO" />
        </div>
      </div>

      <div className="child">
        <div className="formation-image-container">
          <img
            className="formation-image"
            src="#"
            alt="CONCOURS DE FERRONERIE"
          />
        </div>
        <div className="formation-btn-container">
          <Button
            className="formation-btn"
            buttonName="CONCOURS DE FERRONERIE"
          />
        </div>
      </div>

      <div className="child">
        <div className="formation-image-container">
          <img className="formation-image" src="#" alt="CONCOURS DE SOUDURE" />
        </div>
        <div className="formation-btn-container">
          <Button className="formation-btn" buttonName="CONCOURS DE SOUDURE" />
        </div>
      </div>
    </div>
  );
}

export default Memoire;
