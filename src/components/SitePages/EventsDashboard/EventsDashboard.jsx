import React, { useState, useContext, useRef } from 'react';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import axios from 'axios';
import moment from 'moment';
import ModalConfirm from '../../ModalConfirm';
import SelectComponant from '../../SelectComponents/Select';
import Input from '../../Input/Input';
import Button from '../../Button/Button';
import './EventsDashboard.css';
import { AppContext } from '../../../context/AppContext';

const API_URL = process.env.REACT_APP_BACKEND_URL;

function eventsDashboard() {
  const fileRef = useRef();
  const [modify, setModify] = useState(false);
  const [filename, setFilename] = useState('');
  const { events, setEvents } = useContext(AppContext);
  const [open, setOpen] = useState(false);
  /**
   * It sets the formik state to true and sets the formik values to the data passed in.
   */
  const pushSelectedInFormik = (data) => {
    setModify(true);
    setFilename(data.filename);
    for (const [key, value] of Object.entries(data)) {
      formik.setFieldValue(`${key}`, value);
    }
  };

  /* It's creating a formik object that will be used to validate the form. */
  const formik = useFormik({
    initialValues: {
      event_date: '',
      title: '',
      description: '',
      filename: '',
      event_link: '',
    },
    /* It's the function that will be called when the form is submitted. */
    onSubmit: (values, { resetForm }) => {
      const bodyFormData = new FormData();
      bodyFormData.append(
        'data',
        JSON.stringify({
          ...values,
        })
      );
      /* It's sending the file to the server. */
      bodyFormData.append('assets', values.filename);
      axios
        .post(`${API_URL}/api/events/`, bodyFormData)
        .then((res) => {
          setEvents([...events, res.data]);
          fileRef.current.value = '';
          resetForm();
          toast.success("L'évènement a bien été ajouté");
        })
        .catch((err = console.error(err.message)));
    },

    enableReinitialize: true,
  });

  const handleDeleteEvent = async () => {
    await axios
      .delete(`${API_URL}/api/events/${formik.values.id}`)
      .then((response) => {
        if (response.status === 204) {
          setEvents(events.filter((event) => event.id !== formik.values.id));
          setModify(false);
          fileRef.current.value = '';
          formik.resetForm();
          toast.success("L'évènement a bien été supprimé ");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handlemodifyEvent = async (e) => {
    e.preventDefault();

    const bodyFormData = new FormData();
    bodyFormData.append(
      'data',
      JSON.stringify({
        ...formik.values,

        event_date: moment(formik.values.event_date).format('YYYY-MM-DD'),
      })
    );
    bodyFormData.append('assets', formik.values.filename);

    await axios
      .put(`${API_URL}/api/events/${formik.values.id}`, bodyFormData)
      .then((response) => {
        if (response.status === 200) {
          const replaceEventChange = events.map((event) => {
            const item = [response.data].find(({ id }) => id === event.id);
            return item || event;
          });
          setEvents(replaceEventChange);
          setModify(false);
          toast.success("L'évènement a bien été modifié ");
          fileRef.current.value = '';
          formik.resetForm();
        } else {
          alert('Erreur');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <ModalConfirm
        message="Etes vous sûr de vouloir supprimer cet évènement?"
        handleOpen={setOpen}
        isOpen={open}
        handleValid={handleDeleteEvent}
      />

      <div className="evenementDashboard-container">
        <div className="select-evenement">
          <h1 className="event-title">Evènements de la page accueil</h1>
          <div className="events-select">
            <SelectComponant
              name="select_event"
              setValue={(data) => pushSelectedInFormik(data)}
              data={events}
              optionValue="title"
              defaultValue={formik.values.id}
              label="Sélectionner un évènement"
            />
          </div>
        </div>
        <div className="events-Input">
          <h3>Ajouter un évènement:</h3>
          <Input
            label="Titre"
            type="text"
            name="title"
            id="title"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
          <div className="event-text-container">
            <label htmlFor="description">Ajouter du texte</label>
            <textarea
              className="event-description"
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
              ref={fileRef}
            />
            {modify &&
              (formik.values.filename === filename ? (
                <img
                  className="event_image"
                  src={`${API_URL}/images/${formik.values.filename}`}
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
              ))}
            {!modify &&
              (formik.values.filename.name ? (
                <img
                  className="event_image"
                  src={URL.createObjectURL(formik.values.filename)}
                  alt=""
                  width={150}
                />
              ) : (
                ''
              ))}
          </div>
          <Input
            label="Date de l'évènement"
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
            {!modify && (
              <div className="btn-event validate-btn">
                <Button
                  className="button-red event_button"
                  buttonName="Valider"
                  onClick={formik.handleSubmit}
                />
              </div>
            )}
            {modify && (
              <>
                <div className="btn-event">
                  <Button
                    className="button-red event_button"
                    buttonName="Modifier"
                    onClick={handlemodifyEvent}
                  />
                </div>
                <div className="btn-event">
                  <Button
                    className="button-red event_button"
                    buttonName="Supprimer"
                    onClick={() => setOpen(true)}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default eventsDashboard;
