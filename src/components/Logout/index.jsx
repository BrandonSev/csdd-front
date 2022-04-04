import axios from 'axios';
import React from 'react';
import { useContext } from 'react';
import { FiLogOut } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AppContext } from '../../context/AppContext';

function Logout() {
  const { setUser, setLoggedIn, setLoggedInAdmin } = useContext(AppContext);
  const navigate = useNavigate();
  const handleClick = () => {
    axios
      .post(
        `${process.env.REACT_APP_BACKEND_URL}/api/auth/logout`,
        {},
        {
          withCredentials: true,
          validateStatus: (status) => {
            return status >= 200 && status <= 404;
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          setUser(null);
          setLoggedIn(false);
          setLoggedInAdmin(false);
          toast.success('Vous êtes maintenant déconnecté');
          navigate('/');
        }
      })
      .catch((err) =>
        toast.error('Une erreur est survenue lors de la déconnexion')
      );
  };
  return (
    <div onClick={handleClick} style={{ cursor: 'pointer' }}>
      <FiLogOut size={20} />
    </div>
  );
}

export default Logout;
