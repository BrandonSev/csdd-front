import React from 'react';
import { Swiper } from 'swiper/react/swiper';
import { SwiperSlide } from 'swiper/react/swiper-slide';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import moment from 'moment';
import 'swiper/swiper-bundle.css';
import './JobOffers.css';

SwiperCore.use([Autoplay, Navigation, Pagination]);

function JobOffers({ jobOffers }) {
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
            600: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1020: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {jobOffers &&
            jobOffers.map((jobOffer) => (
              <SwiperSlide>
                <div className="swiper-jobOffers" key={jobOffer.id}>
                  <h4>
                    {jobOffer.reference} -
                    {moment(jobOffer.created_at).format('DD-MM-yyyy')}
                  </h4>
                  <h4> {jobOffer.city}</h4>
                  <br></br>
                  <h4 className="job">{jobOffer.poste}</h4>
                  <br></br>
                  <p>
                    {jobOffer.description}
                    description Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit. Dolor ut doloremque fugit ipsum
                    cupiditate, et, dolorem tempore reiciendis quae eveniet
                    cumque optio animi officia nemo veniam, omnis neque a quos.
                  </p>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}

export default JobOffers;
