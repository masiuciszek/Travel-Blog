import React from 'react';
import { Facebook, Twitter, Instagram } from 'styled-icons/feather';
import { Wallet, Navigation, Palette } from 'styled-icons/boxicons-regular';
// import { FaWallet, FaTree, FaSocks } from "react-icons/fa"

export const icons = [
  {
    icon: <Facebook size="30" />,
    url: 'https://www.marcellable.com/',
  },
  {
    icon: <Twitter size="30" />,
    url: 'https://twitter.com/CiszekMarcell',
  },
  {
    icon: <Instagram size="30" />,
    url: 'https://www.instagram.com/masiuciszek/?hl=sv',
  },
];

export const links = [
  {
    path: '/',
    text: 'home',
  },
  {
    path: '/tours',
    text: 'tours',
  },
  {
    path: '/blog',
    text: 'blog',
  },
  {
    path: '/contact',
    text: 'contact',
  },
];

export const servicesData = [
  {
    icon: <Wallet size="25" />,
    title: 'saving money',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, earum. ',
  },
  {
    icon: <Navigation size="25" />,
    title: "endless destination's",
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, earum. ',
  },
  {
    icon: <Palette size="25" />,
    title: 'amazing comfort',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, earum. ',
  },
];
