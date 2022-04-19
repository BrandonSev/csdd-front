import React, { useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { FiUser, RiGitRepositoryPrivateFill } from 'react-icons/all';
import Logout from '../Logout';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user } = useContext(AppContext);
  const handleClick = () => {
    setOpen(false);
  };

  return (
    <div className="container navbar">
      <div style={{ padding: '2rem 1rem' }}>
        <div className="wrapper-navbar">
          <div className="navbar-logo">
            <NavLink
              to="/home"
              className={({ isActive }) => (isActive ? '' : '')}
              onClick={handleClick}
            >
              <img
                src="/assets/logo-detoure-noir.png"
                alt="logo detoure noir"
                width={50}
              />
            </NavLink>
          </div>
          <ul className="navbar-menu">
            <li>
              <NavLink to="/vie-de-la-corpo">Vie de la corporation</NavLink>
            </li>
            <li>
              <NavLink to="/memoire">Mémoire</NavLink>
            </li>
            <li>
              <NavLink to="/formation">Formation</NavLink>
            </li>
            <li>
              <NavLink to="/commission">Commission des rîtes</NavLink>
            </li>
          </ul>
          <div
            className="avatar-logo"
            onClick={handleClick}
            onKeyUp={handleClick}
          >
            {user?.roles?.includes('admin') && (
              <NavLink to="/dashboard/utilisateurs">
                <RiGitRepositoryPrivateFill size={20} />
                <span style={{}}>Espace privé</span>
              </NavLink>
            )}
            <NavLink to="/mon-compte">
              <FiUser size={20} />
              <span style={{}}>{`${user?.firstname}`}</span>
            </NavLink>
            <Logout />
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
            <NavLink to="/vie-de-la-corpo" onClick={handleClick}>
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
            <NavLink to="/commission" onClick={handleClick}>
              Commission de rîtes
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
