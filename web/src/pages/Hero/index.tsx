import { Button } from '../../components/Button';
import styles from './styles.module.scss'
import AppStore from '../../assets/appstore.svg'
import PlayStore from '../../assets/playstore.svg'

export const Hero = () => {

  return (
    <main className={styles.container}>
      <section className={styles.flex_item_1}>
        <h1>Ser Nubank é
          reinventar sua
          vida financeira. </h1>
        <p>Conta com rendimento acimada poupança, cartão de crédito sem anuidade e o melhor: resolva tudo pelo app.</p>
        <div>
          <Button title='Quero ser Nubank' />
          <a href="" className={styles.btn}>
            <img src={AppStore} alt="Logo da AppStore onde e uma maca mordida" />
          </a>
          <a href="" className={styles.btn}>
            <img src={PlayStore} alt="Logo da PlayStore onde e um triangulo de deitado para o lado direito" />
          </a>
        </div>
      </section>
      <section className={styles.flex_item_3}>

      </section>
    </main>
  );
}
