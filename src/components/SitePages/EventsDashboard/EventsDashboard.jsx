import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import SelectComponant from '../../SelectComponents/Select';
import Input from '../../Input/Input';
import Button from '../../Button/Button';
import DashboardBody from '../../Dashboard/DashboardBody/index';
import DashboardHeader from '../../Dashboard/DashboardHeader/index';
import DashboardMenu from '../../Dashboard/DashboardMenu';
import Dashboard from '../../Dashboard/index';
import './EventsDashboard.css';

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
          <div className="select-evenement">
            <h1 className="event-title">Evenements de la page accueil</h1>
            <div className="events-select">
              <p>Séléctionner un événements</p>
              <SelectComponant />
            </div>
          </div>
          <div className="events-Input">
            <h1>Ajouter un événements:</h1>
            <Input
              label="Titre"
              type="Title"
              name="Title"
              id="Title"
              onChange={formik.handleChange}
              value={formik.values.Title}
            />
            <div className="event-text-container">
              <p>Ajouter du texte </p>
              <textarea
                name="Text"
                id="Text"
                onChange={formik.handleChange}
                value={formik.values.Texte}
              />
            </div>
            <div className="event-image-container">
              <p>séléctionner un image</p>
              <SelectComponant />
            </div>
            <Input
              label="Ajouter un lien"
              type="AddingLink"
              name="AddingLink"
              id="Title"
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
      </DashboardBody>
    </Dashboard>
  );
}

export default eventsDashboard;
