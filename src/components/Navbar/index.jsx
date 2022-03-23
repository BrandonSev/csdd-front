import React, { useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { FiUser } from 'react-icons/all';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(false);
  };

  return (
    <div className="container navbar">
      <div style={{ padding: '2rem 1rem' }}>
        <div className="wrapper-navbar">
          <div className="navbar-logo">
            <NavLink to="/home">
              <img
                src="assets/logo-detoure-noir.png"
                alt="logo detoure noir"
                width={50}
              />
            </NavLink>
          </div>
          <ul className="navbar-menu">
            <li>
              <NavLink to="/memoire">Vie de la corporation</NavLink>
            </li>
            <li>
              <NavLink to="/memoire">Memoire</NavLink>
            </li>
            <li>
              <NavLink to="/formation">Formation</NavLink>
            </li>
            <li>
              <NavLink to="/commission">Commission de rîtes</NavLink>
            </li>
          </ul>
          <div className="avatar-logo">
            <NavLink to="/mon-compte">
              <FiUser size={20} />
            </NavLink>
          </div>
          <button
            type="button"
            className={`burger ${open ? 'open' : ''}`}
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
      <div className={`navbar-wrapper-mobile ${open ? 'open' : ''}`}>
        <ul className={`navbar-mobile ${open ? 'open' : ''}`}>
          <li>
            <NavLink to="/memoire" onClick={handleClick}>
              Vie de la corporation
            </NavLink>
          </li>
          <li>
            <NavLink to="/memoire" onClick={handleClick}>
              Memoire
            </NavLink>
          </li>
          <li>
            <NavLink to="/formation" onClick={handleClick}>
              Formation
            </NavLink>
          </li>
          <li>
            <NavLink to="/comission" onClick={handleClick}>
              Commission de rîtes
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
