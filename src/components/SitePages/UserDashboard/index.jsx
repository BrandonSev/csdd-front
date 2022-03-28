import React from 'react';
import './UserDashboard.css';
import Dashboard from '../../Dashboard';
import DashboardMenu from '../../Dashboard/DashboardMenu';
import DashboardHeader from '../../Dashboard/DashboardHeader';
import DashboardBody from '../../Dashboard/DashboardBody';
import Button from '../../Button/Button';
import Input from '../../Input/Input';

function UserDashboard() {
  return (
    <Dashboard>
      <DashboardMenu active="user" />
      <DashboardHeader />
      <DashboardBody>
        <div className="dashboard-user-title">
          <h1>Utilisateurs</h1>
          <Button className="button-yellow" buttonName="Supprimer ce compte" />
        </div>
        <div className="dashboard-user-search">
          <div className="user-avatar">
            <img src="/assets/logo-detoure-noir.png" width="20%" alt="avatar" />
          </div>
          <div className="search-wrapper">
            <Input label="Prénom" />
            <Input label="Nom" />
            <Input type="date" label="Date de naissance" />
            <Button buttonName="Valider" className="button-red" />
          </div>
        </div>
        <div className="dashboard-user-content">
          <div className="info-perso">
            <div className="title">
              <h3>Donnees personelles</h3>
              <div className="cotisation">
                <p>Cotisation à jour: </p>
                <div className="cotisation-checkbox">
                  <Input label="Oui" type="checkbox" />
                  <Input label="Non" type="checkbox" />
                </div>
              </div>
            </div>
            <form action="#" className="form-info-perso">
              <Input label="Nom: " />
              <Input label="Prénom: " />
              <Input label="Date de naissance: " />
              <Input label="Addresse: " />
              <Input label="Code postal: " />
              <Input label="Ville: " />
              <Input label="Email: " />
              <Input label="Telephone: " />
              <Button buttonName="Valider" className="button-red" />
            </form>
          </div>
          <div className="info-corpo">
            <div className="title">
              <h3>Donnees corporations</h3>
            </div>
            <form action="#" className="form-info-corpo">
              <Input label="Nom de province:" />
              <Input label="Lieu d'adoption" />
              <Input label="Date d'adoption" />
              <Input label="Chambre" />
              <Input label="Lieu de réception" />
              <Input label="Date de réception" />
              <Button buttonName="Valider" className="button-red" />
            </form>
          </div>
        </div>
      </DashboardBody>
    </Dashboard>
  );
}

export default UserDashboard;
