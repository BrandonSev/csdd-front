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
import { toast } from 'react-toastify';
import { useContext } from 'react';
import { AppContext } from '../../../context/AppContext';

const API_URL = process.env.REACT_APP_BACKEND_URL;

function bookDashboard() {
  const [selectedValue, setSelectedValue] = useState({});
  const [modify, setModify] = useState(false);
  const [filename, setFilename] = useState('');
  const { books } = useContext(AppContext);

  const pushSelectedInFormik = (data) => {
    setModify(true);
    setFilename(data.filename);
    for (const [key, value] of Object.entries(data)) {
      formik.setFieldValue(`${key}`, value);
    }
  };

  const formik = useFormik({
    initialValues: {
      filename: selectedValue.filename ? selectedValue.filename : '',
      img_link: selectedValue.img_link ? selectedValue.img_link : '',
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
        .post(`${API_URL}/api/books/`, bodyFormData)
        .then((data) => {
          resetForm();
          toast.success('Livre Ajouter');
        })
        .catch((err = console.error(err.message)));
    },
    enableReinitialize: true,
  });
  const handleDeleteBooks = async (e) => {
    e.preventDefault();

    await axios
      .delete(`${API_URL}/api/books/${formik.values.id}`)
      .then((response) => {
        if (response.status === 204) {
          toast.success("L'évenement est supprimé ");
        } else {
          alert('Erreur');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handlemodifyBooks = async (e) => {
    e.preventDefault();

    const bodyFormData = new FormData();
    bodyFormData.append(
      'data',
      JSON.stringify({
        ...formik.values,
      })
    );
    bodyFormData.append('assets', formik.values.filename);

    await axios
      .put(`${API_URL}/api/books/${formik.values.id}`, bodyFormData)
      .then((response) => {
        if (response.status === 200) {
          toast.success("L'évenement est modifié ");
          formik.resetForm;
        } else {
          alert('Erreur');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Dashboard>
      <DashboardMenu />
      <DashboardHeader />
      <DashboardBody>
        <div className="select-evenement">
          <h1 className="event-title">Livre Métier page accueil</h1>
          <div className="events-select">
            <p>Sélectionner un livre</p>
            <SelectComponant
              setValue={(data) => pushSelectedInFormik(data)}
              data={books}
              optionValue="filename"
            />
          </div>
        </div>
        <div className="events-Input">
          <b>Ajouter un livre</b>
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
            label="Ajouter un lien"
            type="img_link"
            name="img_link"
            id="img_link"
            onChange={formik.handleChange}
            value={formik.values.img_link}
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
                    onClick={handlemodifyBooks}
                  />
                </div>
                <div className="btn-event">
                  <Button
                    className="button-red event_button"
                    buttonName="Supprimer"
                    onClick={handleDeleteBooks}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </DashboardBody>
    </Dashboard>
  );
}

export default bookDashboard;
