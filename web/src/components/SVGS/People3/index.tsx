import './styles.scss'
interface Props extends React.HTMLAttributes<HTMLOrSVGElement> {
  styleClass?: string;
  urlImage?: string;
}
function Icon({ styleClass, urlImage, ...rest }: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='324'
      height='324'
      fill='none'
      viewBox='0 0 324 324'
      {...rest}
    >
      <rect width='324' height='324' fill='transparent' rx='45'></rect>
      <image
        width='324'
        height='324'
        className='people5'
        href='/people5.png'
      ></image>
      <image
        width='324'
        height='324'
        className='people6'
        href='/people6.png'
      ></image>
    </svg>
  );
}

export default Icon;
