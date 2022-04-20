import React, { useContext } from 'react';
import { Swiper } from 'swiper/react/swiper';
import { SwiperSlide } from 'swiper/react/swiper-slide';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import { AppContext } from '../../context/AppContext';
import 'swiper/swiper-bundle.css';
import './Books.css';

const API_URL = process.env.REACT_APP_BACKEND_URL;

SwiperCore.use([Autoplay, Navigation, Pagination]);

function Books() {
  const { books } = useContext(AppContext);

  return (
    <div className="carousel-container-books">
      <h3>Livres</h3>
      <div className="carousel-slider-books">
        <Swiper
          className="mySwiper-container"
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
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
                  <div className="overlay-books">
                    <a
                      href={book.link}
                      target={'_blank'}
                      rel="noreferrer noopener"
                      className="overlay-books-img_link"
                    >
                      En savoir plus
                    </a>
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
