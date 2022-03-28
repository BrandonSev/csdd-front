import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './DashboardMenu.css';

function DashboardMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className={`dashboard-menu ${open ? 'open' : ''}`}>
      <div className="dashboard-menu-logo">
        <img src="/assets/logo-detoure-blanc.png" width={140} alt="logo csdd" />
      </div>
      <ul className="dashboard-menu-list">
        <li>
          <NavLink to="/dashboard/utilisateurs">Utilisateurs</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/evenements">Evenements</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/offre-embauche">
            Les offres d'embauches
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/compagnon">Informations compagnon</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/metiers">Livres métiers</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/medias">Médias</NavLink>
        </li>
      </ul>
      <div className="burger-wrapper">
        <button
          onClick={() => setOpen(!open)}
          className={`burger ${open ? 'open' : ''}`}
          type="button"
        >
          <span />
          <span />
        </button>
      </div>
    </div>
  );
}

export default DashboardMenu;
