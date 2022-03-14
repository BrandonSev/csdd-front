import React, { useState } from 'react';
import './EspaceMembre.css';
import Input from '../Input';

function EspaceMembre() {
  const [state, setState] = useState({});
  return (
    <div>
      <div className="rectangle" />
      <div className="request-access">
        <div className="small-logo">
          <img src="./assets/logo_csdd_2021_detoure.png" alt="Logo CSDD" />
        </div>
        <button className="request-access-button" type="button">
          Demande d&#39;accés
        </button>
      </div>
      <div className="member-area">
        <h1>Espace Membre</h1>
        <Input
          label="Email"
          type="text"
          className="input-orange"
          name="email"
          value={state?.email}
          handleChange={(e) => setState({ ...state, email: e.target.value })}
        />
        <Input
          label="Password"
          type="text"
          className="input-orange"
          name="password"
          value={state?.password}
          handleChange={(e) => setState({ ...state, password: e.target.value })}
        />
        <button className="connexion-button" type="button">
          Connexion
        </button>
        <h6>Mot de passe oublié ?</h6>
      </div>
    </div>
  );
}

export default EspaceMembre;
