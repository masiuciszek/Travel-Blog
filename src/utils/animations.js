import styled, { keyframes } from 'styled-components';

export const fadeIn = keyframes`
  0% {
    opacity: 0;

  }
  100% {
    opacity: 1;

  }
`;

export const bounce = keyframes`
 0% {
      top: 0;
    }
    25% {
      top: 100px;
    }
    50% {
      top: 0;
    }
    75% {
      top: 100px;
    }
    100% {
      top: 0;
    }
`;

export const fadeFromTopDown = keyframes`
0% {
    opacity:0;
    transform:  translate(0px,-25px)  ;
  }
  100% {
    opacity:1;
    transform:  translate(0px,0px)  ;
  }
`;
