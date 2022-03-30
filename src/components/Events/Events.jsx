import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Swiper } from 'swiper/react/swiper';
import { SwiperSlide } from 'swiper/react/swiper-slide';
import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import './Events.css';

const API_URL = process.env.REACT_APP_CSDD_URL;

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/events/`)
      .then(({ data }) => {
        setEvents(data);
      })
      // eslint-disable-next-line no-console
      .catch((err) => console.error(err.message));
  }, []);

  return (
    <div className="carousel-container">
      <h3>Events</h3>
      <div className="carousel-slider-events">
        <Swiper
          className="mySwiper-container"
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          loop
          autoplay
          centeredSlides
          speed={500}
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
          {events &&
            events.map((event) => (
              <div key={event.id}>
                <img src={event.event_link} alt="" className="event_link" />
                <div className="overlay">
                  <h3 className="overlay-filename">{event.filename}</h3>
                  <h4 className="overlay-date">{event.event_date} </h4>
                  <p className="overlay-description">{event.description}</p>
                </div>
              </div>
            ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Events;
