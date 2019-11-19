// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import { BtnShadow } from '../components/styled/Buttons';
import Seo from '../components/Seo';

const StyledError = styled.div`
  background-image: linear-gradient(
    to left top,
    #3233,
    #353223,
    rgba(217, 81, 0, 0.6),
    #d95100,
    #3233
  );
  min-height: calc(100vh - 62px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ErrorPage = () => (
  <Layout>
    <Seo title="404" description="Dead End Please Had Back, 404 Page!" />
    <StyledError>
      <Banner title="ooopss , page not found">
        <AniLink fade to="/">
          <BtnShadow>Back home</BtnShadow>
        </AniLink>
      </Banner>
    </StyledError>
  </Layout>
);

ErrorPage.propTypes = {};

export default ErrorPage;
