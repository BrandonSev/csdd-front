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
  const { categories, roles } = useContext(AppContext);
  const { assets, setAssets } = useContext(AppContext);
  const [open, setOpen] = useState(false);

  const pushSelectedInFormik = (data) => {
    setModify(true);
    setFilename(data.filename);
    for (const [key, value] of Object.entries(data)) {
      const date = ['file_date', 'created_at'];

      if (data.roles) {
        const array = [];
        data.roles.split(',').map((role) => {
          return roles.map((roles) => {
            if (roles.name === role) {
              array.push(roles.id);
            }
          });
        });
        formik.setFieldValue('roleId', array);
      }
      if (data.categories) {
        const array = [];
        data.categories.split(',').map((categorie) => {
          return categories.map((categories) => {
            if (categories.name === categorie) {
              array.push(categories.id);
            }
          });
        });
        formik.setFieldValue('categoryId', array);
      }
      formik.setFieldValue(
        `${key}`,
        date.includes(key) ? moment(value).format('YYYY-MM-DD') : value
      );
    }
  };

  const formik = useFormik({
    initialValues: {
      filename: '',
      type: '',
      file_date: '',
      created_at: '',
      title: '',
      categoryId: [],
      roleId: [],
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
        .post(`${API_URL}/api/assets/`, bodyFormData)
        .then((res) => {
          setAssets([...assets, res.data[0]]);
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
          setAssets(assets.filter((asset) => asset.id !== formik.values.id));
          setModify(false);
          formik.resetForm();
          toast.success('Le fichier a bien été supprimé ');
        }
      })
      .catch((err) => {
        toast.error(err);
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
          const replaceMediaChange = assets.map((asset) => {
            const item = [response.data].find(({ id }) => id === asset.id);
            return item || asset;
          });
          setAssets(replaceMediaChange);
          setModify(false);
          toast.success('Le fichier a bien été modifié ');
          formik.resetForm();
        } else {
          alert('Erreur');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSelect = (e) => {
    const { checked, name, value } = e.target;
    if (checked) {
      formik.setFieldValue('roleId', [
        ...formik.values.roleId,
        parseInt(value, 10),
      ]);
    } else {
      formik.setFieldValue(
        'roleId',
        formik.values.roleId.filter((v) => v !== parseInt(value, 10))
      );
    }
  };
  return (
    <>
      <ModalConfirm
        message="Etes vous sûr de vouloir supprimer ce fichier"
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
              label="Sélectionner un fichier"
              name="select_media"
              defaultValue={formik.values.id}
            />
          </div>
        </div>
        <div className="media-dashboard-body">
          <h3>
            <b>Ajouter un média</b>
          </h3>
          <form className="form-media">
            <div className="form-group">
              <label htmlFor="file_Title">Nom du Fichier</label>
              <input
                type="text"
                name="file_Title"
                id="file_Title"
                onChange={formik.handleChange}
                value={formik.values.title}
              />
            </div>
            <div className="form-group">
              <label htmlFor="file_select">Sélectionner un fichier</label>
              <input
                name="file_select"
                type="file"
                className="ignores-input-style"
                id="file"
                onChange={(e) => {
                  formik.setFieldValue('filename', e.target.files[0]);
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="file_date">Date du fichier</label>
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
            <div className="form-group localisation">
              <label htmlFor="select_location">Localisation</label>
              <SelectComponant
                name="select_location"
                setValue={(data) => {
                  formik.setFieldValue('categoryId', [data.id]);
                }}
                data={categories}
                optionValue="name"
                defaultValue={formik.values.categoryId[0]}
              />
            </div>
            <div className="form-group">
              <label htmlFor="file_update_date">Date de mise à jour</label>
              <input
                name="file_update_date"
                id="file_update_date"
                value={
                  formik.values.created_at
                    ? moment(formik.values.created_at).format('DD-MM-YYYY')
                    : formik.values.created_at
                }
              />
            </div>
            <div className="">
              <h3>Niveau d'accès: </h3> <br />
              <br />
              <div className="roles">
                {roles?.map((role) => (
                  <div>
                    <label htmlFor={role.name}>{role.name}</label>
                    <input
                      type="checkbox"
                      checked={formik.values.roleId.includes(role.id)}
                      name={role.name}
                      id={role.name}
                      value={role.id}
                      onChange={handleSelect}
                    />
                  </div>
                ))}
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
