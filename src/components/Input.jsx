import React from 'react';

function Input({
  label,
  type,
  className,
  name,
  value,
  handleChange,
  disabled,
}) {
  return (
    <form>
      <label htmlFor={name}>
        {label}
        <input
          id={name}
          type={type}
          className={className}
          name={name}
          value={value}
          onChange={handleChange}
          disabled={disabled}
        />
      </label>
    </form>
  );
}

export default Input;
