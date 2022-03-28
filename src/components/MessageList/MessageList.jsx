import React from 'react';
import { BiUserPlus } from 'react-icons/bi';

import './MessageList.css';

function MessageList() {
  return (
    <div className="wrapper-message">
      <h3 className="avatar-name">
        <BiUserPlus size={40} /> Prénom NOM
      </h3>
      <br />
      <p>Prénom NOM a fait une demande d&#39;accès à la plateforme</p> <br />
      <div className="datetime">Reçu le : datetime-format</div>
    </div>
  );
}

export default MessageList;
