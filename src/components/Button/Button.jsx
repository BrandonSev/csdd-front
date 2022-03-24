import React from 'react';

function Button({ className, buttonName, submit, onClick }) {
  return (
    <button
      className={`button ${className}`}
      type={submit ? 'submit' : 'button'}
      onClick={onClick}
    >
      <p>
        <span className="button-name"> {buttonName} </span>
      </p>
    </button>
  );
}

export default Button;
