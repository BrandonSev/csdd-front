import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import SelectComponant from '../../SelectComponents/Select';
import Input from '../../Input/Input';
import Button from '../../Button/Button';
import DashboardBody from '../../Dashboard/DashboardBody/index';
import DashboardHeader from '../../Dashboard/DashboardHeader/index';
import DashboardMenu from '../../Dashboard/DashboardMenu';
import Dashboard from '../../Dashboard/index';

const API_URL = process.env.REACT_APP_BACKEND_URL;

function bookDashboard() {
  const [books, setbooks] = useState([]);
  const [selectedValue, setSelectedValue] = useState({});
  const [selectedImage, setSelectedImage] = useState({});

  /**
   * It takes in an book object and sets the selectedImage state to the file that was selected
   */
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage({
        file: e.target.files[0],
        image: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  /* It's creating a formik object that will be used to validate the form. */
  const formik = useFormik({
    initialValues: {
      filename: selectedValue.filename ? selectedValue.filename : '',
      img_link: selectedValue.img_link ? selectedValue.img_link : '',
    },
    enableReinitialize: true,
  });

  useEffect(() => {
    (async () => {
      await axios
        .get(`${API_URL}/api/books/`)
        .then((response) => response.data)
        .then((data) => {
          setbooks(data);
        })
        .catch((err) => {
          console.log(err);
        });
    })();
  }, []);
  return (
    <Dashboard>
      <DashboardMenu />
      <DashboardHeader />
      <DashboardBody>
        <div className="select-evenement">
          <h1 className="event-title">Livre Métier page accueil</h1>
          <div className="events-select">
            <p>Séléctionner un livre</p>
            <SelectComponant
              setValue={setSelectedValue}
              data={books}
              optionValue="filename"
            />
          </div>
        </div>
        <div className="events-Input">
          <div className="event-image-container">
            <p>séléctionner un image</p>
            <input
              type="file"
              className="ignores-input-style"
              accept="image/*"
              onChange={imageChange}
            />
            {/* It's creating a URL for the image that is being uploaded. */}
            {selectedValue.filename && !selectedImage.image ? (
              <img
                className="events_image"
                src={`${API_URL}/images/${selectedValue.filename}`}
                alt=""
                width={150}
              />
            ) : (
              <img
                className="events_image"
                /* It's creating a URL for the image that is being uploaded. */
                src={selectedImage.image}
                alt=""
                width={150}
              />
            )}
          </div>
          <Input
            label="Ajouter un lien"
            type="AddingLink"
            name="AddingLink"
            id="Title"
            onChange={formik.handleChange}
            value={formik.values.img_link}
          />
          <div className="eventsBtn-container">
            <div />
            <div className="btn-event">
              <Button
                className="button-red event_button"
                buttonName="Valider"
              />
            </div>
            <div className="btn-event">
              <Button
                className="button-red event_button"
                buttonName="Modifier"
              />
            </div>
            <div className="btn-event">
              <Button
                className="button-red event_button"
                buttonName="Supprimé"
              />
            </div>
          </div>
        </div>
      </DashboardBody>
    </Dashboard>
  );
}

export default bookDashboard;
