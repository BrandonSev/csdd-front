import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';
import { BiUser } from 'react-icons/bi';

import './Register.css';

import axios from 'axios';
import { toast } from 'react-toastify';
import Logo from '../../Logo/Logo';
import Input from '../../Input/Input';
import Button from '../../Button/Button';
import SelectComponant from '../../SelectComponents/Select';

function Register() {
  const [provinces, setProvinces] = useState([]);
  const [adoptionPlaces, setAdoptionPlaces] = useState([]);
  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      birthday: '',
      address: '',
      postal_code: '',
      city: '',
      phone: '',
      email: '',
      password: '',
      confirmPassword: '',
      province_id: '',
      adoption_place_id: '',
      adoption_date: '',
    },
    onSubmit: (values, { resetForm }) => {
      if (values.password !== values.confirmPassword) {
        return toast.error('Les mot de passe ne correspondent pas.');
      }
      axios
        .post(`${process.env.REACT_APP_BACKEND_URL}/api/users`, values)
        .then((res) => {
          toast.success(
            "Votre demande à bien été enregistrer, votre compte est en cours de validation, vous serez avertis par mail lors de l'activation de votre compte"
          );
          resetForm();
        })
        .catch((err) => toast.error('Une erreur est survenue'));
    },
  });

  useEffect(() => {
    (async () => {
      axios.all([
        axios
          .get(`${process.env.REACT_APP_BACKEND_URL}/api/province`)
          .then((res) => setProvinces(res.data))
          .catch((err) =>
            toast.error(
              'Une erreur est survenue lors de la récupération des provinces'
            )
          ),
        axios
          .get(`${process.env.REACT_APP_BACKEND_URL}/api/adoptionPlace`)
          .then((res) => setAdoptionPlaces(res.data))
          .catch((err) =>
            toast.error(
              "Une erreur est survenue lors de la récupération des lieux d'adoption"
            )
          ),
      ]);
    })();
  }, []);

  return (
    <>
      <Logo />
      <div className="container-form-register">
        <div className="formulaire-register">
          <div className="wrapper-register">
            <h1>
              <BiUser /> Demande d&#39;accès
            </h1>
            <form onSubmit={formik.handleSubmit}>
              <ul className="grid-form-register">
                <li className="grid-li-firstname">
                  <Input
                    label="Prénom :"
                    type="text"
                    name="firstname"
                    className="firstname"
                    id="firstname"
                    onChange={formik.handleChange}
                    value={formik.values.firstname}
                  />
                </li>
                <li className="grid-li-lastname">
                  <Input
                    label="Nom :"
                    type="text"
                    name="lastname"
                    className="lastname"
                    id="lastname"
                    onChange={formik.handleChange}
                    value={formik.values.lastname}
                  />
                </li>
                <li className="grid-li-birth-date">
                  <Input
                    label="Date de naissance :"
                    type="date"
                    name="birthday"
                    id="birth-date"
                    onChange={formik.handleChange}
                    value={formik.values.birthday}
                  />
                </li>
                <li className="grid-li-adress">
                  <Input
                    label="Adresse :"
                    type="text"
                    name="address"
                    className="address"
                    id="address"
                    onChange={formik.handleChange}
                    value={formik.values.address}
                  />
                </li>
                <li className="grid-li-postal-code">
                  <Input
                    label="Code postal :"
                    type="number"
                    name="postal_code"
                    id="postal-code"
                    onChange={formik.handleChange}
                    value={formik.values.postal_code}
                  />
                </li>
                <li className="grid-li-city">
                  <Input
                    label="Ville :"
                    type="text"
                    name="city"
                    className="city"
                    id="city"
                    onChange={formik.handleChange}
                    value={formik.values.city}
                  />
                </li>
                <li className="grid-li-phone-number">
                  <Input
                    label="Numéro de téléphone :"
                    type="tel"
                    name="phone"
                    id="phone-number"
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                  />
                </li>
                <li className="grid-li-email">
                  <Input
                    label="Email :"
                    type="email"
                    name="email"
                    id="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                </li>
                <li className="grid-li-password">
                  <Input
                    label="Mot de passe :"
                    type="password"
                    name="password"
                    id="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />
                </li>
                <li className="grid-li-confirm-password">
                  <Input
                    label="Confirmer mot de passe :"
                    type="password"
                    name="confirmPassword"
                    id="confirm-password"
                    onChange={formik.handleChange}
                    value={formik.values.confirmPassword}
                  />
                </li>
                <li className="grid-li-province-name">
                  <SelectComponant
                    data={provinces}
                    optionValue="name"
                    setValue={(value) => {
                      formik.setFieldValue('province_id', value.id);
                    }}
                    defaultValue={formik.values.province_id}
                    label="Nom de Province :"
                  />
                </li>
                <li className="grid-li-adoption-place">
                  <SelectComponant
                    data={adoptionPlaces}
                    optionValue="name"
                    setValue={(value) => {
                      formik.setFieldValue('adoption_place_id', value.id);
                    }}
                    defaultValue={formik.values.adoption_place_id}
                    label="Lieu d'adoption :"
                  />
                </li>
                <li className="grid-li-adoption-date">
                  <Input
                    label="Date d'adoption :"
                    type="date"
                    name="adoption_date"
                    id="adoption-date"
                    onChange={formik.handleChange}
                    value={formik.values.adoption_date}
                  />
                </li>
              </ul>
              <div className="register">
                <Button
                  className="button-yellow"
                  buttonName="Demander un accès"
                  onClick={formik.handleSubmit}
                />
              </div>
            </form>
          </div>
        </div>
        <div className="right">
          <NavLink to="/login" className="button-yellow">
            Connexion
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Register;
