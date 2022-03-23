import React from 'react';
import info from '../../assets/info.pdf';

function ModalInfo() {
  return (
    <div className="container-modalInfo">
      <iframe
        className="info"
        src={info}
        // alt="bulletin d'information"
        type="application/pdf"
        frameBorder="0"
        height="100%"
        width="100%"
      />
      {/* <img className="modal-img-info" src="#" alt="bulletin d'information"></img> */}
    </div>
  );
}

export default ModalInfo;
