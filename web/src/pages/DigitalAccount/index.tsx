import styles from './styles.module.scss'
import FigNu from '../../components/SVGS/Fignu'
import {totalApp } from '../../utils/helpers'

export const DigitalAccount = () => {

  return (
    <section className={styles.container}>
      <div className={styles.mockup} data-aos="fade-up" data-aos-delay="0">
        <FigNu  />
      </div>
      <div className={styles.appDigital} data-aos="fade-up" data-aos-delay="200">
        <h5>conta digital</h5>
        <h2>Tudo pelo App.</h2>
        <p>Nossa conta digital com mais de 20  milhões de clientes em todos o Brasil. Pague suas contas,
          ajuste seu limite, bloqueie e desbloqueie o cartão quando quiser e acompanhe cada movimentação em tempo real. tudo pelo aplicativo
        </p>
        <ul className={styles.list}>
          {totalApp.map((item) => (
            <li key={item.title}>
              <strong>{item.title}</strong>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
        <p>
          <a href=''>Segura e sem complicações</a>
        </p>
      </div>
    </section>
  );
}
