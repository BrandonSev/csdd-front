import React from 'react';
import { BiEnvelope } from 'react-icons/bi';
import Dashboard from '../Dashboard';
import DashboardMenu from '../Dashboard/DashboardMenu';
import DashboardHeader from '../Dashboard/DashboardHeader';
import DashboardBody from '../Dashboard/DashboardBody';
import MessageList from '../MessageList/MessageList';

import './DashboardMessage.css';

function DashboardMessage() {
  return (
    <Dashboard>
      <DashboardMenu />
      <DashboardHeader />
      <DashboardBody>
        <h1 className="title-page-message">
          Liste des messages <BiEnvelope size={40} />
        </h1>
        <div className="dashboard-message">
          <MessageList />
          <MessageList />
          <MessageList />
          <MessageList />
          <MessageList />
        </div>
      </DashboardBody>
    </Dashboard>
  );
}

export default DashboardMessage;
