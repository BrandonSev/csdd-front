import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Swiper } from 'swiper/react/swiper';
import { SwiperSlide } from 'swiper/react/swiper-slide';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import './Carousel.css';

const API_URL = process.env.REACT_APP_CSDD_URL;

SwiperCore.use([Autoplay, Navigation, Pagination]);

function Carousel() {
  const [setState] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/{state}/`)
      .then(({ data }) => {
        setState(data);
      })
      .catch((err) => console.error(err.message));
  }, []);

  return (
    <div className="container">
      <div>Je suis un carousel </div>
    </div>
  );
}

export default Carousel;
