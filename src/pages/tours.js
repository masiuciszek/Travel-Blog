import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import StyledHero from '../components/StyledHero';
import Tours from '../components/tours/Tours';

const ToursPage = ({ data }) => (
  <>
    <Layout>
      <StyledHero img={data.heroBg.childImageSharp.fluid} />
      <Tours />
    </Layout>
  </>
);
export default ToursPage;

export const TOURS_BACKGROUND_IMAGE_QUERY = graphql`
  query {
    heroBg: file(relativePath: { eq: "tours.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

ToursPage.propTypes = {
  data: PropTypes.object.isRequired,
};
