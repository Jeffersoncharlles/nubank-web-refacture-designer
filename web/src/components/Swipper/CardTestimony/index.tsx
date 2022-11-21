import styles from './styles.module.scss'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  data: {
    avatar?: string;
    fullName?: string;
    contentBody?: string;
  }
}

export const CardTestimony = ({ data, ...rest }: Props) => {

  return (
    <article className={styles.container_card} {...rest}>
      <img src={data.avatar} alt={data.fullName} />
      <h4>{data.fullName}</h4>
      <p>{data.contentBody}</p>
    </article>
  );
}
