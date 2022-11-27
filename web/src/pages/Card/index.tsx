import Fignu3 from '../../components/SVGS/Fignu3';
import { creditBenefits } from '../../utils/helpers';
import styles from './styles.module.scss'

export const Card = () => {

    return(
        <section className={styles.container}>
            <article className={styles.credit} data-aos="fade-up" data-aos-delay="200">
                <h5>seu roxinho</h5>
                <h2>Crédito e débito</h2>
                <p>Pode chamar ele de roxinho.Além disso,pode chamar ele de moderno, gratuito e prático
                    também, Facilidade e segurança para você em mais de 30 milhões de estabelecimentos,além dos beneficios Mastercard.
                </p>
                <ul className={styles.list}>
                    {creditBenefits.map((item) => (
                        <li key={item.title}>
                            <strong>{item.title}</strong>
                            <p>{item.body}</p>
                        </li>
                    ))}

                </ul>
                <p>
                    <a href=''>Saiba mais</a>
                </p>
            </article>
            <div className={styles.cards_item} data-aos="fade-up" data-aos-delay="400">
                <Fignu3 />
            </div>
        </section>
    );
}
