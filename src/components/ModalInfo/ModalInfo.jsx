import React from 'react';
import info from '../../assets/info.pdf';

function ModalInfo() {
  return (
    <>
      <iframe
        className="info"
        src={info}
        // alt="bulletin d'information"
        type="application/pdf"
        frameBorder="0"
        height="100%"
        width="100%"
      />
      {/* <img className="modal-img" src="#" alt="bulletin d'information"></img> */}
    </>
  );
}

export default ModalInfo;
