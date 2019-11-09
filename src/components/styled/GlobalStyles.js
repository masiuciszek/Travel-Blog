import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css?family=Lato|Poppins");
*::before,*::after,*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Lato", sans-serif;
  color: ${props => props.theme.mainBlack};
  background: ${props => props.theme.white};
  line-height: 1.4;
  font-size: 1rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Poppins", sans-serif;
  margin-bottom: 1.25rem;
  letter-spacing: ${props => props.theme.mainSpacing};
}
p {
  margin-bottom: 1.25rem;
}
a {
  text-decoration: none;
}

.btn-white,
.btn-primary {
  text-transform: uppercase;
  letter-spacing: ${props => props.theme.mainSpacing};
  color: ${props => props.theme.mainWhite};
  border: 2px solid ${props => props.theme.mainWhite};
  padding: 0.9rem 1.6rem;
  display: inline-block;
  transition: ${props => props.theme.mainTransition};
  cursor: pointer;
}
.btn-white:hover {
  background: ${props => props.theme.mainWhite};
  color: ${props => props.theme.primaryColor};
}
.btn-primary {
  background: ${props => props.theme.primaryColor};
  color: ${props => props.theme.mainWhite};
  border: 2px solid ${props => props.theme.primaryColor};
}
.btn-primary:hover {
  background: transparent;
  color: ${props => props.theme.primaryColor};
}
main {
  /* min-height: 100vh;
  display: flex;
  flex-direction: column; */
  flex-grow: 1 auto;
}

ul,li{
  list-style: none;
}

a{
  text-decoration: none;
}

`;
