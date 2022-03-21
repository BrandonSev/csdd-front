import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Swiper } from 'swiper/react/swiper';
import { SwiperSlide } from 'swiper/react/swiper-slide';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import './Carousel.css';

const API_URL = process.env.REACT_APP_CSDD_URL;

SwiperCore.use([Autoplay, Navigation, Pagination]);

function Carousel(events) {
  const [state, setState] = useState([]);

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
      <div className="swiper-container">
        <Swiper
          className="mySwiper"
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          loop
          autoplay
          centeredSlides
          speed={500}
          breakpoints={{
            768: {
              spaceBetween: 0,
              slidesPerView: 1,
            },
          }}
        >
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="3" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-5.jpg" alt="4" />
          </SwiperSlide>
          {/* <SwiperSlide></SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  );
}

export default Carousel;
