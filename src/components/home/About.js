import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Title from '../styled/Title';
import img from '../../images/bkk1.jpg';
import { BtnPrimary } from '../styled/Buttons';

const ABOUT_QUERY = graphql`
  query {
    aboutImage: file(relativePath: { eq: "bkk1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

const About = () => {
  const {
    aboutImage: { childImageSharp },
  } = useStaticQuery(ABOUT_QUERY);

  return (
    <StyledAbout>
      <Title title="about" subtitle="us" />
      <Center>
        <article className="about-img">
          <div className="img-container">
            {/* <img src={img} alt="nice nature" /> */}
            <Img fluid={childImageSharp.fluid} alt="Bangkok city" />
          </div>
        </article>
        <article className="about-info">
          <h4>explore the Craziness</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore,
            cum voluptatum. Eius.
          </p>
          <BtnPrimary>read more</BtnPrimary>
        </article>
      </Center>
    </StyledAbout>
  );
};

About.propTypes = {};

const StyledAbout = styled.div`
  padding: 4rem 0;
`;

const Center = styled.div`
  width: 80vw;
  margin: 0 auto;

  .about-img {
    margin: 3rem 0;
    position: relative;
    img {
      width: 100%;
      display: block;
      box-shadow: ${props => props.theme.lightShadow};
      max-height: 500px;
    }
    div {
      box-shadow: ${props => props.theme.lightShadow};
    }
  }
  .about-info {
    margin-top: 3rem;
    h4 {
      font-size: 1.9rem;
      text-transform: uppercase;
    }
    p {
      width: 80%;
    }
  }
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 3rem;
    align-items: center;
    margin-top: 3rem;
  }
  .about-img,
  .about-info {
    margin: 0;
  }

  @media screen and (min-width: 992px) {
    .img-container::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      border: 3px solid ${props => props.theme.primaryColor};
      box-sizing: border-box;
      top: -10px;
      left: -10px;
      z-index: -1;
    }
  }
  @media screen and (min-width: 1200px) {
    width: 95vw;
    max-width: 1170px;
  }
`;

export default About;
