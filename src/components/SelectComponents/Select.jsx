import React from 'react';
import './Select.css';

function SelectComponant({ data, setValue, optionValue }) {
  const handleModify = (e) => {
    setValue(
      data.find((d) => {
        return d.id === parseInt(e.target.value, 10);
      })
    );
  };
  return (

    <select
      name="eventsSelect"
      id="eventsSelect"
      onChange={(e) => handleModify(e)}
    >
      <option value="" selected>
        Sélectionner ici
      </option>
      {data?.map((data) => (
        <option value={data.id} key={data.id}>
          {data[optionValue]}
        </option>
      ))}
    </select>
  );
}

export default SelectComponant;
