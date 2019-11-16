import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from 'gatsby-image';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { Map } from 'styled-icons/boxicons-regular';
import { useStaticQuery, graphql } from 'gatsby';
import { BtnShadow } from '../styled/Buttons';

const StyledTour = styled.article`
  padding: 0.2rem;
  box-shadow: ${props => props.theme.lightShadow};
  transition: ${props => props.theme.mainTransition};
  border: 2px solid ${props => props.theme.primaryColor};
  .img-wrapper {
    position: relative;
    transition: ${props => props.theme.mainTransition};
    box-shadow: ${props => props.theme.lightShadow};
    margin-bottom: 2rem;

    img {
      transition: ${props => props.theme.mainTransition};
      box-shadow: ${props => props.theme.lightShadow};
    }
  }
  #details {
    background: ${props => props.theme.black};
    margin: 1rem 0;

    &:hover {
      background: ${props => props.theme.mainWhite};
      color: ${props => props.theme.black};
      border: 2px solid ${props => props.theme.black};
    }
  }
`;

const Footer = styled.div`
  padding: 0.2rem;
  text-align: left;

  h3 {
    display: flex;
    margin: 1rem 0;
  }
  .info {
    h4 {
      color: ${props => props.theme.primaryColor};
    }
  }
  .details {
    display: flex;
    justify-content: flex-end;

    color: ${props => props.theme.darkGrey};
  }
  p {
    span {
      margin: 0 0.2em;
    }
  }
`;

const GET_DEFAULT_IMG_QUERY = graphql`
  query {
    getDefaultImg: file(relativePath: { eq: "hero.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Tour = ({ tour }) => {
  const { name, price, slug, country, images, days } = tour;
  const getImage = useStaticQuery(GET_DEFAULT_IMG_QUERY);
  const img = getImage.getDefaultImg.childImageSharp.fluid;

  const mainImg = images ? images[0].fluid : img;

  return (
    <StyledTour>
      <div className="img-wrapper">
        <Image fluid={mainImg} alt="tour" />
      </div>
      <AniLink fade to={`/tours/${slug}`}>
        <BtnShadow id="details">Details</BtnShadow>
      </AniLink>
      <Footer>
        <h3>{name}</h3>
        <div className="info">
          <h4>
            {' '}
            <Map size="25" /> {country}
          </h4>
        </div>
        <div className="details">
          <p>
            {days} Day's {'   '}
          </p>{' '}
          <p>
            {'  '} <span>from</span> ${price}{' '}
          </p>
        </div>
      </Footer>
    </StyledTour>
  );
};

Tour.propTypes = {
  tour: PropTypes.shape({
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    days: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
  }),
};

Tour.defaultProps = {};
export default Tour;
