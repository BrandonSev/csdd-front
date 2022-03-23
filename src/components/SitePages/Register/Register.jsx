import React from 'react';
import { useFormik } from 'formik';
import { BiUser } from 'react-icons/bi';

import './Register.css';

import Logo from '../../Logo/Logo';
import Input from '../../Input/Input';
import Button from '../../Button/Button';

function Register() {
  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      birthDate: '',
      adress: '',
      postalCode: '',
      city: '',
      phoneNumber: '',
      email: '',
      password: '',
      confirmPassword: '',
      provinceName: '',
      adoptionPlace: '',
      adoptionDate: '',
      room: '',
      receptionPlace: '',
      receptionDate: '',
    },
  });

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
                    label="Prénom"
                    type="text"
                    name="firstname"
                    id="firstname"
                    onChange={formik.handleChange}
                    value={formik.values.firstname}
                  />
                </li>
                <li className="grid-li-lastname">
                  <Input
                    label="NOM"
                    type="text"
                    name="lastname"
                    id="lastname"
                    onChange={formik.handleChange}
                    value={formik.values.lastname}
                  />
                </li>
                <li className="grid-li-birth-date">
                  <Input
                    label="Date de naissance"
                    type="date"
                    name="birth-date"
                    id="birth-date"
                    onChange={formik.handleChange}
                    value={formik.values.birthDate}
                  />
                </li>
                <li className="grid-li-adress">
                  <Input
                    label="Adresse"
                    type="text"
                    name="adress"
                    id="adress"
                    onChange={formik.handleChange}
                    value={formik.values.adress}
                  />
                </li>
                <li className="grid-li-postal-code">
                  <Input
                    label="Code postal"
                    type="number"
                    name="postal-code"
                    id="postal-code"
                    onChange={formik.handleChange}
                    value={formik.values.postalCode}
                  />
                </li>
                <li className="grid-li-city">
                  <Input
                    label="Ville"
                    type="text"
                    name="city"
                    id="city"
                    onChange={formik.handleChange}
                    value={formik.values.city}
                  />
                </li>
                <li className="grid-li-phone-number">
                  <Input
                    label="Numéro de téléphone"
                    type="tel"
                    name="phone-number"
                    id="phone-number"
                    onChange={formik.handleChange}
                    value={formik.values.phoneNumber}
                  />
                </li>
                <li className="grid-li-email">
                  <Input
                    label="Email"
                    type="email"
                    name="email"
                    id="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                </li>
                <li className="grid-li-password">
                  <Input
                    label="Mot de passe"
                    type="password"
                    name="password"
                    id="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />
                </li>
                <li className="grid-li-confirm-password">
                  <Input
                    label="Confirmer mot de passe"
                    type="password"
                    name="confirm-password"
                    id="confirm-password"
                    onChange={formik.handleChange}
                    value={formik.values.confirmPassword}
                  />
                </li>
                <li className="grid-li-province-name">
                  <Input
                    label="Nom de Province"
                    type="text"
                    name="province-name"
                    id="province-name"
                    onChange={formik.handleChange}
                    value={formik.values.provinceName}
                  />
                </li>
                <li className="grid-li-adoption-place">
                  <Input
                    label="Lieu d'adoption"
                    type="text"
                    name="adoption-place"
                    id="adoption-place"
                    onChange={formik.handleChange}
                    value={formik.values.adoptionPlace}
                  />
                </li>
                <li className="grid-li-adoption-date">
                  <Input
                    label="Date d'adoption"
                    type="date"
                    name="adoption-date"
                    id="adoption-date"
                    onChange={formik.handleChange}
                    value={formik.values.adoptionDate}
                  />
                </li>
                <li className="grid-li-room">
                  <Input
                    label="Chambre"
                    type="text"
                    name="room"
                    id="room"
                    disabled="disabled"
                    onChange={formik.handleChange}
                    value={formik.values.room}
                  />
                </li>
                <li className="grid-li-reception-place">
                  <Input
                    label="Lieu de réception"
                    type="text"
                    name="reception-place"
                    id="reception-place"
                    disabled="disabled"
                    onChange={formik.handleChange}
                    value={formik.values.receptionPlace}
                  />
                </li>
                <li className="grid-li-reception-date">
                  <Input
                    label="Date de réception"
                    type="date"
                    name="reception-date"
                    id="reception-date"
                    disabled="disabled"
                    onChange={formik.handleChange}
                    value={formik.values.receptionDate}
                  />
                </li>
              </ul>
              <div className="corporate-data">
                <Button
                  className="button-red"
                  buttonName="Données corporation"
                />
              </div>
              <div className="register">
                <Button
                  className="button-yellow"
                  buttonName="Demander un accès"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="right">
          <Button className="button-yellow" buttonName="Connexion" />
        </div>
      </div>
    </>
  );
}

export default Register;
