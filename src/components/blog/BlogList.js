/* eslint-disable no-use-before-define */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import BlogCard from './BlogCard';
import Title from '../styled/Title';

const StyledBlog = styled.section`
  .grid {
    width: 80vw;
    margin: 3rem auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
  }
`;

const BlogList = () => {
  const blogPostsData = useStaticQuery(GET_POSTS_QUERY);
  const { edges } = blogPostsData.allContentfulPost;

  return (
    <StyledBlog>
      <Title title="Master" subtitle="Blog" />
      <div className="grid">
        {edges.map(blog => (
          <BlogCard key={blog.node.id} blog={blog.node} />
        ))}
      </div>
    </StyledBlog>
  );
};

BlogList.propTypes = {};

const GET_POSTS_QUERY = graphql`
  query {
    allContentfulPost {
      edges {
        node {
          published(formatString: "MMMM do, YYYY")
          title
          slug
          id: contentful_id
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

export default BlogList;
