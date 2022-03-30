import React, { useState } from 'react';

function SelectComponant() {
  const [selection, setSelection] = useState('');
  return (
    <>
      <select>
        <option value={selection}></option>
      </select>
    </>
  );
}

export default SelectComponant;
