import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';
import { BiUser } from 'react-icons/bi';

import './LoginPage.css';

import Logo from '../../Logo/Logo';
import Input from '../../Input/Input';
import Button from '../../Button/Button';

/* Utilisation du hook `useFormik` pour créer le formulaire */
function LoginPage() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
  });

  useEffect(() => {}, []);
  return (
    <>
      <Logo />
      <div className="container-form-register">
        <div className="left">
          <NavLink to="/Register" className="button-yellow" type="button">
            Demander un accès
          </NavLink>
        </div>
        <div className="formulaire-login-page">
          <div className="wrapper-connect-login-page">
            <h1>
              <BiUser /> Espace Membre
            </h1>
            <form onSubmit={formik.handleSubmit}>
              <Input
                label="Email"
                type="email"
                name="email"
                id="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              <Input
                label="Mot de passe"
                type="password"
                name="password"
                id="password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              <div className="login-connection">
                <Button className="button-yellow" buttonName="Connexion" />
              </div>
              <NavLink to="/password">
                <p>Mot de passe oublié ?</p>
              </NavLink>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
