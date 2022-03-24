import React from 'react';

import './Input.css';

function Input({
  labelClassName,
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
    <label htmlFor={name} className={labelClassName}>
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
