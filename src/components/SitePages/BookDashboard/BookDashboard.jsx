import React, { useState, useContext } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { toast } from 'react-toastify';
import SelectComponant from '../../SelectComponents/Select';
import Input from '../../Input/Input';
import Button from '../../Button/Button';
import DashboardBody from '../../Dashboard/DashboardBody/index';
import DashboardHeader from '../../Dashboard/DashboardHeader/index';
import DashboardMenu from '../../Dashboard/DashboardMenu';
import Dashboard from '../../Dashboard/index';
import { AppContext } from '../../../context/AppContext';
import ModalConfirm from '../../ModalConfirm';

const API_URL = process.env.REACT_APP_BACKEND_URL;

function bookDashboard() {
  const [modify, setModify] = useState(false);
  const [filename, setFilename] = useState('');
  const { books, setBooks } = useContext(AppContext);
  const [open, setOpen] = useState(false);

  const pushSelectedInFormik = (data) => {
    setModify(true);
    setFilename(data.filename);
    for (const [key, value] of Object.entries(data)) {
      formik.setFieldValue(`${key}`, value);
    }
  };

  const formik = useFormik({
    initialValues: {
      filename: '',
      img_link: '',
      link: '',
      title: '',
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
        .then((res) => {
          setBooks([...books, res.data]);
          resetForm();
          toast.success('Le livre a été ajouté');
        })
        .catch((err = console.error(err.message)));
    },
    enableReinitialize: true,
  });

  const handleDeleteBooks = async () => {
    await axios
      .delete(`${API_URL}/api/books/${formik.values.id}`)

      .then((response) => {
        if (response.status === 204) {
          setBooks(books.filter((book) => book.id !== formik.values.id));
          setModify(false);
          formik.resetForm();
          toast.success('Le livre a bien été supprimé ');
        }
      })
      .catch((err) => {
        toast.error(
          err.response.data.message ||
            'Une erreur est survenue lors de la suppression du livre'
        );
      });
  };

  const handleModifyBooks = async (e) => {
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
          const replaceBookChange = books.map((book) => {
            const item = [response.data].find(({ id }) => id === book.id);
            return item ? item : book;
          });
          setBooks(replaceBookChange);
          setModify(false);
          toast.success("L'évenement a été modifié ");
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
    <Dashboard>
      <DashboardMenu />
      <DashboardHeader />
      <DashboardBody>
        <ModalConfirm
          message={'Etes vous sûr de vouloir supprimer ce livre?'}
          handleOpen={setOpen}
          isOpen={open}
          handleValid={handleDeleteBooks}
        />
        <div className="select-evenement">
          <h1 className="event-title">Livres Métier</h1>
          <div className="events-select">
            <p>Sélectionner un livre</p>
            <SelectComponant
              setValue={(data) => pushSelectedInFormik(data)}
              data={books}
              optionValue="filename"
              defaultValue={formik.values.id}
            />
          </div>
        </div>
        <div className="events-Input">
          <b>Ajouter un livre</b>
          <Input
            label="Titre du livre"
            type="title"
            name="title"
            id="title"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
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
            label="Ajouter un lien d'image"
            type="img_link"
            name="img_link"
            id="img_link"
            onChange={formik.handleChange}
            value={formik.values.img_link}
          />

          <Input
            label="Ajouter un lien"
            type="link"
            name="link"
            id="link"
            onChange={formik.handleChange}
            value={formik.values.link}
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
                    onClick={handleModifyBooks}
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
      </DashboardBody>
    </Dashboard>
  );
}

export default bookDashboard;
