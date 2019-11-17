import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Img from 'gatsby-image';
import { MoneyBillAlt, Map } from 'styled-icons/fa-solid';
import Layout from '../components/Layout';
import StyledHero from '../components/StyledHero';
import { BtnShadow } from '../components/styled/Buttons';
import Day from '../components/singleTour/Day';

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
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`;

const StyledSection = styled.section`
  padding: 3rem 1rem;
  .center {
    width: 80vw;
    margin: 0 auto;
    h3 {
      font-size: 1.6rem;
      text-transform: capitalize;
      border-bottom: 2px solid ${props => props.theme.primary};
    }
  }
  .images {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    margin-bottom: 2rem;
  }
  .img {
    box-shadow: ${props => props.theme.lightShadow};
  }
  .tours-cta {
    background: ${props => props.theme.black};

    &:hover {
      background: ${props => props.theme.primaryColor};
      color: ${props => props.theme.black};
    }
  }
  p {
    letter-spacing: 0.1rem;
    line-height: 1.5rem;
  }
`;

const InfoStyles = styled.div`
  padding: 3rem 1rem;
  display: flex;
  justify-content: space-between;
  @media (max-width: 900px) {
    flex-direction: column;
  }
  p {
    margin: 0.5rem 1rem;
    font-size: 1.4rem;
    display: flex;
  }
  svg {
    color: ${props => props.theme.primaryColor};
    margin: 0 1rem;
  }
`;

const StyledJourney = styled.div`
  margin: 3rem 0;
`;

const TourTemplate = ({ data }) => {
  const {
    name,
    price,
    country,
    slug,
    description,
    images,
    journey,
    days,
    start,
  } = data.contentfulTour;

  const [mainImage, ...restOfTheImages] = images;

  return (
    <>
      <Layout>
        <StyledHero img={mainImage.fluid} />
        <StyledSection>
          <div className="center">
            <h3>{name}</h3>
            <div className="images">
              {restOfTheImages.map((tour, index) => (
                <Img
                  key={index}
                  fluid={tour.fluid}
                  alt="single tour"
                  className="img"
                />
              ))}
            </div>
            <InfoStyles>
              <p>
                <MoneyBillAlt size="35" />
                Starting from ${price} all inclusive
              </p>
              <p>
                <Map size="35" />
                {country}
              </p>
            </InfoStyles>
            <h4>Next Tour : {start}</h4>
            <h4>Days : {days}</h4>
            <p>{description.description}</p>
            <h2>Daily Schedule</h2>
            <StyledJourney>
              {journey.map(j => (
                <Day key={j.day} dayData={j} />
              ))}
            </StyledJourney>
            <AniLink fade to="/tours">
              <BtnShadow className="tours-cta">Tours</BtnShadow>
            </AniLink>
          </div>
        </StyledSection>
      </Layout>
    </>
  );
};
export default TourTemplate;

TourTemplate.propTypes = {
  data: PropTypes.shape({
    contentfulTour: PropTypes.object,
    name: PropTypes.string,
    price: PropTypes.number,
    days: PropTypes.number,
    slug: PropTypes.string,
    country: PropTypes.string,
    start: PropTypes.string,
    description: PropTypes.object,
    images: PropTypes.arrayOf(PropTypes.string),
    journey: PropTypes.arrayOf(PropTypes.object),
  }),
};
