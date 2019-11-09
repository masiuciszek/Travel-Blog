import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledBanner = styled.div`
  text-align: center;
  letter-spacing: ${props => props.mainSpacing};
  color: #fff;
  h1 {
    font-size: 3.3rem;
    text-transform: uppercase;
    margin-bottom: 2rem;
    padding: 0 1rem;
    letter-spacing: 6px;
  }
  p {
    width: 85%;
    margin: 0 auto;
    margin-bottom: 2rem;
    font-size: 1.4rem;
    letter-spacing: 0.1rem;
  }
  @media screen and (min-width: 768px) {
    h1 {
      font-size: 4rem;
    }
    p {
      width: 60%;
    }
  }
  @media (max-width: 308px) {
    h1 {
      font-size: 2rem;
    }
    p {
      width: 50%;
    }
  }
`;

const Banner = ({ title, info, children }) => (
  <StyledBanner>
    <h1>{title}</h1>
    <p>{info}</p>
    {children}
  </StyledBanner>
);

Banner.propTypes = {
  children: PropTypes.object.isRequired,
  title: PropTypes.string,
  info: PropTypes.string,
};

export default Banner;
