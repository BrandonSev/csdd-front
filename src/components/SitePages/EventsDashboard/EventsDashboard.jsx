import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import SelectComponant from '../../SelectComponents/Select';
import Input from '../../Input/Input';
import Button from '../../Button/Button';
import DashboardBody from '../../Dashboard/DashboardBody/index';
import DashboardHeader from '../../Dashboard/DashboardHeader/index';
import DashboardMenu from '../../Dashboard/DashboardMenu';
import Dashboard from '../../Dashboard/index';
import './EventsDashboard.css';

const API_URL = process.env.REACT_APP_BACKEND_URL;

function eventsDashboard() {
  const [events, setEvents] = useState([]);
  const [selectedValue, setSelectedValue] = useState({});

  const formik = useFormik({
    initialValues: {
      event_date: selectedValue.event_date ? selectedValue.event_date : '',
      description: selectedValue.description ? selectedValue.description : '',
      filename: selectedValue.filename ? selectedValue.filename : '',
      event_link: selectedValue.event_link ? selectedValue.event_link : '',
    },
    enableReinitialize: true,
  });

  useEffect(() => {
    (async () => {
      await axios
        .get(`${API_URL}/api/events/`)
        .then((response) => response.data)
        .then((data) => {
          setEvents(data);
        })
        .catch((err) => {
          console.log(err);
        });
    })();
  }, []);

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
              <SelectComponant
                setValue={setSelectedValue}
                data={events}
                optionValue="filename"
              />
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
              value={formik.values.filename}
            />
            <div className="event-text-container">
              <p>Ajouter du texte </p>
              <textarea
                name="Text"
                id="Text"
                onChange={formik.handleChange}
                value={formik.values.description}
              />
            </div>
            <div className="event-image-container">
              <p>séléctionner un image</p>
              <input type="file" className="ignores-input-style" />
              {selectedValue.filename && (
                <img
                  className="event_image"
                  src={`${API_URL}/images/${selectedValue.filename}`}
                  alt=""
                  width={150}
                />
              )}
            </div>
            <Input
              label="Ajouter un lien"
              type="AddingLink"
              name="AddingLink"
              id="Title"
              onChange={formik.handleChange}
              value={formik.values.event_link}
            />
            <div className="eventsBtn-container">
              <div />
              <div className="btn-event">
                <Button
                  className="button-red event_button"
                  buttonName="Valider"
                />
              </div>
              <div className="btn-event">
                <Button
                  className="button-red event_button"
                  buttonName="Modifier"
                />
              </div>
              <div className="btn-event">
                <Button
                  className="button-red event_button"
                  buttonName="Supprimé"
                />
              </div>
            </div>
          </div>
        </div>
      </DashboardBody>
    </Dashboard>
  );
}

export default eventsDashboard;
