import { Button } from '../../components/Button';
import FIgnu5 from '../../components/SVGS/FIgnu5';
import styles from './styles.module.scss'

export const Invite = () => {

    return(
        <section className={styles.bg}>
            <FIgnu5 className={styles.background} data-aos="fade-up" data-aos-delay="200" />
            <div className={styles.container} data-aos="fade-up" data-aos-delay="0">
                <article className={styles.invite}>
                    <h5>nuconta</h5>
                    <h2>O melhor dos bancos digitais. Pra você!</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore voluptas eius autem placeat aut quidem! Minima reiciendis fuga expedita, rerum sunt facilis, amet nulla numquam aperiam, quae reprehenderit alias odio.</p>
                    <Button title='Quero ser Nubank' />
                </article>
            </div>
        </section>
    );
}
