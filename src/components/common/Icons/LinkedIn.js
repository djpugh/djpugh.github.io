import React from 'react';

const LinkedIn = ({ width = 16, height = 16, color = '#000' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width={width} height={height}>
    <path
      fill={color}
      fillRule="evenodd"
      d="   M583.659,328.849H419.625c-19.599,0-35.487,15.888-35.487,35.487v164.015c0,19.599,15.888,35.486,35.487,35.486h164.033   c19.599,0,35.487-15.888,35.487-35.486V364.337C619.146,344.738,603.257,328.849,583.659,328.849z"
    ></path>
    <path
      fill={color}
      fillRule="evenodd"
      d="   M557.056,338.895H446.227c-29.337,0-52.955,23.81-52.955,53.385v108.127c0.95,23.087,4.603,8.491,11.555-17.075   c8.081-29.713,34.396-55.682,66.445-75.145c24.461-14.855,51.84-24.341,101.679-25.244   C601.216,382.432,598.721,346.26,557.056,338.895z"
    ></path>
  </svg>
);

export default LinkedIn;

