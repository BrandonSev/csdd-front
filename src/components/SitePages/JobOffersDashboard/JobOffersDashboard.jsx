import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import SelectComponant from '../../SelectComponents/Select';
import Input from '../../Input/Input';
import Button from '../../Button/Button';
import Dashboard from '../../Dashboard';
import DashboardMenu from '../../Dashboard/DashboardMenu';
import DashboardHeader from '../../Dashboard/DashboardHeader';
import DashboardBody from '../../Dashboard/DashboardBody';

function jobOffersDashboard() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
  });

  useEffect(() => {}, []);
  return (
    <Dashboard>
      <DashboardMenu />
      <DashboardHeader />
      <DashboardBody>
        <div className="evenementDashboard-container">
          <div className="select-jobOffers">
            <h1 className="event-title">Les offres d&#39;embauches</h1>
            <div className="jobOffers-select">
              <p>Séléctionner un Poste</p>
              <SelectComponant />
            </div>
          </div>
          <div className="events-Input">
            <h1>Ajouter une offre</h1>
            <Input
              label="Reference"
              type="Reference"
              name="Reference"
              id="Reference"
              onChange={formik.handleChange}
              value={formik.values.Reference}
            />
            <Input
              label="Poste"
              type="Poste"
              name="Poste"
              id="Poste"
              onChange={formik.handleChange}
              value={formik.values.poste}
            />
            <Input
              label="lieu du poste"
              type="lieu du poste"
              name="lieu du poste"
              id="lieu du poste"
              onChange={formik.handleChange}
              value={formik.values.Link}
            />
            <Input
              label="description"
              type="description"
              name="description"
              id="description"
              onChange={formik.handleChange}
              value={formik.values.Link}
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

export default jobOffersDashboard;
