// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import styled from 'styled-components';
import { MenuAltRight } from 'styled-icons/boxicons-regular/MenuAltRight';
import { links, icons } from '../constants/utils';
import logo from '../images/logo.svg';
import useToggle from '../hooks/useToggle';

const Navbar = () => {
  const [show, toggleShow] = useToggle(false);

  return (
    <StyledNav show={show}>
      <div className="logo-wrapper">
        <img src={logo} alt="logo" />
        {show && (
          <MobileList>
            {' '}
            <li>hello</li>{' '}
          </MobileList>
        )}
      </div>

      <ul className="large-screen-list">
        {links.map((link, i) => (
          <li key={i}>
            <AniLink fade to={link.path}>
              {link.text}{' '}
            </AniLink>
          </li>
        ))}
      </ul>
      <span className="toggleIcon">
        <MenuAltRight size="35" onClick={toggleShow} />
      </span>
    </StyledNav>
  );
};

Navbar.propTypes = {};

const StyledNav = styled.nav`
  display: flex;
  padding: 1rem;
  height: ${props => (props.show ? '216px' : 'auto')};
  span {
    cursor: pointer;
  }
  .large-screen-list {
    display: flex;
    margin-left: auto;
    li {
      margin-top: 2rem;
      a {
        margin: 0.4rem;
        font-size: 1.3rem;
        text-transform: uppercase;
        color: ${props => props.theme.primaryColor};
        transition: ${props => props.theme.mainTransition};
      }
    }
  }
  .toggleIcon {
    margin-left: auto;
  }

  @media (min-width: 600px) {
    .toggleIcon {
      padding: 0.5rem 1.4rem;
      display: none;
    }
  }
  @media (max-width: 600px) {
    .large-screen-list {
      display: none;
    }
  }
`;

const MobileList = styled.ul`
  transition: ${props => props.theme.mainTransition};
`;

export default Navbar;
