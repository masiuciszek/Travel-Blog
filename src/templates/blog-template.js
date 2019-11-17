import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Img from 'gatsby-image';
import { MoneyBillAlt, Map } from 'styled-icons/fa-solid';
import Layout from '../components/Layout';
import StyledHero from '../components/StyledHero';
import { BtnShadow } from '../components/styled/Buttons';

const StyledBlog = styled.section`
  padding: 1rem;
`;

const BlogTemplate = ({ data }) => {
  console.log(data);
  // const {
  //   title,
  //   published,
  //   text: { json },
  // } = data;
  // console.log(title);
  return (
    <>
      <Layout>
        <StyledBlog>
          <h1>{data.title}</h1>
        </StyledBlog>
      </Layout>
    </>
  );
};

BlogTemplate.propTypes = {};

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
