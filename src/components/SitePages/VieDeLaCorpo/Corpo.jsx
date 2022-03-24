import React from 'react';

import Button from '../../Button/Button';

function CommissionDesRites() {
  return (
    <div className="formation-container">
      <div className="child">
        <div className="formation-image-container">
          <img className="formation-image" src="#" alt="ANNUAIRE" />
        </div>
        <div className="formation-btn-container">
          <div>
            <Button className="formation-btn" buttonName="ANNUAIRE" />
          </div>
        </div>
      </div>

      <div className="child">
        <div className="formation-image-container">
          <img className="formation-image" src="#" alt="ORGANIGRAMME" />
        </div>
        <div className="formation-btn-container">
          <div>
            <Button className="formation-btn" buttonName="ORGANIGRAMME" />
          </div>
        </div>
      </div>

      <div className="child">
        <div className="formation-image-container">
          <img className="formation-image" src="#" alt="REGLES CORPORATIVE" />
        </div>
        <div className="formation-btn-container">
          <div>
            <Button className="formation-btn" buttonName="REGLES CORPORATIVE" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommissionDesRites;
