import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import SelectComponant from '../../SelectComponents/Select';
import Input from '../../Input/Input';
import Button from '../../Button/Button';

const options = [
  { value: 'Choice 1', label: 'Choice 1' },
  { value: 'Choice 2', label: 'Choice 2' },
  { value: 'Choice 3', label: 'Choice 3' },
];

function eventsDashboard() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
  });

  useEffect(() => {}, []);
  return (
    <div className="evenementDashboard-container">
      <h1 className="event-title">Les offres d&#39;embauches</h1>
      <SelectComponant
        options={options}
        label="Selectionner un Job"
        className="selectComponant"
      />
      <div className="events-Input">
        <h1>Ajouter une offre</h1>
        <Input
          label="Reference"
          type="Reference"
          name="Reference"
          id="Reference"
          onChange={formik.handleChange}
          value={formik.values.Reference}
        />
        <Input
          label="Poste"
          type="Poste"
          name="Poste"
          id="Poste"
          onChange={formik.handleChange}
          value={formik.values.poste}
        />
        <Input
          label="lieu du poste"
          type="lieu du poste"
          name="lieu du poste"
          id="lieu du poste"
          onChange={formik.handleChange}
          value={formik.values.Link}
        />
        <Input
          label="description"
          type="description"
          name="description"
          id="description"
          onChange={formik.handleChange}
          value={formik.values.Link}
        />
        <div className="eventsBtn-container">
          <div />
          <div className="btn-event">
            <Button className="Events-btn" buttonName="Valider" />
          </div>
          <div className="btn-event">
            <Button className="Events-btn" buttonName="Modifier" />
          </div>
          <div className="btn-event">
            <Button className="Events-btn" buttonName="Supprimé" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default eventsDashboard;
