import styles from './styles.module.scss'

interface Props {
  title: string
}

export const Button = ({ title }: Props) => {

  return (
    <button className={styles.container}>
      {title}
    </button>
  );
}
