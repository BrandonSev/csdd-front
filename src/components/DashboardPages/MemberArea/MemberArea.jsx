import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { BiUser } from 'react-icons/bi';

import './MemberArea.css';

import Logo from '../../DashboardComposants/Logo/Logo';
import Input from '../../DashboardComposants/Input/Input';
import Button from '../../DashboardComposants/Button/Button';

function EspaceMembre() {
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
      <div className="container-form-access-member">
        <div className="left">
          <Button className="access-request" buttonName="Demande d&#39;accès" />
        </div>
        <div className="formulaire-member-area">
          <div className="wrapper-connect-member-area">
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
              <Button className="connection" buttonName="Connexion" />
              <p>Mot de passe oublié ?</p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default EspaceMembre;
