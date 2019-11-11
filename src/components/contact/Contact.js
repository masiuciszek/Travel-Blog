import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Title from '../styled/Title';

const StyledContact = styled.section``;

const Contact = () => {
  let a;
  return (
    <StyledContact>
      <Title title="Contact" subtitle="us" />
    </StyledContact>
  );
};

Contact.propTypes = {};

export default Contact;
