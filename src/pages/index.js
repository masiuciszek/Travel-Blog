/* eslint-disable react/display-name */
import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Layout from '../components/Layout';

export default () => (
  <>
    <Layout>
      Hello world Masiu!{' '}
      <AniLink fade to="blog">
        Blog
      </AniLink>{' '}
    </Layout>
  </>
);
