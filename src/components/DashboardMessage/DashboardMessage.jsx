import React from 'react';
import { BiEnvelope } from 'react-icons/bi';
import MessageList from '../MessageList/MessageList';

import './DashboardMessage.css';

function DashboardMessage() {
  return (
    <>
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
    </>
  );
}

export default DashboardMessage;
