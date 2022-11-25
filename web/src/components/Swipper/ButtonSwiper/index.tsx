import { useSwiper } from 'swiper/react';
import styles from './styles.module.scss'
interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  next?: boolean
  prev?: boolean
}

export default function SlideNextButton({ next = false, prev = false }: Props) {
  const swiper = useSwiper();
  const handleNextOrPrev = () => {
    next ? swiper.slideNext() : swiper.slidePrev();
  }
  return (
    <button onClick={handleNextOrPrev} title={next ? 'next slider': 'prev slider'} type='button' className={next ? styles.button_next : styles.button_prev}></button>
  );
}
