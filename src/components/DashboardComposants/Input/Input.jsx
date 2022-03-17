import React from 'react';

import './Input.css';

function Input({
  label,
  type,
  required,
  name,
  className,
  minLength,
  pattern,
  value,
  onChange,
  disabled,
}) {
  return (
    <form>
      <label htmlFor={name}>
        {label}
        <input
          type={type}
          required={required}
          name={name}
          id={name}
          className={className}
          minLength={minLength}
          pattern={pattern}
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
      </label>
    </form>
  );
}

export default Input;
