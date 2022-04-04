import React from 'react';
import './DashboardHeader.css';
import Logout from '../../Logout';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../../../context/AppContext';
import { BsArrowLeftCircle } from 'react-icons/bs';

function DashboardHeader() {
  const { user } = useContext(AppContext);
  return (
    <div className="dashboard-header">
      <div>
        <NavLink
          to="/home"
          style={{ display: 'flex', alignItems: 'center', gap: '0 1rem' }}
        >
          <span>
            <BsArrowLeftCircle />
          </span>
          <span>Visiter le site web public</span>
        </NavLink>
      </div>
      <div>
        Bonjour, {user?.firstname}
        <span style={{ marginLeft: '1rem' }}>
          <Logout />
        </span>
      </div>
    </div>
  );
}

export default DashboardHeader;
