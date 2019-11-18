import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Layout from '../components/Layout';
import { BtnShadow } from '../components/styled/Buttons';
import BlogCard from '../components/blog/BlogCard';
import Title from '../components/styled/Title';

const BlogListTemplateStyled = styled.section`
  padding: 4rem 0;
  .grid {
    width: 80vw;
    margin: 3rem auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
  }
`;

const BlogListTemplate = ({ data }) => {
  const { edges } = data.posts;

  console.log(edges);
  return (
    <Layout>
      <BlogListTemplateStyled>
        <Title title="latest" subtitle="Blogs" />
        <div className="grid">
          {edges.map(blog => (
            <BlogCard key={blog.node.id} blog={blog.node} />
          ))}
        </div>
      </BlogListTemplateStyled>
    </Layout>
  );
};

BlogListTemplate.propTypes = {};

export const pageQuery = graphql`
  # Write your query or mutation here
  query getBlogPosts($skip: Int!, $limit: Int!) {
    posts: allContentfulPost(
      skip: $skip
      limit: $limit
      sort: { fields: published, order: DESC }
    ) {
      edges {
        node {
          slug
          title
          id: contentful_id
          published(formatString: "MMMM Do, YYYY")
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`;

BlogListTemplate.propTypes = {
  data: PropTypes.shape({
    posts: PropTypes.objectOf(PropTypes.array),
  }),
};
export default BlogListTemplate;
