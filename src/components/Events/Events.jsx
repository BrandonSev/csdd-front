import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Swiper } from 'swiper/react/swiper';
import { SwiperSlide } from 'swiper/react/swiper-slide';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import moment from 'moment';
import 'swiper/swiper-bundle.css';
import './Events.css';

const API_URL = process.env.REACT_APP_BACKEND_URL;

SwiperCore.use([Autoplay, Navigation, Pagination]);

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
          {events &&
            events.map((event) => (
              <SwiperSlide>
                <div className="swiper-overlay-events" key={event.id}>
                  <img
                    src={`${API_URL}/images/${event.filename}`}
                    alt=""
                    className="event-filename"
                  />
                  <div className="overlay-events">
                    <h3 className="overlay-events-filename">
                      {moment(event.filename).format('yyyy-MM-DD')}
                    </h3>
                    <h4 className="overlay-events-date">{event.event_date}</h4>
                    <p className="overlay-events-description">{event.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Events;
