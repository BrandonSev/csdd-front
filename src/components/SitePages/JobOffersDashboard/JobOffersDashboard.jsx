import React, { useState, useContext } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { toast } from 'react-toastify';
import SelectComponant from '../../SelectComponents/Select';
import Input from '../../Input/Input';
import Button from '../../Button/Button';
import { AppContext } from '../../../context/AppContext';
import ModalConfirm from '../../ModalConfirm';

const API_URL = process.env.REACT_APP_BACKEND_URL;

function jobOffersDashboard() {
  const [selectedValue, setSelectedValue] = useState({});
  const [modify, setModify] = useState(false);
  const [poste, setPoste] = useState('');
  const { jobOffers, setJobOffers } = useContext(AppContext);
  const [open, setOpen] = useState(false);

  const pushSelectedInFormik = (data) => {
    setModify(true);
    setPoste(data.poste);
    for (const [key, value] of Object.entries(data)) {
      formik.setFieldValue(`${key}`, value);
    }
  };

  const formik = useFormik({
    initialValues: {
      reference: selectedValue.reference ? selectedValue.reference : '',
      poste: selectedValue.poste ? selectedValue.poste : '',
      city: selectedValue.city ? selectedValue.city : '',
      description: selectedValue.description ? selectedValue.description : '',
    },
    onSubmit: (values, { resetForm }) => {
      axios
        .post(`${API_URL}/api/jobOffers/`, values)
        .then((res) => {
          setJobOffers([...jobOffers, res.data]);
          resetForm();
          toast.success("L'offre a bien été ajoutée");
        })
        .catch((err = console.error(err.message)));
    },
    enableReinitialize: true,
  });

  const handleDeleteJobs = async () => {
    await axios
      .delete(`${API_URL}/api/jobOffers/${formik.values.id}`)

      .then((response) => {
        if (response.status === 204) {
          setJobOffers(
            jobOffers.filter((jobOffer) => jobOffer.id !== formik.values.id)
          );
          setModify(false);
          formik.resetForm();
          toast.success("L'offre a bien été supprimée ");
        }
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  const handlemodifyJobs = async (e) => {
    e.preventDefault();

    await axios
      .put(`${API_URL}/api/jobOffers/${formik.values.id}`, formik.values)
      .then((response) => {
        if (response.status === 200) {
          setModify(false);
          toast.success("L'offre a bien été modifiée ");
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
        message={'Etes vous sur de vouloir supprimer cette offre?'}
        handleOpen={setOpen}
        isOpen={open}
        handleValid={handleDeleteJobs}
      />
      <div className="evenementDashboard-container">
        <div className="select-jobOffers">
          <h1 className="event-title">Offres d'embauche</h1>
          <div className="jobOffers-select">
            <p>Sélectionner un poste</p>
            <SelectComponant
              setValue={(data) => pushSelectedInFormik(data)}
              data={jobOffers}
              optionValue="poste"
            />
          </div>
        </div>
        <div className="events-Input">
          <b>Ajouter une offre:</b>
          <Input
            label="Référence"
            type="text"
            name="reference"
            id="reference"
            onChange={formik.handleChange}
            value={formik.values.reference}
          />
          <Input
            label="Poste"
            type="text"
            name="poste"
            id="poste"
            onChange={formik.handleChange}
            value={formik.values.poste}
          />
          <Input
            label="Lieu du poste"
            type="text"
            name="city"
            id="city"
            onChange={formik.handleChange}
            value={formik.values.city}
          />
          <Input
            label="Description"
            type="description"
            name="description"
            id="description"
            onChange={formik.handleChange}
            value={formik.values.description}
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
                    onClick={handlemodifyJobs}
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

export default jobOffersDashboard;
