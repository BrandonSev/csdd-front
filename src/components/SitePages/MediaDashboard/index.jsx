import React, { useState, useContext } from 'react';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import axios from 'axios';
import moment from 'moment';
import Button from '../../Button/Button';
import Dashboard from '../../Dashboard';
import DashboardBody from '../../Dashboard/DashboardBody';
import DashboardHeader from '../../Dashboard/DashboardHeader';
import DashboardMenu from '../../Dashboard/DashboardMenu';
import ModalConfirm from '../../ModalConfirm';
import SelectComponant from '../../SelectComponents/Select';
import './MediaDashboard.css';
import { AppContext } from '../../../context/AppContext';

const API_URL = process.env.REACT_APP_BACKEND_URL;

function MediaDashboard() {
  const [selectedValue, setSelectedValue] = useState({});
  const [modify, setModify] = useState(false);

  const [filename, setFilename] = useState('');

  const { assets } = useContext(AppContext);
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
      filename: selectedValue.filename ? selectedValue.filename : '',
      type: selectedValue.type ? selectedValue.type : '',
      file_date: selectedValue.file_date ? selectedValue.file_date : '',
      created_at: selectedValue.created_at ? selectedValue.created_at : '',
      title: selectedValue.title ? selectedValue.title : '',
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
    <Dashboard>
      <DashboardMenu />
      <DashboardHeader />
      <DashboardBody>
        <ModalConfirm
          message={'Etes vous sûr de vouloir supprimer ce fichier'}
          isOpen={open}
          handleOpen={setOpen}
          handleValid={handleDeleteMedia}
        />
        <div className="media-dashboard">
          <h1 className="media-title">Médias</h1>
          <SelectComponant
            setValue={(data) => pushSelectedInFormik(data)}
            data={assets}
            optionValue="title"
          />
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
                <label htmlFor="file">Type du fichier</label>
                <input
                  type="text"
                  name="type"
                  id="type"
                  onChange={formik.handleChange}
                  value={formik.values.type}

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
              <div>
                <p>Rôles: </p> <br />
                <div className="roles">
                  <div>
                    <label htmlFor="roles">Roles</label>
                    <input type="checkbox" name="roles" id="roles" />
                  </div>
                  <div>
                    <label htmlFor="roles">Roles</label>
                    <input type="checkbox" name="roles" id="roles" />
                  </div>
                  <div>
                    <label htmlFor="roles">Roles</label>
                    <input type="checkbox" name="roles" id="roles" />
                  </div>
                  <div>
                    <label htmlFor="roles">Roles</label>
                    <input type="checkbox" name="roles" id="roles" />
                  </div>
                  <div>
                    <label htmlFor="roles">Roles</label>
                    <input type="checkbox" name="roles" id="roles" />
                  </div>
                  <div>
                    <label htmlFor="roles">Roles</label>
                    <input type="checkbox" name="roles" id="roles" />
                  </div>
                  <div>
                    <label htmlFor="roles">Roles</label>
                    <input type="checkbox" name="roles" id="roles" />
                  </div>
                  <div>
                    <label htmlFor="roles">Roles</label>
                    <input type="checkbox" name="roles" id="roles" />
                  </div>
                  <div>
                    <label htmlFor="roles">Roles</label>
                    <input type="checkbox" name="roles" id="roles" />
                  </div>
                  <div>
                    <label htmlFor="roles">Roles</label>
                    <input type="checkbox" name="roles" id="roles" />
                  </div>
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
      </DashboardBody>
    </Dashboard>
  );
}

export default MediaDashboard;
