import { Link } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Logo from './Logo';
import bgimage from '../images/officebg.jpg';
import Square from './styles/Square';

const HeaderWrapper = styled.header`
  background-image: url(${bgimage});
  background-size: cover;
  height: 100%;
  height: 75vh;
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const HeaderBg = styled.div`
  height: 100%;
  background: linear-gradient(
    0.5turn,
    hsla(48, 95%, 40%, 0.4),
    hsla(42, 87%, 55%, 0.7)
  );
  padding: 1.45rem 1.0875rem;
`;

const HeaderContent = styled.div`
  display: grid;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  padding-top: 2rem;

  h1 {
    font-size: 3rem;
    line-height: 2;
    font-weight: 100;
  }
`;

const Header = ({ description }) => (
  <HeaderWrapper>
    <HeaderBg>
      <Inner>
        <Link to="/" style={{ display: `inlineBlock`, height: `100%` }}>
          <Logo
            height="110px"
            width="110px"
            viewBox="0 0 160 170"
            fill="black"
            fontSize="30"
            circleStroke="black"
          />
        </Link>
      </Inner>
      <HeaderContent>
        <h1>{description}</h1>
      </HeaderContent>
      <Square top="246px" left="150px" />
      <Square top="130px" left="175px" />
    </HeaderBg>
  </HeaderWrapper>
);

Header.propTypes = {
  description: PropTypes.string.isRequired
};

export default Header;
