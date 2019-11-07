// @ts-nocheck
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import styled from 'styled-components';
import { MenuAltRight } from 'styled-icons/boxicons-regular/MenuAltRight';
import { links, icons } from '../constants/utils';
import logo from '../images/logo.svg';
import useToggle from '../hooks/useToggle';
import { fadeFromTopDown } from '../utils/animations';

const Navbar = () => {
  const [show, toggleShow] = useToggle(false);
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    const handleWidth = e => {
      console.log('resized to: ', window.innerWidth, 'x', window.innerHeight);
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };

    window.addEventListener('resize', handleWidth);
  }, [dimensions]);

  console.log(dimensions);

  return (
    <StyledNav>
      <div className="logo-wrapper">
        <img src={logo} alt="logo" />
        {show && (
          <MobileList>
            {' '}
            {links.map((link, index) => (
              <li key={index}>
                <AniLink fade to={link.path}>
                  {link.text}{' '}
                </AniLink>
              </li>
            ))}
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
  animation: ${fadeFromTopDown} ease-in-out 0.5s;
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
        font-size: 1.1rem;
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
  animation: ${fadeFromTopDown} ease-in-out 1.3s;

  li {
    margin: 0.4rem;
  }
  a {
    margin: 0.4rem;
    font-size: 1rem;
    padding: 0.2rem;
    text-transform: uppercase;
    color: ${props => props.theme.primaryColor};
    transition: ${props => props.theme.mainTransition};
    &:hover {
      background: ${props => props.theme.black};
    }
  }
`;

export default Navbar;
