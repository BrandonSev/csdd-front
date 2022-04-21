import React from 'react';
import './Select.css';

function SelectComponant({
  name,
  data,
  setValue,
  optionValue,
  defaultValue,
  disabled,
  label,
  style,
}) {
  const handleModify = (e) => {
    setValue(
      data.find((d) => {
        return d.id === parseInt(e.target.value, 10);
      })
    );
  };
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <select
        name={name}
        id={name}
        onChange={(e) => handleModify(e)}
        defaultValue="NULL"
        disabled={disabled}
      >
        <option value="default" selected>
          Sélectionner ici
        </option>
        {data?.map((data) => (
          <option
            value={data.id}
            key={data.id}
            selected={defaultValue === data.id}
          >
            {data[optionValue]}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectComponant;
