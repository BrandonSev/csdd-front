import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Swiper } from 'swiper/react/swiper';
import { SwiperSlide } from 'swiper/react/swiper-slide';
import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import './JobOffers.css';

const API_URL = process.env.REACT_APP_CSDD_URL;

function JobOffers() {
  const [jobOffers, setJobOffers] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/jobOffers/`)
      .then(({ data }) => {
        setJobOffers(data);
      })
      // eslint-disable-next-line no-console
      .catch((err) => console.error(err.message));
  }, []);

  return (
    <div className="carousel-container-jobOffers">
      <h3>Offres d embauche</h3>
      <div className="carousel-slider-jobOffers">
        <Swiper
          className="mySwiper-container"
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          loop
          centeredSlides={false}
          speed={700}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
        >
          <SwiperSlide>
            <h4>reference</h4>
            <h4> city</h4>
            <h4 className="job">poste</h4>
            <p>
              description Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Dolor ut doloremque fugit ipsum cupiditate, et, dolorem
              tempore reiciendis quae eveniet cumque optio animi officia nemo
              veniam, omnis neque a quos.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <h4>reference</h4>
            <h4> city</h4>
            <h4 className="job">poste</h4>
            <p>
              description Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Dolor ut doloremque fugit ipsum cupiditate, et, dolorem
              tempore reiciendis quae eveniet cumque optio animi officia nemo
              veniam, omnis neque a quos.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <h4>reference</h4>
            <h4> city</h4>
            <h4 className="job">poste</h4>
            <p>
              description Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Dolor ut doloremque fugit ipsum cupiditate, et, dolorem
              tempore reiciendis quae eveniet cumque optio animi officia nemo
              veniam, omnis neque a quos.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <h4>reference</h4>
            <h4> city</h4>
            <h4 className="job">poste</h4>
            <p>
              description Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Dolor ut doloremque fugit ipsum cupiditate, et, dolorem
              tempore reiciendis quae eveniet cumque optio animi officia nemo
              veniam, omnis neque a quos.
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default JobOffers;
