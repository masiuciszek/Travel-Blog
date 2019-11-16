/* eslint-disable import/no-cycle */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Title from '../styled/Title';
import Tour from './Tour';
import { Grid } from '../home/FeaturedTours';

const StyledTourList = styled.div``;

const TourList = ({ tours }) => {
  const [toursData, setToursData] = React.useState([]);
  const [sortedTours, setSortedTours] = React.useState([]);

  React.useEffect(() => {
    setToursData(tours.tours.edges);
    setSortedTours(tours.tours.edges);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <StyledTourList>
      <Title title="Awesome" subtitle="tours" />
      <Grid>
        {sortedTours.map(({ node }) => (
          <Tour key={node.contentful_id} tour={node} />
        ))}
      </Grid>
    </StyledTourList>
  );
};

TourList.propTypes = {
  tours: PropTypes.object.isRequired,
};
export default TourList;
