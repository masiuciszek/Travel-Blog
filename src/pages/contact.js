import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import StyledHero from '../components/StyledHero';
import Layout from '../components/Layout';
import Contact from '../components/contact/Contact';
import Seo from '../components/Seo';

const ContactStyled = styled.div`
  padding: 4rem 0;
`;

const ContactPage = ({ data }) => (
  <>
    <Layout>
      <Seo title="Contact" description="Contact Us" />
      <StyledHero img={data.contactBG.childImageSharp.fluid} />
      <ContactStyled>
        <Contact />
      </ContactStyled>
    </Layout>
  </>
);

export const CONTACT_BACKGROUND_IMAGE_QUERY = graphql`
  query {
    contactBG: file(relativePath: { eq: "bkk2.jpg" }) {
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
