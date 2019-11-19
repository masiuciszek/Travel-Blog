import React from 'react';
import PropTypes from 'prop-types';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Layout from '../components/Layout';
import StyledHero from '../components/StyledHero';
import BlogList from '../components/blog/BlogList';
import Seo from '../components/Seo';

const BlogPage = ({ data }) => (
  <>
    <Layout>
      <Seo title="Blog" description="Stories" />
      <StyledHero img={data.heroBg.childImageSharp.fluid} />
      <BlogList />
    </Layout>
  </>
);

BlogPage.propTypes = {
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

export default BlogPage;
