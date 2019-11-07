import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { links, icons } from '../constants/utils';

const StyledFooter = styled.footer`
  margin-top: auto;
  background: ${props => props.theme.mainBlack};
  padding: 2rem;
  text-align: center;
  color: ${props => props.theme.mainWhite};
  .links,
  .social {
    text-transform: uppercase;
    a {
      color: ${props => props.theme.mainWhite};
      margin: 0.5rem 1rem;
      display: inline-block;
      letter-spacing: ${props => props.theme.mainSpacing};
      transition: ${props => props.theme.mainTransition};
      font-weight: bold;
      &:hover {
        color: ${props => props.theme.primaryColor};
      }
    }
  }
  .copy-right {
    padding: 0.3rem;
    small {
      letter-spacing: ${props => props.theme.mainSpacing};
    }
  }
`;

const Footer = () => (
  <StyledFooter>
    <div className="links">
      {links.map((link, index) => (
        <AniLink key={index} fade to={link.path}>
          {link.text}
        </AniLink>
      ))}
    </div>
    <div className="social">
      {icons.map((icon, index) => (
        <a
          key={index}
          href={icon.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {icon.icon}
        </a>
      ))}
    </div>
    <div className="copy-right">
      <small>
        copyright &copy; backroads travel company {new Date().getFullYear()}
        all rights reserved
      </small>
    </div>
  </StyledFooter>
);

Footer.propTypes = {};

export default Footer;
