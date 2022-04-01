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

const API_URL = process.env.REACT_APP_BACKEND_URL;

function jobOffersDashboard() {
  const [jobOffers, setJobOffers] = useState([]);
  const [selectedValue, setSelectedValue] = useState({});
  const [isSelected, setIsSelected] = useState({});

  const formik = useFormik({
    initialValues: {
      reference: selectedValue.reference ? selectedValue.reference : '',
      poste: selectedValue.poste ? selectedValue.poste : '',
      city: selectedValue.city ? selectedValue.city : '',
      description: selectedValue.description ? selectedValue.description : '',
    },
    onSubmit: (values, { resetForm }) => {
      const bodyFormData = new FormData();
      bodyFormData.append(
        'data',
        JSON.stringify({
          ...values,
        })
      );
      bodyFormData.append('assets', values.poste);
      axios
        .post(`${API_URL}/api/jobOffers/`, bodyFormData)
        .then((data) => {
          resetForm;
        })
        .catch((err = console.error(err.message)));
    },
    enableReinitialize: true,
  });

  useEffect(() => {
    (async () => {
      await axios
        .get(`${API_URL}/api/jobOffers/`)
        .then((response) => response.data)
        .then((data) => {
          setJobOffers(data);
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
          <div className="select-jobOffers">
            <h1 className="event-title">Offres d'embauche</h1>
            <div className="jobOffers-select">
              <p>Sélectionner un poste</p>
              <SelectComponant
                setValue={setSelectedValue}
                data={jobOffers}
                optionValue="reference"
              />
            </div>
          </div>
          <div className="events-Input">
            <b>Ajouter une offre:</b>
            <Input
              label="Référence"
              type="text"
              name="Reference"
              id="Reference"
              value={formik.values.reference}
            />
            <Input
              label="Poste"
              type="text"
              name="Poste"
              id="Poste"
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

export default jobOffersDashboard;
