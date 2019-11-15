import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from 'gatsby-image';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const StyledTour = styled.article`
  padding: 1rem;
  box-shadow: ${props => props.theme.lightShadow};
  transition: ${props => props.theme.mainTransition};
  .img-wrapper {
    position: relative;
    /* background: ${props => props.theme.primaryColor}; */
    transition: ${props => props.theme.mainTransition};
    /* box-shadow: ${props => props.theme.lightShadow}; */
    padding: 0.2rem;
    img {
      transition: ${props => props.theme.mainTransition};
      box-shadow: ${props => props.theme.lightShadow};

    }
  }
`;

const Tour = ({ tour }) => {
  const { name, price, slug, country, images } = tour;

  return (
    <StyledTour>
      <h1>Tour</h1>
      <div className="img-wrapper">
        <Image fluid={images[0].fluid} />
      </div>
    </StyledTour>
  );
};

Tour.propTypes = {
  tour: PropTypes.object.isRequired,
};

export default Tour;
