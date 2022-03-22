import React from 'react';

function Button({ className, buttonName }) {
  return (
    <div>
      <button className={`button ${className}`} type="submit">
        <p>
          <span className="button-name"> {buttonName} </span>
        </p>
      </button>
    </div>
  );
}

export default Button;
