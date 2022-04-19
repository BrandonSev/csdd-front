import React, { useState, useContext } from 'react';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import axios from 'axios';
import moment from 'moment';
import Button from '../../Button/Button';
import ModalConfirm from '../../ModalConfirm';
import SelectComponant from '../../SelectComponents/Select';
import './MediaDashboard.css';
import { AppContext } from '../../../context/AppContext';

const API_URL = process.env.REACT_APP_BACKEND_URL;

function MediaDashboard() {
  const [modify, setModify] = useState(false);
  const [filename, setFilename] = useState('');
  const { assets } = useContext(AppContext);
  const { roles } = useContext(AppContext);
  const { categories } = useContext(AppContext);
  const [open, setOpen] = useState(false);

  const pushSelectedInFormik = (data) => {
    setModify(true);
    setFilename(data.filename);
    setTitle(data.filename);

    for (const [key, value] of Object.entries(data)) {
      formik.setFieldValue(`${key}`, value);
    }
  };

  const formik = useFormik({
    initialValues: {
      filename: '',
      type: '',
      file_date: '',
      created_at: '',
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
      console.log(values);
      bodyFormData.append('assets', values.filename);
      axios
        .post(`${API_URL}/api/assets/`, bodyFormData)
        .then((data) => {
          resetForm();
          toast.success('Le fichier a bien été ajouté');
        })
        .catch((err = console.error(err.message)));
    },
    enableReinitialize: true,
  });

  const handleDeleteMedia = async () => {
    await axios
      .delete(`${API_URL}/api/assets/${formik.values.id}`)

      .then((response) => {
        if (response.status === 204) {
          formik.resetForm();
          toast.success('Le fichier a bien été supprimé ');
        }
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  const handleModifyMedia = async (e) => {
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
      .put(`${API_URL}/api/assets/${formik.values.id}`, bodyFormData)
      .then((response) => {
        if (response.status === 200) {
          toast.success('Le fichier a bien été modifié ');

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
    <>
      <ModalConfirm
        message={'Etes vous sûr de vouloir supprimer ce fichier'}
        isOpen={open}
        handleOpen={setOpen}
        handleValid={handleDeleteMedia}
      />
      <div className="media-dashboard">
        <div className="select-evenement">
          <h1 className="media-title">Médias</h1>
          <div className="events-select">
            <SelectComponant
              setValue={(data) => pushSelectedInFormik(data)}
              data={assets}
              optionValue="title"
            />
          </div>
        </div>
        <div className="media-dashboard-body">
          <p>
            <b>Ajouter un média</b>
          </p>
          <form className="form-media">
            <div className="form-group">
              <label htmlFor="file_Title">Nom du Fichier</label>
              <input
                type="text"
                name="title"
                id="title"
                onChange={formik.handleChange}
                value={formik.values.title}
              />
            </div>
            <div className="form-group">
              <label htmlFor="file">Sélectionner un fichier</label>
              <input
                type="file"
                className="ignores-input-style"
                onChange={(e) => {
                  formik.setFieldValue('filename', e.target.files[0]);
                }}
                name="filename"
              />
            </div>
            <div className="form-group">
              <label htmlFor="file">Localisation du fichier</label>
              <input type="text" name="file" id="file" />
            </div>
            <div className="form-group">
              <label htmlFor="file">Date du fichier</label>
              <input
                type="date"
                name="file_date"
                id="file_date"
                onChange={formik.handleChange}
                value={
                  formik.values.file_date
                    ? moment(formik.values.file_date).format('YYYY-MM-DD')
                    : formik.values.file_date
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="file">Date de mise à jour</label>
              <input
                name="file"
                id="file"
                value={
                  formik.values.created_at
                    ? moment(formik.values.created_at).format('DD-MM-YYYY')
                    : formik.values.created_at
                }
              />
            </div>
            <div className="select-evenement">
              <p>Rôles: </p> <br />
              <br />
              <div className="roles">
                {roles?.map((role) => (
                  <div>
                    <label htmlFor="roles">{role.name}</label>
                    <input type="checkbox" name="roles" id="roles" />
                  </div>
                ))}
              </div>
              <div className="events-select">
                <SelectComponant
                  data={categories}
                  optionValue="name"
                  label="Selectionner une categorie"
                />
              </div>
            </div>
            {!modify && (
              <div className="form-group">
                <Button
                  className="button-red"
                  buttonName="Valider"
                  onClick={formik.handleSubmit}
                />
              </div>
            )}
            <div className="button-action">
              {modify && (
                <>
                  <Button
                    className="button-red"
                    buttonName="Modifier"
                    onClick={handleModifyMedia}
                  />
                  <Button
                    className="button-red"
                    buttonName="Supprimer"
                    onClick={() => setOpen(true)}
                  />
                </>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default MediaDashboard;
