// @ts-nocheck
/* eslint-disable react/display-name */
import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import { BtnShadow } from '../components/styled/Buttons';
import About from '../components/home/About';
import Services from '../components/home/Services';
import StyledHero from '../components/StyledHero';
import FeaturedTours from '../components/home/FeaturedTours';
import Seo from '../components/Seo';

const Home = ({ data }) => (
  <>
    <Layout>
      <Seo title="Home" description="Main Page" />
      <StyledHero img={data.heroBg.childImageSharp.fluid} home="true">
        <Banner
          title="Exploring the nature"
          info="traveling around the world and exploring the real you!"
        >
          <AniLink fade to="/tours">
            <BtnShadow>Explore Tours</BtnShadow>
          </AniLink>
        </Banner>
      </StyledHero>
      <About />
      <Services />
      <FeaturedTours />
    </Layout>
  </>
);

export const HOME_BACKGROUND_IMAGE_QUERY = graphql`
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

Home.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Home;
