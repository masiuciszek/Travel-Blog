import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import TourList from './TourList';

const TOURS_QUERY = graphql`
  query {
    tours: allContentfulTour {
      edges {
        node {
          name
          price
          slug
          country
          contentful_id
          days
          images {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;

const Tours = () => {
  const toursData = useStaticQuery(TOURS_QUERY);
  return (
    <>
      <TourList tours={toursData} />
    </>
  );
};

Tours.propTypes = {};

export default Tours;
