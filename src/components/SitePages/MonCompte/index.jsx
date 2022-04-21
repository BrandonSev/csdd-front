import React, { useState, useContext } from 'react';
import './MonCompte.css';
import { useFormik } from 'formik';
import moment from 'moment';
import axios from 'axios';
import { toast } from 'react-toastify';
import SelectComponant from '../../SelectComponents/Select';
import Button from '../../Button/Button';
import Input from '../../Input/Input';
import { AppContext } from '../../../context/AppContext';

const MonCompte = () => {
  const { provinces, adoptionPlace, rooms, receptionPlace, user, setUser } =
    useContext(AppContext);
  const [open, setOpen] = useState(false);
  const formik = useFormik({
    initialValues: {
      id: user?.id,
      firstname: user?.firstname,
      lastname: user?.lastname,
      birthday: moment(user?.birthday).format('YYYY-MM-DD'),
      address: user?.address,
      postal_code: user?.postal_code,
      city: user?.city,
      email: user?.email,
      phone: user?.phone,
      password: '',
      adoption_date: moment(user?.adoption_date).format('YYYY-MM-DD'),
      picture: user?.picture,
      cotisation_payed: user?.cotisation_payed,
      active: user?.active,
      status_id: user?.status_id,
      province_id: user?.province_id,
      reception_place_id: user?.reception_place_id,
      room_id: user?.room_id,
      adoption_place_id: user?.adoption_place_id,
      reception_date: moment(user?.reception_date).format('YYYY-MM-DD'),
    },
    enableReinitialize: true,
    onSubmit: (values, { resetForm }) => {
      axios
        .put(
          `${process.env.REACT_APP_BACKEND_URL}/api/users/${user.id}`,
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
            setUser(res.data.user);
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
  const passwordForm = useFormik({
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    onSubmit: (values, { resetForm }) => {
      if (values.password !== values.confirmPassword) {
        return toast.error(
          'Les mots de passe ne correspondent pas, veuillez réesayer'
        );
      }
      axios
        .put(
          `${process.env.REACT_APP_BACKEND_URL}/api/users/${user.id}`,
          {
            password: values.password,
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
            toast.success('Le mot de passe a bien été modifié');
            setUser(res.data.user);
          }
          if (res.status === 422) {
            toast.error(
              "Une erreur est survenue lors de la modification de l'utilisateur"
            );
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
    <div className="profil-page container">
      <div className="title">
        <h1>Page de profil</h1>
      </div>
      <div className="wrapper">
        <div className={`left-block ${open && 'open'}`}>
          <div className="avatar-image">
            <img
              src="assets/logo-detoure-noir.png"
              width={180}
              alt="avatar profil"
            />
          </div>
          <div className="user-info">
            <p>Roles: {user.roles}</p>
          </div>
          <button
            type="button"
            className="burger"
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
          </button>
        </div>
        <div className="right-block">
          <div className="wrapper-donnee-perso">
            <h3>Données personnelles</h3>
            <div className="donnee-perso">
              <Input
                label="Prénom : "
                name="firstname"
                className="firstname"
                value={formik.values.firstname}
                onChange={formik.handleChange}
                disabled
              />
              <Input
                label="Nom : "
                name="lastname"
                className="lastname"
                value={formik.values.lastname}
                onChange={formik.handleChange}
                disabled
              />
              <Input
                label="Date de naissance : "
                name="birthday"
                value={formik.values.birthday}
                type="date"
                onChange={formik.handleChange}
                disabled
              />
              <Input
                label="Adresse : "
                name="address"
                className="address"
                value={formik.values.address}
                onChange={formik.handleChange}
              />
              <Input
                label="Code postal : "
                name="postal_code"
                value={formik.values.postal_code}
                onChange={formik.handleChange}
              />
              <Input
                label="Ville : "
                name="city"
                className="city"
                value={formik.values.city}
                onChange={formik.handleChange}
              />
              <Input
                label="Email : "
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              <Input
                label="Téléphone : "
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
              />
            </div>
          </div>
          <div className="wrapper-corpo">
            <h3>Informations corporation</h3>
            <form className="info-corpo">
              <SelectComponant
                data={provinces}
                optionValue="name"
                setValue={(value) => {
                  formik.setFieldValue('province_id', value.id);
                }}
                disabled={!formik.values.province_id}
                defaultValue={formik.values.province_id}
                label="Nom de province :"
              />
              <SelectComponant
                data={adoptionPlace}
                optionValue="name"
                setValue={(value) => {
                  formik.setFieldValue('adoption_place_id', value.id);
                }}
                disabled={!formik.values.adoption_place_id}
                defaultValue={formik.values.adoption_place_id}
                label="Lieu d'adoption :"
              />
              <Input
                label="Date d'adoption :"
                name="adoption_date"
                type="date"
                disabled={!formik.values.adoption_date}
                value={formik.values.adoption_date}
                onChange={formik.handleChange}
              />
              <SelectComponant
                data={rooms}
                optionValue="name"
                setValue={(value) => {
                  formik.setFieldValue('room_id', value.id);
                }}
                disabled
                defaultValue={formik.values.room_id}
                label="Chambre :"
              />
              <SelectComponant
                data={receptionPlace}
                optionValue="name"
                setValue={(value) => {
                  formik.setFieldValue('reception_place_id', value.id);
                }}
                disabled
                defaultValue={formik.values.reception_place_id}
                label="Lieu de réception :"
              />
              <Input
                label="Date de réception :"
                name="reception_date"
                type="date"
                disabled
                value={formik.values.reception_date}
                onChange={formik.handleChange}
              />
              <Button
                className="button button-red w-100"
                buttonName="Valider"
                onClick={formik.handleSubmit}
              />
            </form>
          </div>
          <div className="wrapper-password">
            <h3>Mot de passe</h3>
            <form className="password">
              <Input
                label="Mot de passe : "
                type="password"
                name="password"
                value={passwordForm.values.password}
                onChange={passwordForm.handleChange}
              />
              <Input
                label="Confirmer : "
                type="password"
                name="confirmPassword"
                value={passwordForm.values.confirmPassword}
                onChange={passwordForm.handleChange}
              />
              <Button
                className="button button-red w-100"
                buttonName="Valider"
                onClick={passwordForm.handleSubmit}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonCompte;
