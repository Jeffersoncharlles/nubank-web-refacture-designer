import { Autoplay } from 'swiper';
import styles from './styles.module.scss'


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

import { depoimentos } from '../../utils/helpers'
import { CardTestimony } from './CardTestimony';
import SlideNextButton from './ButtonSwiper';


export default () => {


  return (
    <div className={styles.container} data-aos="fade-up" data-aos-delay="200">

      <Swiper
        modules={[Autoplay]}
        className={styles.swiper_container}
        breakpoints={{
          640: {
            width: 640,
            slidesPerView: 1
          },
          960: {
            width: 960,
            slidesPerView: 2
          }
        }}
        spaceBetween={40}
        grabCursor // mãozinha no item
        pagination={{
          el: '.swiper-pagination',
          clickable: true,
          type: 'progressbar'
        }}
        navigation={{
          nextEl: '.button-next',
          prevEl: '.button-prev'
        }}
        slidesPerView="auto" //quantos ver
        loop={true}
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false
        }}
      >
        <SlideNextButton next />
        <SlideNextButton prev />
        {depoimentos.map((item) => (
          <SwiperSlide key={item.fullName} className={styles.swiper_slider}>
            <CardTestimony data={item} />
          </SwiperSlide>
        ))}

      </Swiper>
    </div>
  );
};
