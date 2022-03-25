import React from 'react';
import { BiUserPlus } from 'react-icons/bi';
import Dashboard from '../Dashboard';
import DashboardMenu from '../Dashboard/DashboardMenu';
import DashboardHeader from '../Dashboard/DashboardHeader';
import DashboardBody from '../Dashboard/DashboardBody';

import './DashboardMessage.css';

function DashboardMessage() {
  return (
    <Dashboard>
      <DashboardMenu />
      <DashboardHeader />
      <DashboardBody>
        <div className="container-message">
          <h1 className="avatar-name">
            <BiUserPlus size={40} /> Prénom NOM
          </h1>{' '}
          <br />
          <p>Prénom NOM a fait une demande d'accès à la plateforme</p> <br />
          <div className="datetime">Reçu le : datetime-format</div>
        </div>
      </DashboardBody>
    </Dashboard>
  );
}

export default DashboardMessage;
