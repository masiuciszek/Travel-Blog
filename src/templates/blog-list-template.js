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
  /*  */
`;

const BlogListTemplate = () => {
  let a;
  return (
    <Layout>
      <h1>apa</h1>
    </Layout>
  );
};

BlogListTemplate.propTypes = {};

export default BlogListTemplate;
