import React from 'react';

function Button({ className, buttonName, submit }) {
  return (
    <button
      className={`button ${className}`}
      type={submit ? 'submit' : 'button'}
    >
      <p>
        <span className="button-name"> {buttonName} </span>
      </p>
    </button>
  );
}

export default Button;
