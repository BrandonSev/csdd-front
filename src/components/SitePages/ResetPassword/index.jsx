import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react';
import { BiUser } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import Button from '../../Button/Button';
import Input from '../../Input/Input';
import Logo from '../../Logo/Logo';

const API_URL = process.env.REACT_APP_BACKEND_URL;

function ResetPassword() {
  const { id, token } = useParams();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    onSubmit: (values, { resetForm }) => {
      axios
        .post(`${API_URL}/api/auth/reset-password/${id}/${token}`, {
          ...values,
        })
        .then(() => {
          navigate('/login');
          toast.success('Votre mot de passe a bien été modifié');
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
              <BiUser /> Réinitialisation de votre mot de passe
            </h1>
            <div className="form-flex">
              <Input
                label="Mot de passe:"
                type="password"
                name="password"
                id="password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              <Input
                label="Confirmer mot de passe"
                type="password"
                name="confirmPassword"
                id="password"
                onChange={formik.handleChange}
                value={formik.values.confirmPassword}
              />

              <div className="forgot-pw">
                <Button
                  className="button-red"
                  buttonName="Valider"
                  onClick={formik.handleSubmit}
                />
              </div>
            </div>
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

export default ResetPassword;
