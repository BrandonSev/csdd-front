import React from 'react';
import Button from '../../components/Button/Button';
import './ModalConfirm.css';
import { AiOutlineCloseCircle } from 'react-icons/all';

function ModalConfirm({ message, isOpen, handleOpen, handleValid }) {
  const handleClick = () => {
    handleValid();
    handleOpen(false);
  };

  return (
    <div className={`modal-confirm ${isOpen ? 'open' : ''}`}>
      <div className="wrapper-modal-confirm">
        <p className="title">Etes-vous sûr?</p>
        <p className="message">{message}</p>
        <div className="modal-confirm-button">
          <Button
            buttonName="Non"
            className="button-yellow"
            onClick={() => handleOpen(false)}
          />
          <Button
            buttonName="Oui"
            className="button-red"
            onClick={handleClick}
          />
        </div>
        <div className="cross" onClick={() => handleOpen(false)}>
          <AiOutlineCloseCircle />
        </div>
      </div>
    </div>
  );
}

export default ModalConfirm;
