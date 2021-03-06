import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import { graphql, useStaticQuery } from 'gatsby';

const GET_DEFAULT_IMG_QUERY = graphql`
  query {
    heroBg: file(relativePath: { eq: "hero.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

const StyledHero = ({ img, className, children, home }) => {
  const getDefaultHeroImg = useStaticQuery(GET_DEFAULT_IMG_QUERY);
  const { fluid } = getDefaultHeroImg.heroBg.childImageSharp;

  return (
    <>
      <BackgroundImage className={className} fluid={img || fluid} home={home}>
        {children}
      </BackgroundImage>
    </>
  );
};

StyledHero.propTypes = {};

export default styled(StyledHero)`
  min-height: ${props => (props.home ? `calc(100vh - 62px)` : `50vh`)};
  background: ${props =>
    props.home
      ? `linear-gradient(rgba(36, 64, 111, 0.7), rgba(9, 1, 00, 0.7))`
      : `none`};
  background-position: center;
  background-size: cover;
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: center;
`;
