/* eslint-disable react/display-name */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Layout from '../components/Layout';
import { BtnShadow } from '../components/styled/Buttons';

const StyledBlog = styled.section`
  padding: 7rem 0;

  .grid {
    width: 80vw;
    margin: 0 auto;
    a {
      span {
        background: ${props => props.theme.black};
        &:hover {
          background: ${props => props.theme.primaryColor};
          border: 2px solid ${props => props.theme.black};
        }
      }
    }
  }
  .main-title {
    font-size: 3rem;
    text-transform: capitalize;
    border-bottom: 2px solid ${props => props.theme.mainBlack};
  }
`;

const StyledArticle = styled.article`
  /* padding: 1rem; */
  margin: 2rem 0;
  img {
    max-width: 70vw;
  }
  p {
    a {
      color: #333;
    }
  }
`;

const BlogTemplate = ({ data }) => {
  const {
    title,
    published,
    text: { json },
  } = data.post;

  return (
    <>
      <Layout>
        <StyledBlog>
          <div className="grid">
            <h1 className="main-title">{title}</h1>
            <h4>Published at: {published}</h4>
            <StyledArticle>{documentToReactComponents(json)}</StyledArticle>
            <AniLink fade to="/blog">
              <BtnShadow>Posts</BtnShadow>
            </AniLink>
          </div>
        </StyledBlog>
      </Layout>
    </>
  );
};

BlogTemplate.propTypes = {
  data: PropTypes.shape({
    post: PropTypes.shape({
      title: PropTypes.string.isRequired,
      published: PropTypes.string.isRequired,
      text: PropTypes.object.isRequired,
    }),
  }),
};

export const query = graphql`
  query getPost($slug: String!) {
    post: contentfulPost(slug: { eq: $slug }) {
      title
      published(formatString: "MMMM Do, YYYY")
      text {
        json
      }
    }
  }
`;

export default BlogTemplate;
