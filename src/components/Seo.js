import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO_QUERY = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        author
        twitterUsername
        defaultImage: image
        siteUrl
      }
    }
  }
`;

const Seo = ({ title, description, pathname, image, article }) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(SEO_QUERY);

  const {
    defaultTitle,
    defaultDescription,
    author,
    twitterUsername,
    defaultImage,
    siteUrl,
  } = siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname || '/'}`,
  };

  return (
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      title={`${title} | ${defaultTitle}`}
    >
      <meta name="description" content={description || defaultDescription} />
      <meta name="image" content={defaultImage} />
      {siteUrl && <meta property="og:url" content={siteUrl} />}
      {(article ? true : null) && <meta property="og:type" content="article" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}

      <meta name="twitter:card" content="summary_large_image" />
      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  );
};

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  pathname: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
};

Seo.defaultProps = {
  title: "Marcell's TravelBlog",
  description: 'Travel Blog',
  pathname: null,
  image: null,
  article: false,
};

export default Seo;
