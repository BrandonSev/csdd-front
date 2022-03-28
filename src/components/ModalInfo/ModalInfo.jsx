import React from 'react';
import info from '../../assets/info.pdf';
// import info-img from '../../assets/'

function ModalInfo(onClick) {
  return (
    <div className="container-modalInfo">
      <button onClick={onClick}>close</button>
      <iframe
        className="info"
        src={info}
        type="application/pdf"
        frameBorder="0"
        height="100%"
        width="100%"
      />
      <img
        className="modal-img-info"
        src="#"
        alt="bulletin d'information"
      ></img>
    </div>
  );
}

export default ModalInfo;
