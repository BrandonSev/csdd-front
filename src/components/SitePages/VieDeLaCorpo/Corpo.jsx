import React from 'react';
import Button from '../../Button/Button';
import regleCorporative from '../../../assets/regleCorporative.png';
import organigramme from '../../../assets/organigramme.png';
import annuaire from '../../../assets/annuaire.png';
import reunionsNationales from '../../../assets/reunionsNationales.png';

function VieDeLaCorpo() {
  return (
    <div className="container formation-container">
      <h1 className="TitleForMobile">Vie de la Corpo</h1>
      <div className="child">
        <div className="formation-image-container">
          <img className="formation-image" src={annuaire} alt="ANNUAIRE" />
        </div>
        <div className="formation-btn-container">
          <div>
            <Button className="formation-btn" buttonName="ANNUAIRE" />
          </div>
        </div>
      </div>

      <div className="child">
        <div className="formation-image-container">
          <img
            className="formation-image"
            src={organigramme}
            alt="ORGANIGRAMME"
          />
        </div>
        <div className="formation-btn-container">
          <div>
            <Button className="formation-btn" buttonName="ORGANIGRAMME" />
          </div>
        </div>
      </div>

      <div className="child">
        <div className="formation-image-container">
          <img
            className="formation-image"
            src={reunionsNationales}
            alt="Réunions nationales"
          />
        </div>
        <div className="formation-btn-container">
          <div>
            <Button
              className="formation-btn"
              buttonName="REUNIONS NATIONALES"
            />
          </div>
        </div>
      </div>

      <div className="child">
        <div className="formation-image-container">
          <img
            className="formation-image"
            src={regleCorporative}
            alt="REGLES CORPORATIVE"
          />
        </div>
        <div className="formation-btn-container">
          <div>
            <Button
              className="formation-btn"
              buttonName="REGLES CORPORATIVES"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VieDeLaCorpo;
