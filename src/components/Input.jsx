import React from 'react';

function Input({ type, className, name, value, handleChange, disabled }) {
  return (
    <input
      type={type}
      className={className}
      name={name}
      value={value}
      onChange={handleChange}
      disabled={disabled}
    />
  );
}

export default Input;
