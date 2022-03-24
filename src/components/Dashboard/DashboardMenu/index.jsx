import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./DashboardMenu.css"

function DashboardMenu() {
  const [open, setOpen] = useState(false)

  return (
    <div className={`dashboard-menu ${open ? 'open' : ''}`}>
      <div className="dashboard-menu-logo">
        <img src="/assets/logo-detoure-blanc.png" width={140} alt="logo csdd" />
      </div>
      <ul className="dashboard-menu-list">
        <li>
          <NavLink to="">Utilisateurs</NavLink>
        </li>
        <li>
          <NavLink to="">Evenements</NavLink>
        </li>
        <li>
          <NavLink to="">Les offres d'embauches</NavLink>
        </li>
        <li>
          <NavLink to="">Informations compagnon</NavLink>
        </li>
        <li>
          <NavLink to="">Livres métiers</NavLink>
        </li>
        <li>
          <NavLink to="">Médias</NavLink>
        </li>
      </ul>
      <div className="burger-wrapper">
        <button onClick={() => setOpen(!open)} className={`burger ${open ? 'open' : ''}`}>
        <span />
        <span />
      </button>
      </div>
    </div>
  )
}

export default DashboardMenu