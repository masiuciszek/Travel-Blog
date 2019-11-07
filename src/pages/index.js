/* eslint-disable react/display-name */
import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Layout from '../components/Layout';
import SimpleHero from '../components/SimpleHero';
import Banner from '../components/Banner';

export default () => (
  <>
    <Layout>
      <SimpleHero>
        <Banner
          title="Exploring the nature"
          info="traveling around the world and exploring the real you!"
        >
          <AniLink fade to="/tours">
            Explore Tours
          </AniLink>
        </Banner>
      </SimpleHero>
    </Layout>
  </>
);
