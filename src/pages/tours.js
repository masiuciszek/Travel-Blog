import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import StyledHero from '../components/StyledHero';

const Tours = ({ data }) => (
  <>
    <Layout>
      <StyledHero img={data.heroBg.childImageSharp.fluid} />
    </Layout>
  </>
);
export default Tours;

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

Tours.propTypes = {
  data: PropTypes.object.isRequired,
};
