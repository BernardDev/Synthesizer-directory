import {css, keyframes} from 'styled-components';

const animateYin = keyframes`
from {
   opacity: 0;
   transform: translateY(-200px);
 }
 to {
   opacity: 1;
   transform: translateY(0px);
 };
`;

const animateYout = keyframes`
from {
   opacity: 1;
   transform: translateY(0px);
 }
 to {
   opacity: 0;
   transform: translateY(-200px);
 };
`;

export const animateIn = css`
  animation: ${animateYin} 0.8s ease;
  animation-fill-mode: forwards;
`;

export const animateOut = css`
  animation: ${animateYout} 0.8s ease;
  animation-fill-mode: forwards;
`;
