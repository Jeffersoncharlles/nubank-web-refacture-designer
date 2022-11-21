import styles from './styles.module.scss'
import IconDollar from '../../assets/icon-cash.svg'
import IconTransfer from '../../assets/icon-transfer.svg'
import IconCard from '../../assets/icon-card.svg'
import IconCallPhone from '../../assets/icon-phone.svg'

export const Best = () => {

  return (
    <section className={styles.container}>
      <div className={styles.best}>
        <div className={styles.flex_item_auto}>
          <h5>o melhor</h5>
          <h2>Por que
            Nubank?</h2>
        </div>
        <div className={styles.best_item}>
          <img src={IconDollar} alt="" />
          <p>Conta rende mais que a poupança</p>
        </div>
        <div className={styles.best_item}>
          <img src={IconTransfer} className={styles.icons} alt="" />
          <p>Transferências e
            TEDs ilimitadas</p>
        </div>
        <div className={styles.best_item}>
          <img src={IconCard} alt="" />
          <p>Conta e cartão
            100% gratuitos</p>
        </div>
        <div className={styles.best_item}>
          <img src={IconCallPhone} alt="" />
          <p>O melhor suporte 24h do Brasil</p>
        </div>
      </div>
    </section>
  );
}
