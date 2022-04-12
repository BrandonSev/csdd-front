import React from 'react';
import './Select.css';

function SelectComponant({
  data,
  setValue,
  optionValue,
  defaultValue,
  disabled,
  label,
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
      <label for="select">{label}</label>
      <select
        name="select"
        id="select"
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
