import React from 'react';
import './UserDashboard.css';
import Dashboard from '../../Dashboard';
import DashboardMenu from '../../Dashboard/DashboardMenu';
import DashboardHeader from '../../Dashboard/DashboardHeader';
import DashboardBody from '../../Dashboard/DashboardBody';
import Button from '../../Button/Button';
import Input from '../../Input/Input';
import { useFormik } from 'formik';
import axios from 'axios';
import { toast } from 'react-toastify';
import SelectComponant from '../../SelectComponents/Select';
import moment from 'moment';
import { useContext } from 'react';
import { AppContext } from '../../../context/AppContext';

function UserDashboard() {
  const { provinces, adoptionPlace, rooms, receptionPlace } =
    useContext(AppContext);

  const userSearchForm = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      birthday: '',
    },
    onSubmit: async (values, { resetForm }) => {
      await axios
        .get(
          `${process.env.REACT_APP_BACKEND_URL}/api/users?firstname=${values.firstname}&lastname=${values.lastname}`,
          {
            validateStatus: (status) => {
              return status >= 200 && status <= 404;
            },
          }
        )
        .then((res) => {
          if (res.status === 200) {
            for (const [key, value] of Object.entries(res.data[0])) {
              userInfoForm.setFieldValue(`${key}`, value);
            }
            resetForm();
            return toast.success(
              `Vous avez maintenant acccès au compte de ${res.data[0].firstname}`
            );
          }
          if (res.status === 404) {
            return toast.error("Aucun utilisateur n'a été trouvé");
          }
          if (res.status === 400) {
            return toast.error(
              'Le prénom et le nom sont requis pour effectuer une recherche'
            );
          }
        })
        .catch((err) => toast.error('Une erreur est survenue'));
    },
  });
  const userInfoForm = useFormik({
    initialValues: {
      id: '',
      firstname: '',
      lastname: '',
      birthday: '',
      address: '',
      postal_code: '',
      city: '',
      email: '',
      phone: '',
      password: '',
      adoption_date: '',
      picture: '',
      cotisation_payed: '',
      active: '',
      province_id: '',
      reception_place_id: '',
      room_id: '',
      adoption_place_id: '',
      reception_date: '',
      roles: '',
    },
    onSubmit: (values, { resetForm }) => {
      axios
        .put(
          `${process.env.REACT_APP_BACKEND_URL}/api/users/${values.id}`,
          {
            ...values,
          },
          {
            withCredentials: true,
            validateStatus: (status) => {
              return status >= 200 && status <= 404;
            },
          }
        )
        .then((res) => {
          if (res.status === 200) {
            toast.success(res.data.message || 'Le compte a bien été modifié');
            resetForm();
          }
          if (res.status === 422) {
            toast('dsqdqsd');
          }
        })
        .catch((err) =>
          toast.error(
            "Une erreur est survenue lors de la modification de l'utilisateur"
          )
        );
    },
  });

  return (
    <Dashboard>
      <DashboardMenu active="user" />
      <DashboardHeader />
      <DashboardBody>
        <div className="dashboard-user-title">
          <h1>Utilisateur</h1>
          {userInfoForm.values.firstname && (
            <Button
              className="button-yellow"
              buttonName="Supprimer ce compte"
            />
          )}
        </div>
        <div className="dashboard-user-search">
          <div className="user-avatar">
            <img
              src="/assets/logo-detoure-noir.png"
              width={'20%'}
              alt="avatar"
            />
          </div>
          <div className="search-wrapper">
            <Input
              label="Prénom"
              name="firstname"
              value={userSearchForm.values.firstname}
              onChange={userSearchForm.handleChange}
            />
            <Input
              label="Nom"
              name="lastname"
              onChange={userSearchForm.handleChange}
              value={userSearchForm.values.lastname}
            />
            <Input
              type="date"
              label="Date de naissance"
              name="birthday"
              onChange={userSearchForm.handleChange}
              value={userSearchForm.values.birthday}
            />
            <Button
              buttonName="Valider"
              className="button-red"
              onClick={userSearchForm.handleSubmit}
            />
          </div>
        </div>
        <div className="dashboard-user-content">
          <div className="info-perso">
            <div className="title">
              <h3>Données personnelles</h3>
              <div className="cotisation">
                {userInfoForm.values.firstname && (
                  <div className="cotisation-checkbox">
                    <label htmlFor="yes-no">Cotisation à jour: </label>
                    <div>
                      <Input
                        label="Oui"
                        name="yes-no"
                        type={'radio'}
                        checked={userInfoForm.values.cotisation_payed === 1}
                        onChange={() =>
                          userInfoForm.setFieldValue('cotisation_payed', 1)
                        }
                      />
                      <Input
                        label="Non"
                        name="yes-no"
                        type={'radio'}
                        checked={userInfoForm.values.cotisation_payed === 0}
                        onChange={() =>
                          userInfoForm.setFieldValue('cotisation_payed', 0)
                        }
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="form-info-perso">
              <Input
                label="Nom: "
                name="lastname"
                value={userInfoForm.values.lastname}
                onChange={userInfoForm.handleChange}
              />
              <Input
                label="Prénom: "
                name="firstname"
                value={userInfoForm.values.firstname}
                onChange={userInfoForm.handleChange}
              />
              <Input
                label="Date de naissance: "
                name="birthday"
                type="date"
                value={userInfoForm.values.birthday}
                onChange={userInfoForm.handleChange}
              />
              <Input
                label="Adresse: "
                name="address"
                value={userInfoForm.values.address}
                onChange={userInfoForm.handleChange}
              />
              <Input
                label="Code postal: "
                name="postal_code"
                value={userInfoForm.values.postal_code}
                onChange={userInfoForm.handleChange}
              />
              <Input
                label="Ville: "
                name="city"
                value={userInfoForm.values.city}
                onChange={userInfoForm.handleChange}
              />
              <Input
                label="Email: "
                name="email"
                value={userInfoForm.values.email}
                onChange={userInfoForm.handleChange}
              />
              <Input
                label="Téléphone: "
                name="phone"
                value={userInfoForm.values.phone}
                onChange={userInfoForm.handleChange}
              />
            </div>
          </div>
          <div className="info-corpo">
            <div className="title">
              <h3>Données de corporation</h3>
            </div>
            <div className="form-info-corpo">
              <SelectComponant
                data={provinces}
                optionValue="name"
                setValue={(value) => {
                  userInfoForm.setFieldValue('province_id', value.id);
                }}
                disabled={!userInfoForm.values.province_id}
                defaultValue={userInfoForm.values.province_id}
                label="Nom de province:"
              />
              <SelectComponant
                data={adoptionPlace}
                optionValue="name"
                setValue={(value) => {
                  userInfoForm.setFieldValue('adoption_place_id', value.id);
                }}
                disabled={!userInfoForm.values.adoption_place_id}
                defaultValue={userInfoForm.values.adoption_place_id}
                label="Lieu d'adoption:"
              />
              <Input
                label="Date d'adoption"
                name="adoption_date"
                type="date"
                disabled={!userInfoForm.values.adoption_date}
                value={userInfoForm.values.adoption_date}
                onChange={userInfoForm.handleChange}
              />
              <SelectComponant
                data={rooms}
                optionValue="name"
                setValue={(value) => {
                  userInfoForm.setFieldValue('room_id', value.id);
                }}
                disabled={!userInfoForm.values.room_id}
                defaultValue={userInfoForm.values.room_id}
                label="Chambre:"
              />
              <SelectComponant
                data={receptionPlace}
                optionValue="name"
                setValue={(value) => {
                  userInfoForm.setFieldValue('reception_place_id', value.id);
                }}
                disabled={!userInfoForm.values.reception_place_id}
                defaultValue={userInfoForm.values.reception_place_id}
                label="Lieu de réception:"
              />
              <Input
                label="Date de réception"
                name="reception_date"
                type="date"
                disabled={userInfoForm.values.reception_date === ''}
                value={
                  userInfoForm.values.reception_date
                    ? moment(userInfoForm.values.reception_date).format(
                        'DD/MM/YYYY'
                      )
                    : userInfoForm.values.reception_date
                }
                onChange={userInfoForm.handleChange}
              />
              <Button
                buttonName="Valider"
                className="button-red"
                onClick={userInfoForm.handleSubmit}
                disabled={!userInfoForm.values.firstname}
              />
            </div>
          </div>
        </div>
      </DashboardBody>
    </Dashboard>
  );
}

export default UserDashboard;
