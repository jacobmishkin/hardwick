import React from 'react';
import PropTypes from 'prop-types';

const Logo = ({ height, width, viewBox, fill, fontSize, circleStroke }) => (
  <svg height={height} viewBox={viewBox} width={width}>
    <g fill="none">
      <text fill={fill} fontSize={fontSize} fontWeight="700">
        <tspan x="12.096" y="82">
          Hardwick
        </tspan>
      </text>
      <circle cx="75" cy="75" r="75" stroke={circleStroke} />
    </g>
  </svg>
);
Logo.propTypes = {
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  viewBox: PropTypes.string.isRequired,
  fill: PropTypes.string.isRequired,
  fontSize: PropTypes.string.isRequired,
  circleStroke: PropTypes.string.isRequired,
};

export default Logo;
