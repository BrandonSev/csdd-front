import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import SelectComponant from '../../SelectComponents/Select';
import Input from '../../Input/Input';
import Button from '../../Button/Button';
import DashboardPage from '../../Dashboard/DashboardPage';
import DashboardBody from '../../Dashboard/DashboardBody/index';
import DashboardHeader from '../../Dashboard/DashboardHeader/index';
import DashboardMenu from '../../Dashboard/DashboardMenu';
import Dashboard from '../../Dashboard/index';
import './EventsDashboard.css';

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
    <Dashboard>
      <DashboardMenu />
      <DashboardHeader />
      <DashboardBody>
        <div className="evenementDashboard-container">
          <h1 className="event-title">Evenements de la page accueil</h1>
          <SelectComponant
            options={options}
            label="Selectionner un evenements"
            className="selectComponant"
          />
          <div className="events-Input">
            <h1>Ajouter un événements</h1>
            <Input
              label="Titre"
              type="Title"
              name="Title"
              id="Title"
              onChange={formik.handleChange}
              value={formik.values.Title}
            />
            <Input
              label="Ajouter du text"
              type="Text"
              name="Text"
              id="Text"
              onChange={formik.handleChange}
              value={formik.values.Texte}
            />
            <SelectComponant
              options={options}
              label="Selectionner une image"
              className="selectComponant"
            />
            <Input
              label="Ajouter un lien"
              type="AddingLink"
              name="AddingLink"
              id="Title"
              onChange={formik.handleChange}
              value={formik.values.Link}
            />
            <div className="eventsBtn-container">
              <div></div>
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
      </DashboardBody>
    </Dashboard>
  );
}

export default eventsDashboard;
