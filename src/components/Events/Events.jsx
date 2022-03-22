import React, {useState, useEffect} from 'react';
import axios from "axios";

const API_URL = process.env.REACT_APP_CSDD_URL

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/events/`)
      .then(({ data }) => {
        setEvents(data);
      })
      .catch((err) => console.error(err.message));
  }, []);

  return (
  <div>
    <h1>Events<h1>
    <div className="carousel-events">
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
          // breakpoints={{
          //   768: {
          //     spaceBetween: 0,
          //     slidesPerView: 1,
          //   },
          
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
          </Swiper>
        </div>

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
      </div>
    ))};
    )};


export default Events;
