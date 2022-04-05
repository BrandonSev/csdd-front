import React from 'react';
import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { BiUser } from 'react-icons/bi';
import axios from 'axios';

import './ForgotPw.css';

import Logo from '../../Logo/Logo';
import Input from '../../Input/Input';
import Button from '../../Button/Button';
import { toast } from 'react-toastify';

const API_URL = process.env.REACT_APP_BACKEND_URL;

function ForgotPw() {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("L'adresse email fournie n'est pas valide")
        .required('Le champs est obligatoire'),
    }),
    onSubmit: (values, { resetForm }) => {
      axios
        .post(`${API_URL}/api/auth/forgot-password`, { ...values })
        .then(() => {
          toast.success(
            'Un lien de réinitialisation vient de vous être envoyé'
          );
          resetForm();
        })
        .catch((err) => {
          toast.error(
            err.response.data.message ||
              'Une erreur est survenue lors de la demande de réinitialisation'
          );
        });
    },
  });

  return (
    <>
      <Logo />
      <div className="container-form-forgot-pw">
        <div className="formulaire-forgot-pw">
          <div className="wrapper-forgot-pw">
            <h1>
              <BiUser /> Mot de passe oublié ?
            </h1>
            <form className="form-flex" onSubmit={formik.handleSubmit}>
              <Input
                label="Email"
                type="email"
                name="email"
                id="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
              ) : null}
              <div className="forgot-pw">
                <Button className="button-red" buttonName="Valider" submit />
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

export default ForgotPw;
