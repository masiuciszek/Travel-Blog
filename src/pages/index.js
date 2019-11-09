// @ts-nocheck
/* eslint-disable react/display-name */
import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Layout from '../components/Layout';
import SimpleHero from '../components/SimpleHero';
import Banner from '../components/Banner';
import { BtnShadow } from '../components/styled/Buttons';
import About from '../components/home/About';
import Services from '../components/home/Services';

export default () => (
  <>
    <Layout>
      <SimpleHero>
        <Banner
          title="Exploring the nature"
          info="traveling around the world and exploring the real you!"
        >
          <AniLink fade to="/tours">
            <BtnShadow>Explore Tours</BtnShadow>
          </AniLink>
        </Banner>
      </SimpleHero>
      <Services />
      <About />
    </Layout>
  </>
);
