import React, { useContext } from 'react';
import { Swiper } from 'swiper/react/swiper';
import { SwiperSlide } from 'swiper/react/swiper-slide';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import moment from 'moment';
import { AppContext } from '../../context/AppContext';
import 'swiper/swiper-bundle.css';
import './Events.css';

const API_URL = process.env.REACT_APP_BACKEND_URL;

SwiperCore.use([Autoplay, Navigation, Pagination]);

function Events() {
  const { events } = useContext(AppContext);

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
          z
        >
          {events &&
            events.map((event) => (
              <SwiperSlide>
                <div className="swiper-overlay-events" key={event.id}>
                  <img
                    src={`${API_URL}/images/${event.filename}`}
                    alt=""
                    className="event-img"
                  />
                  <div className="overlay-events">
                    {/* <h3 className="overlay-events-filename">
                      {event.filename}
                    </h3> */}
                    {event.event_link ? (
                      <a href={event.event_link}>
                        <h2>{event.title}</h2>
                      </a>
                    ) : (
                      ''
                    )}
                    <h4 className="overlay-events-date">
                      {moment(event.event_date).format('DD-MM-yyyy')}
                    </h4>
                    <p className="overlay-events-description">
                      {event.description}
                    </p>
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
