import React from 'react';
import { useFormik } from 'formik';
import { BiUser } from 'react-icons/bi';

import './AccessRequest.css';

import Logo from '../../DashboardComposants/Logo/Logo';
import Input from '../../DashboardComposants/Input/Input';
import Button from '../../DashboardComposants/Button/Button';

function AccessRequest() {
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
    // onSubmit: (values) => {
    //   alert(JSON.stringify(values, null, 2));
    // },
  });

  return (
    <>
      <Logo />
      <div className="container-form-access-member">
        <div className="formulaire-access-request">
          <div className="wrapper-access-request">
            <h1>
              <BiUser /> Demande d&#39;accès
            </h1>
            <form onSubmit={formik.handleSubmit}>
              <ul className="grid-form-access-request">
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
                    label="Confirmation mot de passe"
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
                    onChange={formik.handleChange}
                    value={formik.values.receptionDate}
                  />
                </li>
              </ul>
              <div className="button-corporate-data">
                <Button
                  className="corporate-data"
                  buttonName="Données corporation"
                />
              </div>
              <Button
                className="access-request"
                buttonName="Demander un accès"
              />
            </form>
          </div>
        </div>
        <div className="right">
          <Button className="connection" buttonName="Connexion" />
        </div>
      </div>
    </>
  );
}

export default AccessRequest;
