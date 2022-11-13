import { createGlobalStyle } from 'styled-components';


export const GlobalStyles = createGlobalStyle`
 *,
  *:: after,
  *:: before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  width: 100%;
  height: 100vh;
  position: relative;

  scroll-behavior: smooth;

  background-color: #333;
  font-family: 'Sora', sans-serif;
}

svg,img{
  display:block;
  width: 100%;

}

.border{
  border: 1px solid red;
}


`