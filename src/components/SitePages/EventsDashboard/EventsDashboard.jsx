import React from 'react';
import SelectComponant from '../../SelectComponents/Select';

const options = [
  { value: 'Choice 1', label: 'Choice 1' },
  { value: 'Choice 2', label: 'Choice 2' },
  { value: 'Choice 3', label: 'Choice 3' },
];

function eventsDashboard() {
  return (
    <div className="evenementDashboard-container">
      <h1 className="event-title">Evenements de la page accueil</h1>
      <SelectComponant
        options={options}
        label="Selectionner un evenements"
        className="selectComponant"
      />
    </div>
  );
}

export default eventsDashboard;
