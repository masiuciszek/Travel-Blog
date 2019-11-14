import React from 'react';
import PropTypes from 'prop-types';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Layout from '../components/Layout';
import StyledHero from '../components/StyledHero';

const Blog = ({ data }) => (
  <>
    <Layout>
      <StyledHero img={data.heroBg.childImageSharp.fluid} />
    </Layout>
  </>
);

Blog.propTypes = {
  data: PropTypes.object.isRequired,
};

export const BLOG_BACKGROUND_IMAGE_QUERY = graphql`
  query {
    heroBg: file(relativePath: { eq: "news.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default Blog;
