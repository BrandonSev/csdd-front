import React, { useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="container navbar">
      <div style={{ padding: '2rem 1rem' }}>
        <div className="wrapper-navbar">
          <div className="navbar-logo">
            <img
              src="assets/logo-detoure-noir.png"
              alt="logo detoure noir"
              width={80}
            />
          </div>
          <ul className="navbar-menu">
            <li>
              <NavLink to="/memoire">Vie de la corporation</NavLink>
            </li>
            <li>
              <NavLink to="/memoire">Memoire</NavLink>
            </li>
            <li>
              <NavLink to="/memoire">Formation</NavLink>
            </li>
            <li>
              <NavLink to="/memoire">Commission de rîtes</NavLink>
            </li>
            <li>
              <NavLink to="/memoire">Forum</NavLink>
            </li>
          </ul>
          <div className="avatar-logo">
            <img
              src="assets/logo-detoure-noir.png"
              alt="logo detoure noir"
              width={24}
            />
          </div>
          <button
            type="button"
            className="burger"
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
            <NavLink to="/memoire">Vie de la corporation</NavLink>
          </li>
          <li>
            <NavLink to="/memoire">Memoire</NavLink>
          </li>
          <li>
            <NavLink to="/memoire">Formation</NavLink>
          </li>
          <li>
            <NavLink to="/memoire">Commission de rîtes</NavLink>
          </li>
          <li>
            <NavLink to="/memoire">Forum</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
