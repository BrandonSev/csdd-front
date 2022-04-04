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
import moment from 'moment';

const API_URL = process.env.REACT_APP_BACKEND_URL;

function eventsDashboard() {
  const [events, setEvents] = useState([]);
  const [selectedValue, setSelectedValue] = useState({});
  const [isSelected, setIsSelected] = useState({});

  /* It's creating a formik object that will be used to validate the form. */
  const formik = useFormik({
    initialValues: {
      event_date: selectedValue.event_date ? selectedValue.event_date : '',
      description: selectedValue.description ? selectedValue.description : '',
      filename: selectedValue.filename ? selectedValue.filename : '',
      event_link: selectedValue.event_link ? selectedValue.event_link : '',
    },
    onSubmit: (values, { resetForm }) => {
      const bodyFormData = new FormData();
      bodyFormData.append(
        'data',
        JSON.stringify({
          ...values,
        })
      );
      bodyFormData.append('assets', values.filename);
      axios
        .post(`${API_URL}/api/events/`, bodyFormData)
        .then((data) => {
          resetForm;
        })
        .catch((err = console.error(err.message)));
    },

    enableReinitialize: true,
  });

  /* It's fetching the data from the API and setting it to the state. */
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
            <h1 className="event-title">Evènements de la page accueil</h1>
            <div className="events-select">
              <p>Sélectionner un évènement</p>
              <SelectComponant
                setValue={setSelectedValue}
                data={events}
                optionValue="filename"
              />
            </div>
          </div>
          <div className="events-Input">
            <b>Ajouter un évènement:</b>
            <Input
              label="Titre"
              type="text"
              name="title"
              id="Title"
              value={formik.values.filename}
            />
            <div className="event-text-container">
              <p>Ajouter du texte </p>
              <textarea
                name="description"
                id="description"
                onChange={formik.handleChange}
                value={formik.values.description}
              />
            </div>
            <div className="event-image-container">
              <p>Sélectionner une image</p>
              <input
                type="file"
                className="ignores-input-style"
                accept="image/*"
                onChange={(e) => {
                  formik.setFieldValue('filename', e.target.files[0]);
                }}
                name="filename"
              />
              {formik.values.filename !== '' ? (
                formik.values.filename === selectedValue.filename ? (
                  <img
                    className="event_image"
                    src={`${API_URL}/images/${selectedValue.filename}`}
                    alt=""
                    width={150}
                  />
                ) : (
                  <img
                    className="event_image"
                    src={URL.createObjectURL(formik.values.filename)}
                    alt=""
                    width={150}
                  />
                )
              ) : (
                ''
              )}
            </div>
            <Input
              label="Date de l'événement"
              type="date"
              name="event_date"
              id="event_date"
              onChange={formik.handleChange}
              value={
                formik.values.event_date
                  ? moment(formik.values.event_date).format('YYYY-MM-DD')
                  : formik.values.event_date
              }
            />
            <Input
              label="Ajouter un lien"
              type="event_link"
              name="event_link"
              id="event_link"
              onChange={formik.handleChange}
              value={formik.values.event_link}
            />
            <div className="eventsBtn-container">
              <div />
              <div className="btn-event">
                <Button
                  className="button-red event_button"
                  buttonName="Valider"
                  onClick={formik.handleSubmit}
                />
              </div>
              {isSelected !== '' && (
                <>
                  <div className="btn-event">
                    <Button
                      className="button-red event_button"
                      buttonName="Modifier"
                    />
                  </div>
                  <div className="btn-event">
                    <Button
                      className="button-red event_button"
                      buttonName="Supprimer"
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </DashboardBody>
    </Dashboard>
  );
}

export default eventsDashboard;
