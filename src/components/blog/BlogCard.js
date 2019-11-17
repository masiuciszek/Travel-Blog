import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Image from 'gatsby-image';
import { BtnShadow } from '../styled/Buttons';

const StyledBlogCard = styled.article`
  box-shadow: ${props => props.theme.lightShadow};
  transition: ${props => props.theme.mainTransition};
  position: relative;
  .img-wrapper {
    height: 100%;

    h5 {
      background: ${props => props.theme.primaryShadow};
      position: absolute;
      top: 6rem;
      color: ${props => props.theme.mainWhite};
      padding: 0.3rem 0;
      width: 12rem;
      border-radius: 0.4rem;
    }
    &:hover {
      .gatsby-image-wrapper {
        opacity: 0.3;
      }
    }
  }
  .read-more-link {
    display: none;
    transition: ${props => props.theme.mainTransition};
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    span {
      opacity: 1;
      padding: 0.3rem 0.5rem;
      font-size: 1rem;
      text-transform: uppercase;
    }
  }
  .footer {
    padding: 1rem 0.1rem;
    display: flex;
    h4 {
      text-transform: capitalize;
    }
  }
  &:hover {
    box-shadow: ${props => props.theme.darkShadow};
    .read-more-link {
      display: block;
      z-index: 3;
    }
  }
`;

const BlogCard = ({ blog }) => {
  const {
    image: { fluid },
    title,
    published,
    slug,
  } = blog;

  return (
    <StyledBlogCard>
      <div className="img-wrapper">
        <Image fluid={fluid} className="img" alt="blog-img" />
        <AniLink fade to={`/blog/${slug}`} className="read-more-link">
          <BtnShadow>Read More</BtnShadow>
        </AniLink>
        <h5>{published}</h5>
      </div>
      <div className="footer">
        <h4>{title}</h4>
      </div>
    </StyledBlogCard>
  );
};

BlogCard.propTypes = {
  blog: PropTypes.shape({
    published: PropTypes.string,
    title: PropTypes.string,
    slug: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired,
  }),
};

export default BlogCard;
