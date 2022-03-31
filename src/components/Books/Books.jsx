import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Swiper } from 'swiper/react/swiper';
import { SwiperSlide } from 'swiper/react/swiper-slide';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import './Books.css';

const API_URL = process.env.REACT_APP_BACKEND_URL;

SwiperCore.use([Autoplay, Navigation, Pagination]);

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/books/`)
      .then(({ data }) => {
        setBooks(data);
      })
      // eslint-disable-next-line no-console
      .catch((err) => console.error(err.message));
  }, []);

  return (
    <div className="carousel-container-books">
      <h3>Books</h3>
      <div className="carousel-slider-books">
        <Swiper
          className="mySwiper-container"
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={2}
          navigation
          pagination={{ clickable: true }}
          loop
          autoplay
          centeredSlides={false}
          speed={700}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
        >
          {books &&
            books.map((book) => (
              <SwiperSlide>
                <div className="swiper-overlay-books" key={book.id}>
                  <img
                    src={`${API_URL}/images/${book.filename}`}
                    alt=""
                    className="book-filename"
                  />
                  <div className="overlay-events">
                    <h3 className="overlay-books-filename">{book.filename}</h3>
                    <h4
                      className="overlay-books-img_link"
                      value={book.img_link}
                    >
                      En savoir plus
                    </h4>
                    <p className="overlay-books-link">{book.link}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Books;
