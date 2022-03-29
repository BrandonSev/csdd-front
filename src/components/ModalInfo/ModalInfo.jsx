/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import info from '../../assets/info.pdf';
import infoimg from '../../assets/infoimg.jpg';
// import Button from '../Button/Button';
import "./ModalInfo.css";

function ModalInfo() {
  return (
    <div className="container-modalInfo">
      <div className="modal">
        <iframe
          className="iframe-info"
          src={info}
          type="application/pdf"
          frameBorder="0"
          height="100%"
          width="100%"
        />
        <img
          className="modal-img-info"
          src={infoimg}
          alt="bulletin d'information"
        ></img>
      </div>
    </div>
  );
}

export default ModalInfo;
