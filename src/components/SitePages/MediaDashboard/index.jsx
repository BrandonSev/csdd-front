import React, { useEffect } from 'react';
import { useState } from 'react';
import Button from '../../Button/Button';
import Dashboard from '../../Dashboard';
import DashboardBody from '../../Dashboard/DashboardBody';
import DashboardHeader from '../../Dashboard/DashboardHeader';
import DashboardMenu from '../../Dashboard/DashboardMenu';
import ModalConfirm from '../../ModalConfirm';
import SelectComponant from '../../SelectComponents/Select';
import './MediaDashboard.css';

function MediaDashboard() {
  const [modalConfirmOpen, setModalConfirmOpen] = useState(false);

  const handleRemoveMedia = async () => {};

  return (
    <Dashboard>
      <DashboardMenu />
      <DashboardHeader />
      <DashboardBody>
        <ModalConfirm
          isOpen={modalConfirmOpen}
          handleOpen={setModalConfirmOpen}
          message={'Etes vous sur de vouloir supprimer ce fichier'}
          handleValid={handleRemoveMedia}
        />
        <div className="media-dashboard">
          <div className="title">
            <h1>Médias</h1>
            <SelectComponant className="w-100" />
          </div>
          <div className="media-dashboard-body">
            <p>
              <b>Ajouter un média:</b>
            </p>
            <form className="form-media">
              <div className="form-group">
                <label htmlFor="file">Sélectionner un fichier</label>
                <input type="text" name="file" id="file" />
              </div>
              <div className="form-group">
                <label htmlFor="file">Localisation du fichier</label>
                <input type="text" name="file" id="file" />
              </div>
              <div className="form-group">
                <label htmlFor="file">Date du fichier</label>
                <input type="date" name="file" id="file" />
              </div>
              <div className="form-group">
                <label htmlFor="file">Date de mise a jour</label>
                <input name="file" id="file" value="22 Janvier 2022" />
              </div>
              <div>
                <p>Roles: </p> <br />
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
              <div className="form-group">
                <Button className="button-red" buttonName="Valider" />
              </div>
              <div className="button-action">
                <Button className="button-red" buttonName="Modifier" />
                <Button
                  className="button-red"
                  buttonName="Supprimer"
                  onClick={() => setModalConfirmOpen(true)}
                />
              </div>
            </form>
          </div>
        </div>
      </DashboardBody>
    </Dashboard>
  );
}

export default MediaDashboard;
