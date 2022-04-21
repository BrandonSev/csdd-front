import { NavLink, useNavigate } from 'react-router-dom';
import React, { useEffect, useContext } from 'react';
import { useFormik } from 'formik';
import { BiUser } from 'react-icons/bi';
import axios from 'axios';
import { toast } from 'react-toastify';
import { AppContext } from '../../../context/AppContext';
import './LoginPage.css';
import Logo from '../../Logo/Logo';
import Input from '../../Input/Input';
import Button from '../../Button/Button';

/* Utilisation du hook `useFormik` pour créer le formulaire */
function LoginPage() {
  const { setLoggedIn, setLoggedInAdmin } = useContext(AppContext);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values, { resetForm }) => {
      axios
        .post(`${process.env.REACT_APP_BACKEND_URL}/api/auth/login`, values, {
          withCredentials: true,
        })
        .then((res) => {
          setLoggedIn(true);
          if (res.data.user?.roles?.includes('admin')) {
            setLoggedInAdmin(true);
            navigate('/dashboard/message');
          } else {
            navigate('/home');
          }
          toast.success('Bravo, vous êtes maintenant connecté');
          resetForm();
        })
        .catch((err) =>
          toast.error(
            err.response.data.message ||
              'Une erreur est survenue lors de la connexion'
          )
        );
    },
  });

  useEffect(() => {}, []);
  return (
    <>
      <Logo />
      <div className="container-form-login">
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
            <form
              onSubmit={formik.handleSubmit}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  formik.handleSubmit();
                }
              }}
            >
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
                <Button
                  className="button-yellow"
                  buttonName="Connexion"
                  onClick={formik.handleSubmit}
                />
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
