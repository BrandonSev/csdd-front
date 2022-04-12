import React, { useState, useEffect } from 'react';
import { BiEnvelope } from 'react-icons/bi';
import axios from 'axios';
import { toast } from 'react-toastify';
import MessageList from '../MessageList/MessageList';

import './DashboardMessage.css';

function DashboardMessage() {
  const [message, setMessage] = useState();
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
          Liste des messages <BiEnvelope size={40} />
        </h1>
        <div className="dashboard-message">
          {message?.map((message) => (
            <MessageList {...message} />
          ))}
        </div>
    </>
  );
}

export default DashboardMessage;
