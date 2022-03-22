import React from 'react';

function Button({ className, buttonName }) {
  return (
    <button className={`button ${className}`} type="submit">
      <p>
        <span className="button-name"> {buttonName} </span>
      </p>
    </button>
  );
}

export default Button;
