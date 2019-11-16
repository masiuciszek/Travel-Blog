// @ts-nocheck
import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import styled from 'styled-components';
import { MenuAltRight } from 'styled-icons/boxicons-regular/MenuAltRight';
import { links, icons } from '../constants/utils';
import useToggle from '../hooks/useToggle';
import { fadeFromTopDown } from '../utils/animations';

const Navbar = () => {
  const [show, toggleShow] = useToggle(false);

  return (
    <StyledNav>
      <div className="logo-wrapper">
        <AniLink fade to="/">
          <h4>
            Masiu's <span>Journey</span>
          </h4>
        </AniLink>
        {show && (
          <MobileList className="mobile-list">
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
        <div className="icons">
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
  align-items: center;
  position: relative;
  .logo-wrapper {
    h4 {
      border-bottom: 2px solid ${props => props.theme.primaryColor};
      font-size: 1.4rem;
      color: 2px solid ${props => props.theme.black};
      span {
        color: ${props => props.theme.primaryColor};
      }
    }
  }
  span {
    cursor: pointer;
  }
  .large-screen-list {
    display: flex;
    margin-left: auto;
    align-items: center;

    li {
      /* margin-top: 2rem; */
      a {
        margin: 0.4rem;
        font-size: 1.1rem;
        text-transform: uppercase;
        color: ${props => props.theme.primaryColor};
        transition: ${props => props.theme.mainTransition};
        &:hover {
          color: ${props => props.theme.black};
        }
      }
    }
    .icons {
      margin: 0 1rem;
      a {
        color: ${props => props.theme.black};
        margin: 1rem;
        display: inline-block;
        transition: ${props => props.theme.mainTransition};
        &:hover {
          color: ${props => props.theme.primaryColor};
          transform: scale(1.1);
        }
      }
    }
  }
  .toggleIcon {
    margin-left: auto;
    position: absolute;
    top: 1rem;
    right: 1rem;
  }

  @media (min-width: 750px) {
    .toggleIcon {
      padding: 0.5rem 1.4rem;
      display: none;
    }
    .mobile-list {
      display: none;
    }
  }
  @media (max-width: 750px) {
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
      color: ${props => props.theme.mainWhite};
      background: ${props => props.theme.black};
    }
  }
`;

export default Navbar;
