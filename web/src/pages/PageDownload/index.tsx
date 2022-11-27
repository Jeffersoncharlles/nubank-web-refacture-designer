import styles from './styles.module.scss'
import Fignu4 from '../../components/SVGS/Fignu4';
import PlayStoreLogo from '../../assets/google-play.svg'
import AppStoreLogo from '../../assets/app-store.svg'

export const PageDownload = () => {

    return(
      <section className={styles.container}>
        <article className={styles.downApps} data-aos="fade-up" data-aos-delay="0">
          <h5>faça sua conta</h5>
          <h2>Baixe. É gratuito.</h2>
          <p>Vamos lá, junte-se aos mais de 20 milhões que escolheram o Nubank. Conte com o banco
            digital que mais cresce no Brasil. É de graça.É para todos .Clique e baixe o App.
          </p>
          <div className={styles.downApps_buttons}>
            <button type='button' title='click para baixar na App store'>
              <a href="https://apps.apple.com/br/app/nubank-conta-e-cart%C3%A3o/id814456780" target="__blank">
                <img src={AppStoreLogo} alt="click para baixar na App store" />
              </a>
            </button>
            <button type='button' title='click para baixar na play store'>
              <a href="https://play.google.com/store/apps/details?id=com.nu.production&hl=pt_BR&gl=US&pli=1" target="__blank">
                <img src={PlayStoreLogo} alt="click para baixar na play store" />
              </a>
            </button>
          </div>
        </article>
        <div className={styles.logoAppDown} data-aos="fade-up" data-aos-delay="200">
          <Fignu4 />
        </div>
        </section>
    );
}
