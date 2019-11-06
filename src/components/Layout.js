// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styled/GlobalStyles';
import Navbar from './Navbar';
import Footer from './Footer';

export const theme = {
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
  primaryColor: '#3fd0d4',
  mainWhite: '#fff',
  offWhite2: '#f7f7f7',
  mainBlack2: '#222',
  mainGrey: '#ececec',
  darkGrey: '#afafaf',
  mainTransition: 'all 0.3s linear',
  mainSpacing: '4px',
  lightShadow: '2px 5px 3px 0px rgba(0, 0, 0, 0.5)',
  darkShadow: '4px 10px 5px 0px rgba(0, 0, 0, 0.5)',
};

const Layout = ({ children }) => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  </>
);

Layout.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Layout;
