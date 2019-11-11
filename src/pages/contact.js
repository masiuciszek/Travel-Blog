import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import StyledHero from '../components/StyledHero';
import Layout from '../components/Layout';
import Contact from '../components/contact/Contact';

const ContactPage = ({ data }) => (
  <>
    <Layout>
      <StyledHero img={data.contactBG.childImageSharp.fluid} />
      <Contact />
    </Layout>
  </>
);

export const CONTACT_BACKGROUND_IMAGE_QUERY = graphql`
  query {
    contactBG: file(relativePath: { eq: "connectBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

ContactPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ContactPage;