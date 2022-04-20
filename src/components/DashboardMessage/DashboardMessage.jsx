import React, { useState, useEffect } from 'react';
import { BiEnvelope } from 'react-icons/bi';
import { IconContext } from 'react-icons';
import axios from 'axios';
import { toast } from 'react-toastify';
import MessageList from '../MessageList/MessageList';

import './DashboardMessage.css';
import { useNavigate } from 'react-router-dom';

function DashboardMessage() {
  const navigate = useNavigate();
  const [message, setMessage] = useState([]);

  const handleClick = (e, data) => {
    navigate('/dashboard/utilisateurs', { state: { ...data } });
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/messages`)
      .then((res) => setMessage(res.data))
      .catch((err) =>
        toast.error(
          'Une erreur est survenue lors de la récupération du message'
        )
      );
  }, []);
  return (
    <>
      <h1 className="title-page-message">
        Liste des messages{' '}
        <IconContext.Provider
          value={{ size: 40, style: { verticalAlign: 'middle' } }}
        >
          <span className="enveloppe">
            <BiEnvelope />
            {message.length > 0 && (
              <span className="pastille">{message.length}</span>
            )}
          </span>
        </IconContext.Provider>
      </h1>
      <div className="dashboard-message">
        {message?.map((message) => (
          <MessageList {...message} onClick={(e) => handleClick(e, message)} />
        ))}
      </div>
    </>
  );
}

export default DashboardMessage;
