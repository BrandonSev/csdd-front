import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="container navbar">
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
            <NavLink to="/memoire" />
          </li>
          <li>
            <NavLink to="/memoire" />
          </li>
          <li>
            <NavLink to="/memoire" />
          </li>
          <li>
            <NavLink to="/memoire" />
          </li>
          <li>
            <NavLink to="/memoire" />
          </li>
        </ul>
        <div className="avatar-logo">
          <img
            src="assets/logo-detoure-noir.png"
            alt="logo detoure noir"
            width={24}
          />
        </div>
        <button type="button" className="burger">
          <span />
          <span />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
