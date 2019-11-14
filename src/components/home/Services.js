import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { InsertTemplate } from 'styled-icons/icomoon';
import { servicesData } from '../../constants/utils';

const ServicesStyled = styled.div`
  padding: 1.4rem 1.5rem;
  display: flex;
  flex-direction: column;
  margin: 7rem 0;
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
  box-shadow: 2px 2px 3px #ccc;
  span {
    padding: 0.4rem 0.7rem;
    width: 80%;
    display: inline-block;
    background: ${props => props.theme.primaryColor};
    display: flex;
    justify-content: center;
    box-shadow: 3px 2px 2px #ccc;
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
