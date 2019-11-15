import React from 'react';
import PropTypes from 'prop-types';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Tour from '../tours/Tour';
import Title from '../styled/Title';
import { BtnPrimary } from '../styled/Buttons';
import Tours from '../tours/Tours';

const StyledFeaturedTours = styled.div`
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    width: 100%;
    text-align: center;
  }
`;

const Center = styled.div`
  width: 80vw;
  margin: 3rem auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
`;

const GET_FEATURED_TOURS = graphql`
  query {
    featuredTours: allContentfulTour(filter: { featured: { eq: true } }) {
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

const FeaturedTours = () => {
  const featuredToursData = useStaticQuery(GET_FEATURED_TOURS);
  const { edges } = featuredToursData.featuredTours;

  return (
    <StyledFeaturedTours>
      <Title title="Special Tours" subtitle="tours" />
      <Center>
        {edges.map(tour => (
          <Tour key={tour.node.contentful_id} tour={tour.node} />
        ))}
      </Center>
      <AniLink fade to="/tours">
        {' '}
        <BtnPrimary>Tours</BtnPrimary>{' '}
      </AniLink>
    </StyledFeaturedTours>
  );
};

FeaturedTours.propTypes = {};

export default FeaturedTours;
