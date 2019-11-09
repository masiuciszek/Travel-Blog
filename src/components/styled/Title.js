import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledTitle = styled.div`
  padding: 0.5rem;
  margin: 0 auto;
  text-align: center;
  text-transform: uppercase;
  h3 {
    color: ${props => props.theme.black};
    font-size: 2rem;
  }
  span {
    color: ${props => props.theme.primaryColor};
    margin-right: 1rem;
    display: block;
  }

  @media (max-width: 575px) {
    span {
      display: inline-block;
      margin: 0 0.35rem;
    }
  }
`;

const Title = ({ title, subtitle }) => (
  <StyledTitle>
    <h3>
      <span>{title}</span>
      {subtitle}
    </h3>
  </StyledTitle>
);

export default Title;

Title.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};
