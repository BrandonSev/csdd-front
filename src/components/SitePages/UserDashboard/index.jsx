import React, { useContext, useState, useEffect } from 'react';
import './UserDashboard.css';
import { useFormik } from 'formik';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FaUserAlt } from 'react-icons/fa';
import moment from 'moment';
import { useLocation } from 'react-router-dom';
import Button from '../../Button/Button';
import Input from '../../Input/Input';
import SelectComponant from '../../SelectComponents/Select';
import { AppContext } from '../../../context/AppContext';
import ModalConfirm from '../../ModalConfirm';

function UserDashboard() {
  const { state } = useLocation();
  const { provinces, adoptionPlace, rooms, receptionPlace, roles } =
    useContext(AppContext);
  const [open, setOpen] = useState(false);

  const userSearchForm = useFormik({
    initialValues: {
      firstname_search: '',
      lastname_search: '',
      birthday_search: '',
    },
    onSubmit: async (values, { resetForm }) => {
      await axios
        .get(
          `${process.env.REACT_APP_BACKEND_URL}/api/users?firstname=${values.firstname_search}&lastname=${values.lastname_search}&birthday=${values.birthday_search}`,
          {
            validateStatus: (status) => {
              return status >= 200 && status <= 404;
            },
          }
        )
        .then((res) => {
          if (res.status === 200) {
            if (res.data.length > 1) {
              return toast.error(
                'Plusieurs comptes ont été trouvés, veuillez affiner votre rechercher en renseignant la date de naissance'
              );
            }
            for (const [key, value] of Object.entries(res.data[0])) {
              const listDate = ['adoption_date', 'reception_date', 'birthday'];
              userInfoForm.setFieldValue(
                `${key}`,
                listDate.includes(`${key}`)
                  ? value
                    ? moment(value).format('YYYY-MM-DD')
                    : value
                  : value
              );
            }
            if (res.data[0].roles) {
              const array = [];
              res.data[0].roles.split(',').map((res) => {
                return roles.map((role) => {
                  if (res === role.name) {
                    array.push(role.id);
                  }
                });
              });
              userInfoForm.setFieldValue('rolesId', array);
            }
            resetForm();
            return toast.success(
              `Vous avez maintenant acccès au compte de ${res.data[0].firstname}`
            );
          }
          if (res.status === 404) {
            return toast.error("Aucun utilisateur n'a été trouvé");
          }
          if (res.status === 400) {
            return toast.error(
              'Le prénom et le nom sont requis pour effectuer une recherche'
            );
          }
        })
        .catch((err) => toast.error('Une erreur est survenue'));
    },
  });
  const userInfoForm = useFormik({
    initialValues: {
      id: '',
      firstname: '',
      lastname: '',
      birthday: '',
      address: '',
      postal_code: '',
      city: '',
      email: '',
      phone: '',
      adoption_date: '',
      picture: '',
      cotisation_payed: '',
      active: '',
      province_id: '',
      reception_place_id: '',
      room_id: '',
      adoption_place_id: '',
      reception_date: '',
      roles: '',
      rolesId: [],
    },
    onSubmit: (values, { resetForm }) => {
      axios
        .put(
          `${process.env.REACT_APP_BACKEND_URL}/api/users/${values.id}`,
          {
            ...values,
            roles: values.rolesId,
          },
          {
            withCredentials: true,
            validateStatus: (status) => {
              return status >= 200 && status <= 404;
            },
          }
        )
        .then((res) => {
          if (res.status === 200) {
            toast.success(res.data.message || 'Le compte a bien été modifié');
            resetForm();
          }
        })
        .catch((err) =>
          toast.error(
            err.response.data.message ||
              "Une erreur est survenue lors de la modification de l'utilisateur"
          )
        );
    },
  });

  const handleDelete = async () => {
    await axios
      .delete(
        `${process.env.REACT_APP_BACKEND_URL}/api/users/${userInfoForm.values.id}`
      )
      .then((res) => {
        if (res.status === 204) {
          userInfoForm.resetForm();
          toast.success('Le compte a bien été supprimé');
        }
      })
      .catch((err) => {
        toast.error(
          err.response.data.message ||
            'Une erreur est survenue lors de la suppression du compte'
        );
      });
  };
  useEffect(() => {
    if (state) {
      userSearchForm.setFieldValue('firstname', state.message.split(' ')[0]);
      userSearchForm.setFieldValue('lastname', state.message.split(' ')[1]);
      userSearchForm.handleSubmit();
    }
  }, []);
  return (
    <>
      <ModalConfirm
        message="Etes-vous sur de vouloir supprimer cet utilisateur?"
        handleOpen={setOpen}
        isOpen={open}
        handleValid={handleDelete}
      />
      <div className="dashboard-user-title">
        <h1>Utilisateur</h1>
        <div>
          {userInfoForm.values.firstname && (
            <Button
              className="button-yellow"
              buttonName="Supprimer ce compte"
              onClick={() => setOpen(true)}
            />
          )}
        </div>
      </div>
      <div className="dashboard-user-search">
        <div className="user-avatar">
          <FaUserAlt size="20%" />
        </div>
        <div className="search-wrapper">
          <Input
            label="Prénom :"
            name="firstname_search"
            className="firstname"
            value={userSearchForm.values.firstname}
            onChange={userSearchForm.handleChange}
          />
          <Input
            label="Nom :"
            name="lastname_search"
            className="lastname"
            onChange={userSearchForm.handleChange}
            value={userSearchForm.values.lastname}
          />
          <Input
            label="Date de naissance :"
            type="date"
            name="birthday_search"
            onChange={userSearchForm.handleChange}
            value={userSearchForm.values.birthday}
          />
          <Button
            buttonName="Valider"
            className="button-red"
            onClick={userSearchForm.handleSubmit}
          />
        </div>
      </div>
      <div className="dashboard-user-content">
        <div className="info-perso">
          <div className="title">
            <h3>Données personnelles</h3>
            <div className="cotisation">
              {userInfoForm.values.firstname && (
                <div className="cotisation-checkbox">
                  <label htmlFor="yes-no">Cotisation à jour :</label>
                  <div>
                    <Input
                      label="Oui"
                      name="yes-no"
                      type="radio"
                      checked={userInfoForm.values.cotisation_payed === 1}
                      onChange={() =>
                        userInfoForm.setFieldValue('cotisation_payed', 1)
                      }
                    />
                    <Input
                      label="Non"
                      name="yes-no"
                      type="radio"
                      checked={userInfoForm.values.cotisation_payed === 0}
                      onChange={() =>
                        userInfoForm.setFieldValue('cotisation_payed', 0)
                      }
                    />
                  </div>
                  <div className="active-account">
                    <label htmlFor="yes-no-active">Compte actif :</label>
                    <div>
                      <Input
                        label="Oui"
                        name="yes-no-active"
                        type="radio"
                        checked={userInfoForm.values.active === 1}
                        onChange={() => userInfoForm.setFieldValue('active', 1)}
                      />
                      <Input
                        label="Non"
                        name="yes-no-active"
                        type="radio"
                        checked={userInfoForm.values.active === 0}
                        onChange={() => userInfoForm.setFieldValue('active', 0)}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="form-info-perso">
            <Input
              label="Prénom : "
              name="firstname"
              className="firstname"
              value={userInfoForm.values.firstname}
              onChange={userInfoForm.handleChange}
            />
            <Input
              label="Nom : "
              name="lastname"
              className="lastname"
              value={userInfoForm.values.lastname}
              onChange={userInfoForm.handleChange}
            />
            <Input
              label="Date de naissance : "
              name="birthday"
              className="birthday"
              type="date"
              value={userInfoForm.values.birthday}
              onChange={userInfoForm.handleChange}
            />
            <Input
              label="Adresse : "
              name="address"
              className="address"
              value={userInfoForm.values.address}
              onChange={userInfoForm.handleChange}
            />
            <Input
              label="Code postal : "
              name="postal_code"
              className="postal_code"
              value={userInfoForm.values.postal_code}
              onChange={userInfoForm.handleChange}
            />
            <Input
              label="Ville : "
              name="city"
              className="city"
              value={userInfoForm.values.city}
              onChange={userInfoForm.handleChange}
            />
            <Input
              label="Email : "
              name="email"
              className="email"
              value={userInfoForm.values.email}
              onChange={userInfoForm.handleChange}
            />
            <Input
              label="Téléphone : "
              name="phone"
              className="phone"
              value={userInfoForm.values.phone}
              onChange={userInfoForm.handleChange}
            />
          </div>
        </div>
        <div className="info-corpo">
          <div className="title">
            <h3>Données de corporation</h3>
          </div>
          <div className="form-info-corpo">
            <SelectComponant
              name="provinces"
              data={provinces}
              optionValue="name"
              setValue={(value) => {
                userInfoForm.setFieldValue('province_id', value.id);
              }}
              disabled={!userInfoForm.values.firstname}
              defaultValue={userInfoForm.values.province_id}
              label="Nom de province :"
            />
            <SelectComponant
              name="adoptionPlace"
              data={adoptionPlace}
              optionValue="name"
              setValue={(value) => {
                userInfoForm.setFieldValue('adoption_place_id', value.id);
              }}
              disabled={!userInfoForm.values.firstname}
              defaultValue={userInfoForm.values.adoption_place_id}
              label="Lieu d'adoption :"
            />
            <Input
              label="Date d'adoption :"
              name="adoption_date"
              className="adoption_date"
              type="date"
              disabled={!userInfoForm.values.firstname}
              value={userInfoForm.values.adoption_date}
              onChange={userInfoForm.handleChange}
            />
            <SelectComponant
              name="room"
              data={rooms}
              optionValue="name"
              setValue={(value) => {
                userInfoForm.setFieldValue('room_id', value.id);
              }}
              disabled={!userInfoForm.values.firstname}
              defaultValue={userInfoForm.values.room_id}
              label="Chambre :"
            />
            <SelectComponant
              name="receptionPlace"
              data={receptionPlace}
              optionValue="name"
              setValue={(value) => {
                userInfoForm.setFieldValue('reception_place_id', value.id);
              }}
              disabled={!userInfoForm.values.firstname}
              defaultValue={userInfoForm.values.reception_place_id}
              label="Lieu de réception :"
            />
            <Input
              label="Date de réception :"
              name="reception_date"
              className="reception_date"
              type="date"
              disabled={!userInfoForm.values.firstname}
              value={userInfoForm.values.reception_date}
              onChange={userInfoForm.handleChange}
            />
          </div>
          <div className="form-roles">
            <h3>Niveau d'accès: </h3>
            <div className="roles">
              {roles?.map((role) => (
                <div>
                  <label htmlFor="roles">{role.name}</label>
                  <input
                    type="checkbox"
                    name="roles"
                    id="roles"
                    checked={!!userInfoForm.values.rolesId.includes(role.id)}
                    onChange={(e) => {
                      if (userInfoForm.values.rolesId.includes(role.id)) {
                        const value = userInfoForm.values.rolesId.filter(
                          (r) => r !== role.id
                        );
                        userInfoForm.setFieldValue('rolesId', value);
                      } else {
                        userInfoForm.setFieldValue('rolesId', [
                          ...userInfoForm.values.rolesId,
                          role.id,
                        ]);
                      }
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <Button
          buttonName="Valider"
          className="button-red"
          onClick={userInfoForm.handleSubmit}
          disabled={!userInfoForm.values.firstname}
        />
      </div>
    </>
  );
}

export default UserDashboard;
