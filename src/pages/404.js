// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import { BtnShadow } from '../components/styled/Buttons';

const StyledError = styled.div`
  background-image: linear-gradient(
    to left top,
    #3fd0d4,
    #35bec2,
    #2cadb0,
    #229c9f,
    #188b8e
  );
  min-height: calc(100vh - 62px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ErrorPage = () => (
  <Layout>
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
