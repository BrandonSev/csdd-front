import React from 'react';
import { BiUser } from 'react-icons/bi';

import './AccessRequest.css';

import Logo from '../../DashboardComposants/Logo/Logo';
import Input from '../../DashboardComposants/Input/Input';
import Button from '../../DashboardComposants/Button/Button';

function AccessRequest() {
  return (
    <>
      <Logo />
      <div className="container-form-access-member">
        <div className="formulaire-access-request">
          <div className="wrapper-access-request">
            <h1>
              <BiUser /> Demande d&#39;accès
            </h1>
            <div className="input1">
              <Input label="Prénom" className />
              <Input label="NOM" />
            </div>
            <Button className="access-request" buttonName="Demander un accès" />
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
