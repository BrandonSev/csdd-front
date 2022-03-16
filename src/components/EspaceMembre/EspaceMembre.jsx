import React, { useState } from 'react';
import './EspaceMembre.css';

import Logo from '../Logo/Logo';
import Button from '../Button/Button';

function EspaceMembre() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = '';
  return (
    <>
      <Logo />
      <div className="container-form-access-member">
        <div className="left">
          <Button className="access" buttonName="Demande d&#39;accès" />
        </div>
        <div className="formulaire">
          <div className="wrapper-connect">
            <h1>Espace Membre</h1>
            <form>
              <label htmlFor="email" className="email">
                Email
                <input
                  type="email"
                  name="email"
                  id="email"
                  pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                  placeholder="Entrer votre email de connexion"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label htmlFor="password" className="password">
                Password
                <input
                  type="password"
                  name="password"
                  id="password"
                  minLength="10"
                  placeholder="Entrer votre mot de passe de connexion"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
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
