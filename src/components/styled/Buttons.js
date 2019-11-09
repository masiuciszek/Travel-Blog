import styled from 'styled-components';

export const BtnShadow = styled.span`
  padding: 0.6rem 1rem;
  border: 2px solid ${props => props.theme.mainWhite};
  font-size: 1.2rem;
  color: ${props => props.theme.mainWhite};
  transition: ${props => props.theme.mainTransition};
  position: relative;
  text-transform: capitalize;
  letter-spacing: 0.2rem;
  &:hover {
    background: ${props => props.theme.primaryColor};
    color: #333;
  }
`;

export const BtnPrimary = styled.button`
  padding: 0.6rem 1rem;
  border: 2px solid ${props => props.theme.black};
  font-size: 1.2rem;
  color: ${props => props.theme.black};
  transition: ${props => props.theme.mainTransition};
  position: relative;
  text-transform: capitalize;
  letter-spacing: 0.2rem;
  cursor: pointer;
  box-shadow: 1px 1px 2px #333;
  &:hover {
    background: ${props => props.theme.primaryColor};
    color: #333;
    box-shadow: 3px 2px 2px #333;
  }
  &:active {
    top: 0.1rem;
  }
`;