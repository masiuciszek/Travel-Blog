import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';

export const CONTENTFUL_TOUR_QUERY = graphql`
  query($slug: String!) {
    contentfulTour(slug: { eq: $slug }) {
      name
      price
      country
      slug
      days
      start(formatString: "dddd MMMM Do, YYYY")
      description {
        description
      }
      journey {
        day
        info
      }
      images {
        fluid {
          src
        }
      }
    }
  }
`;

const TourTemplate = ({ data }) => {
  console.log(data.contentfulTour);
  const {
    name,
    price,
    country,
    slug,
    description,
    images,
    journey,
    start,
  } = data.contentfulTour;
  return (
    <>
      <Layout>
        <h1>{name}</h1>
      </Layout>
    </>
  );
};
export default TourTemplate;

TourTemplate.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    slug: PropTypes.string,
    country: PropTypes.string,
    start: PropTypes.string,
    description: PropTypes.object.isRequired,
    images: PropTypes.arrayOf(PropTypes.string),
    journey: PropTypes.arrayOf(PropTypes.object),
  }),
};
