import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import defaultBg from '../images/hero.jpg';

const StyledHero = styled.div`
  min-height: calc(100vh - 62px);
  background: linear-gradient(rgba(63, 208, 212, 0.7), rgba(0, 0, 0, 0.7)),
    url(${defaultBg}) center/cover no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SimpleHero = ({ children }) => <StyledHero>{children}</StyledHero>;

export default SimpleHero;

SimpleHero.propTypes = {
  children: PropTypes.object.isRequired,
};
