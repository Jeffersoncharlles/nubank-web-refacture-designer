import { Autoplay } from 'swiper';
import styles from './styles.module.scss'


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

import { depoimentos } from '../../utils/helpers'
import { CardTestimony } from './CardTestimony';
import SlideNextButton from './ButtonSwiper';
import { useEffect, useState } from 'react';

export default () => {
  const [mobile, setMobile] = useState(false)

  let mobileWidth = window.screen.width === 910

  useEffect(() => {
    if (mobileWidth) {
      setMobile(true)
    } else {
      setMobile(false)
    }

  }, [mobileWidth])

  return (
    <div className={styles.container}>

      <Swiper
        modules={[Autoplay]}
        className={styles.swiper_container}
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
        slidesPerView={mobile ? 1 : 2} //quantos ver
        loop={true}
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false
        }}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
      >

        {depoimentos.map((item) => (
          <SwiperSlide key={item.fullName} className={styles.swiper_slider}>
            <CardTestimony data={item} />
          </SwiperSlide>
        ))}
        <SlideNextButton next />
        <SlideNextButton prev />
      </Swiper>
    </div>
  );
};
