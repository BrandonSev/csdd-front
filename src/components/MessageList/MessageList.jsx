import React from 'react';
import { BiUserPlus } from 'react-icons/bi';
import moment from 'moment';

import './MessageList.css';

function MessageList({ message, created_at }) {
  return (
    <div className="wrapper-message">
      <h3 className="avatar-name">
        <BiUserPlus size={40} /> {message.split(' ')[0]} {message.split(' ')[1]}
      </h3>
      <br />
      <p>{message}</p> <br />
      <div className="datetime">
        Reçu le {moment(created_at).format('DD/MM/yyyy à HH:mm:ss')}
      </div>
    </div>
  );
}

export default MessageList;
