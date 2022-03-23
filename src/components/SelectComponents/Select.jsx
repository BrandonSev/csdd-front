import React from 'react';
import Select from 'react-select';
import './Select.css';

function SelectComponant({ className, options, label }) {
  return (
    <div className="SelectComponent-container">
      <h1 className={`${className}`}>{label}</h1>
      <Select className={`${className}`} options={options} />
    </div>
  );
}

export default SelectComponant;
