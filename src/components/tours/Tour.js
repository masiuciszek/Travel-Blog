import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTour = styled.section`
  padding: 1rem;
`;

const Tour = ({ tour }) => {
  console.log(tour, ' from tour component');
  return (
    <StyledTour>
      <h1>Tour</h1>
    </StyledTour>
  );
};

Tour.propTypes = {
  tour: PropTypes.object.isRequired,
};

export default Tour;
