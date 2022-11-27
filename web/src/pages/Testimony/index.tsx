import Swipper from '../../components/Swipper';
import styles from './styles.module.scss'

export const Testimony = () => {

  return (
    <section className={styles.container} data-aos="fade-up" data-aos-delay="0">
      <h5>Depoimentos</h5>
      <h2>Todos Amam o roxinho</h2>
      <Swipper />
    </section>
  );
}
