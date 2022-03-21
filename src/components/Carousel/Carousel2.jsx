import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carousel.css';

const API_URL = process.env.REACT_APP_CSDD_URL;

function Carousel2() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/books/`)
      .then(({ data }) => {
        setBooks(data);
      })
      .catch((err) => console.error(err.message));
  }, []);

  return (
    <div className="carousel-container">
      <h1>Carousel Books</h1>
      <div className="carousel-wrapper">
        <Carousel
          infiniteLoop
          showStatus
          showIndicator
          showArrows
          // onChange={onChange}
          // onClickItem={onClickItem}
          // onClickThumb={onClickThumb}
        >
          <img
            src="https://www.photo-paysage.com/albums/Fleurs-plantes/Fleurs-roses/printemps/thumb_fleur-printemps-rose-6153.jpg"
            alt="rose jaune"
          />
          <div>
            <img
              src="https://www.photo-paysage.com/albums/Fleurs-plantes/Fleurs-roses/printemps/thumb_fleur-printemps-rose-6152.jpg"
              alt="rose jaune"
            />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img
              src="https://www.photo-paysage.com/albums/Fleurs-plantes/Fleurs-roses/printemps/thumb_fleur-printemps-rose-6151.jpg"
              alt="rose jaune"
            />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img
              src="https://www.photo-paysage.com/albums/Fleurs-plantes/Fleurs-roses/printemps/thumb_fleur-printemps-rose-6152.jpg"
              alt="rose jaune"
            />
            <p className="legend">Legend 3</p>
          </div>
          {books &&
            books.map((book) => (
              <div key={book.id}>
                <img src={book.img_link} alt="book" className="img-size" />
                <div className="overlay">
                  <h3 className="overlay-title">{book.filename}</h3>
                  <p className="overlay_link">{book.link}</p>
                </div>
              </div>
            ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Carousel2;
