import React from 'react';
import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';
import { BiUser } from 'react-icons/bi';

import './ForgotPw.css';

import Logo from '../../Logo/Logo';
import Input from '../../Input/Input';
import Button from '../../Button/Button';

function ForgotPw() {
  const formik = useFormik({
    initialValues: {
      email: '',
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
              <ul>
                <li>
                  <Input
                    label="Email"
                    type="email"
                    name="email"
                    id="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                </li>
              </ul>
              <div className="forgot-pw">
                <Button className="button-red" buttonName="Valider" />
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
