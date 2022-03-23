import React from 'react';
import './JobOffers.css';

function JobOffers() {
  return (
    <div>
      <h2 className="offer-title">Offres d embauche</h2>
      <div className="job-offers-container">
        <h4>reference</h4>
        <h4> city</h4>
        <h4 className="job">poste</h4>
        <p>
          description Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Dolor ut doloremque fugit ipsum cupiditate, et, dolorem tempore
          reiciendis quae eveniet cumque optio animi officia nemo veniam, omnis
          neque a quos.
        </p>
      </div>
    </div>
  );
}

export default JobOffers;
