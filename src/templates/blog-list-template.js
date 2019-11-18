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
  .links {
    width: 80vw;
    margin: 0 auto 5rem auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .link,
    .link-active {
      background: ${props => props.theme.black};
      color: ${props => props.theme.mainWhite};
      width: 3rem;
      height: 3rem;
      box-shadow: ${props => props.theme.lightShadow};
      transition: ${props => props.theme.quickTransition};
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 0.2rem;
      &:hover {
        box-shadow: ${props => props.theme.darkShadow};
        background: ${props => props.theme.primaryColor};
      }
    }
    .link-active {
      background: ${props => props.theme.mainWhite};
      color: ${props => props.theme.black};
      border: 2px solid ${props => props.theme.black};
    }
  }
`;

const BlogListTemplate = ({ data, pageContext }) => {
  const { edges } = data.posts;
  const { currentPage, numOfPages } = pageContext;
  console.log(numOfPages);

  return (
    <Layout>
      <BlogListTemplateStyled>
        <Title title="latest" subtitle="Blogs" />
        <div className="grid">
          {edges.map(blog => (
            <BlogCard key={blog.node.id} blog={blog.node} />
          ))}
        </div>
        <section className="links">
          {Array.from({ length: numOfPages }, (_, i) => (
            <AniLink
              fade
              to={`/blog-list/${i === 0 ? '' : i + 1}`}
              className={i + 1 === currentPage ? 'link-active' : 'link'}
            >
              {i + 1}
            </AniLink>
          ))}
        </section>
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
  pageContext: PropTypes.shape({
    currentPage: PropTypes.number,
    isCreatedByStatefulCreatePages: PropTypes.bool,
    limit: PropTypes.number,
    numOfPages: PropTypes.number,
    skip: PropTypes.number,
  }),
};
export default BlogListTemplate;
