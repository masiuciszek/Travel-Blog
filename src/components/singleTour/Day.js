import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ArrowDown } from 'styled-icons/fa-solid';
import useToggle from '../../hooks/useToggle';
import { fadeIn } from '../../utils/animations';

const StyledDay = styled.div`
  padding: 0.2rem 0;
  h3 {
    width: 100%;
    border-bottom: none !important;
    display: flex;
  }
  .arrow {
    cursor: pointer;
    margin-left: auto;
    display: inline-block;
  }
  .day-info {
    p {
      animation: ${fadeIn} 300ms ease-in-out;
      letter-spacing: 0.1rem;
      line-height: 1.5rem;
      padding: 2rem 0;
    }
  }
`;
const Day = ({ dayData: { day, info } }) => {
  const [showDetail, toggleShowDetail] = useToggle(false);

  return (
    <StyledDay>
      <h3>
        {day}{' '}
        <ArrowDown className="arrow" size="35" onClick={toggleShowDetail} />{' '}
      </h3>
      <div className="day-info">{showDetail && <p>{info}</p>}</div>
    </StyledDay>
  );
};

Day.proptTypes = {
  dayData: PropTypes.shape({
    day: PropTypes.string,
    info: PropTypes.string,
  }),
};

export default Day;
