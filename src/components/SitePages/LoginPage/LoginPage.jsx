import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { BiUser } from 'react-icons/bi';

import './LoginPage.css';

import Logo from '../../Logo/Logo';
import Input from '../../Input/Input';
import Button from '../../Button/Button';

function LoginPage() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    // onSubmit: (values) => {
    //   alert(JSON.stringify(values, null, 2));
    // },
  });

  useEffect(() => {}, []);
  return (
    <>
      <Logo />
      <div className="container-form-register">
        <div className="left">
          <Button className="login-register" buttonName="Demande d&#39;accès" />
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
              <Button className="login-connection" buttonName="Connexion" />
              <p>Mot de passe oublié ?</p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
