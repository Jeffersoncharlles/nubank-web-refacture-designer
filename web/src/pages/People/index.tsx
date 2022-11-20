import styles from './styles.module.scss'
import ImagePeople1 from '../../components/SVGS/People1'
import ImagePeople2 from '../../components/SVGS/People2'
import ImagePeople3 from '../../components/SVGS/People3'

import { benefits } from '../../utils/helpers'

export const People = () => {

  return (
    <section className={styles.container}>
      <div className={styles.flex_item_4}>
        <h5>para todos</h5>
        <h2>Completo.</h2>
        <p>Resolva seu dia a dia pelo celular.Sem filas, sem anuidade,sem tarifas abusivas.
          Cuide do seu dinheiro de um jeito simples.
          Somos eficientes para você usar seu dinheiro
          com oque realmente importa,sem tarifas de manutenção
        </p>
        <ul className={styles.list}>
          {benefits.map((item) => (
            <li className={styles.list_item} key={item.title} >
              <strong>{item.title}</strong>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
        <p>
          <a href=''>Confira os benefícios</a>
        </p>
      </div>
      <div className={styles.flex_item_3}>
        <ImagePeople1 />

      </div>
      <div className={styles.flex_item_1}>
        <ImagePeople2 id={styles.people2} />
        <ImagePeople3 />
      </div>
    </section>
  );
}
