import React from 'react';

import './Input.css';

function Input({
  label,
  type,
  required,
  name,
  className,
  value,
  onChange,
  disabled,
}) {
  return (
    <label htmlFor={name}>
      {label}
      <input
        type={type}
        required={required}
        name={name}
        id={name}
        className={className}
        value={value}
        onChange={onChange}
        disabled={disabled}
        style={{ marginTop: '0.5rem' }}
      />
    </label>
  );
}

export default Input;
