import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export default () => (
  <div>
    Hello world Masiu!{' '}
    <AniLink fade to="blog">
      Blog
    </AniLink>{' '}
  </div>
);
