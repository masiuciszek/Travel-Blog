import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { servicesData } from '../../constants/utils';

const ServicesStyled = styled.div`
  padding: 1.4rem 3.5rem;
  display: flex;
  flex-direction: column;
  margin: 7rem 0 1rem 0;
  background: ${props => props.theme.grey};

  @media (min-width: 890px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    justify-items: center;
    grid-gap: 10px;
  }
`;

const Service = styled.article`
  padding: 0.5rem;
  box-shadow: ${props => props.theme.lightShadow};
  border: 2px solid ${props => props.theme.mainWhite};
  color: ${props => props.theme.mainWhite};
  border-radius: 1rem;
  position: relative;
  span {
    padding: 0.4rem 0.7rem;
    width: 30%;
    display: inline-block;
    background: ${props => props.theme.primaryColor};
    display: flex;
    justify-content: center;
    box-shadow: ${props => props.theme.lightShadow};
    border-radius: 1rem;
  }

  h3 {
    font-size: 1.3rem;
    padding: 1rem 0.5rem;
  }
  p {
    padding: 0.2rem 0.5rem;
    letter-spacing: 0.1em;
  }
  @media (max-width: 890px) {
    margin: 0.4rem 0;
  }
`;
const Services = () => {
  let a;
  return (
    <ServicesStyled>
      {servicesData.map((service, index) => (
        <Service key={index}>
          <span>{service.icon}</span>
          <h3>{service.title}</h3>
          <p>{service.text}</p>
        </Service>
      ))}
    </ServicesStyled>
  );
};

Services.propTypes = {};

export default Services;
