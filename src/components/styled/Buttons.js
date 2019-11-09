import styled from 'styled-components';

export const BtnPrimary = styled.button`
  padding: 1.5rem;
`;
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
