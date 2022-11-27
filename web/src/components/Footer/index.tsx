import styles from './styles.module.scss'
import PlayStoreLogo from '../../assets/google-play.svg'
import AppStoreLogo from '../../assets/app-store.svg'
import LogoNu from '../../assets/logonu-white.svg'
import Logofacebook from '../../assets/icon-facebook.svg'
import Logoyoutube from '../../assets/icon-youtube.svg'
import Logoinstagram from '../../assets/icon-instagram.svg'
import Logotwitter from '../../assets/icon-twitter.svg'

export const Footer = () => {

    return(
        <footer>
            <section className={styles.container}>
                <div className={styles.cardMenu} >
                    <h4>Nubank</h4>
                    <ul className={styles.listFooter}>
                        <li><a href="">Sobre nós</a></li>
                        <li><a href="">Carreiras</a></li>
                        <li><a href="">Perguntas frequentes</a></li>
                        <li><a href="">Contato</a></li>
                        <li><a href="">Imprensa</a></li>
                    </ul>
                </div>
                <div className={styles.cardMenu} >
                    <h4>Produtos</h4>
                    <ul className={styles.listFooter}>
                        <li><a href="">Conta digital</a></li>
                        <li><a href="">Cartão de crédito</a></li>
                        <li><a href="">Rewards</a></li>
                        <li><a href="">Empréstimo</a></li>
                    </ul>
                </div>
                <div className={styles.cardMenu} >
                    <h4>Fale Conosco</h4>
                    <ul className={styles.listFooter}>
                        <li><a href="">0800 608 6236</a></li>
                        <li><a href="">meajuda@nubank.com.br</a></li>
                        <li><a href="">Atendimento 24h</a></li>
                    </ul>
                </div>
                <div className={styles.cardMenu} >
                    <h4>Explore mais</h4>
                    <ul className={styles.listFooter}>
                        <li><a href="">Comunidade</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Newsletter</a></li>
                    </ul>
                </div>
                <div className={styles.cardMenu} >
                    <h4>Baixe o App</h4>
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
                </div>
            </section>
            <section className={styles.containerSocials}>
                <div>
                    <img src={LogoNu} alt=""  style={{maxWidth:96}}/>
                    <p>Nu Pagamentos S.A.  18.236.120/0001-58
                        Rua Capote Valente, 39 - São Paulo, SP - 05409-000
                    </p>
                </div>
                <div className={styles.icon}>
                    <img src={Logofacebook} alt="Logotipo Facebook" />
                    <img src={Logoyoutube} alt=" Logotipo Youtube" />
                    <img src={Logoinstagram} alt=" Logotipo Instagram" />
                    <img src={Logotwitter} alt=" Logotipo Twitter" />
                </div>
            </section>
        </footer>
    );
}
