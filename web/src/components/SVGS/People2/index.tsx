import React from "react";

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
      height='475'
      fill='none'
      viewBox='0 0 324 475'
      {...rest}
    >
      <rect width='324' height='475' fill='transparent' rx='45'></rect>
      <image
        width='324'
        height='475'
        className='people3'
        href='/people3.png'
      ></image>
      <image
        width='324'
        height='475'
        className='people4'
        href='/people4.png'
      ></image>
    </svg>
  );
}

export default Icon;
