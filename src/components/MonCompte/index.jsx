import React, { useState } from 'react';
import Input from '../DashboardComposants/Input/Input';
import Button from '../DashboardComposants/Button/Button';
import './MonCompte.css';

const MonCompte = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="profil-page container">
      <div className="title">
        <h1>Page de profil</h1>
      </div>
      <div className="wrapper">
        <div className={`left-block ${open && 'open'}`}>
          <div className="avatar-image">
            <img src="assets/logo.png" width={180} alt="avatar profil" />
          </div>
          <div className="user-info">
            <p>Status: Mon status</p>
            <p>Role: Role1</p>
          </div>
          <button
            type="button"
            className="burger"
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
          </button>
        </div>
        <div className="right-block">
          <div className="wrapper-donnee-perso">
            <h3>Données personnelles</h3>
            <form className="donnee-perso">
              <Input label="Nom: " />
              <Input label="Prénom: " />
              <Input label="Date de naissance: " />
              <Input label="Addresse: " />
              <Input label="Code postal: " />
              <Input label="Ville: " />
              <Input label="Email: " />
              <Input label="Telephone: " />
              <Button className="button button-red" buttonName="Valider" />
            </form>
          </div>
          <div className="wrapper-corpo">
            <h3>Informations corporation</h3>
            <form className="info-corpo">
              <Input label="Nom de province: " />
              <Input label="Lieu d'adoption: " />
              <Input label="Date d'adoption: " />
              <Input label="Chambre: " />
              <Input label="Lieu de réception: " />
              <Input label="Date de réception: " />
              <Button
                className="button button-red w-100"
                buttonName="Envoyer"
              />
            </form>
          </div>
          <div className="wrapper-password">
            <h3>Mot de passe</h3>
            <form className="password">
              <Input label="Mot de passe: " />
              <Input label="Confirmer mot de passe: " />
              <Button
                className="button button-red w-100"
                buttonName="Envoyer"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonCompte;
