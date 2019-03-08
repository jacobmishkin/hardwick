import React from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

import Header from './header.js';
import lines from '../images/lines.webp';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            description
          }
        }
      }
    `}
    render={data => (
      <>
        <GlobalStyle />
        <Header description={data.site.siteMetadata.description} />
        <Inner>
          <Lines>
            <main>{children}</main>
          </Lines>
        </Inner>
        <footer>Hardwick © {new Date().getFullYear()}</footer>
      </>
    )}
  /> // end of query
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 590px) {
    padding: 0 2rem;
  }
`;

const Lines = styled.div`
  background: repeat-y center center;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  background-image: url(${lines});
`;

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "AvenirLTW01-35Light";
    src: font-url("../fonts/AvenirLTW01-35Light.woff2") format("woff2"),
    font-weight: 300;
    font-style: normal;
  }

  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    font-size: 10px;
    box-sizing: border-box;
    overflow-y: scroll;
    padding: 0;
    margin: 0;
  }

  *, *:before, *:after  {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: "AvenirLTW01-35Light";
    color: hsla(0, 0%, 0%, 0.8);
    font-size: 1.5rem;
    font-weight: 300;
    font-style: normal;
    word-wrap: break-word;
    font-kerning: normal;
    -moz-font-feature-settings: "kern", "liga", "clig", "calt";
    -ms-font-feature-settings: "kern", "liga", "clig", "calt";
    -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
    font-feature-settings: "kern", "liga", "clig", "calt";
    line-height: 2;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  main,
  menu,
  nav,
  section,
  summary {
    display: block;
  }

  audio,
  canvas,
  progress,
  video {
    display: inline-block;
  }

  a {
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
  }

  a:active,
  a:hover {
    outline-width: 0;
  }

  svg:not(:root) {
    overflow: hidden;
  }


  img {
    max-width: 100%;
    padding: 0;
    margin: 0 0 0 1.45rem;
    border-style: none
  }

  h1 {
    padding: 0;
    margin:0 0 0 1.45rem;
    color: inherit;
    font-weight: bold;
    text-rendering: optimizeLegibility;
    font-size: 2.25rem;
    line-height: 1.1;
  }

  h2 {
    padding: 0;
    margin:0 0 0 1.45rem;
    color: inherit;
    font-weight: bold;
    text-rendering: optimizeLegibility;
    font-size: 1.62671rem;
    line-height: 1.1;
  }

  h3 {
    padding: 0;
    margin:0 0 0 1.45rem;
    color: inherit;
    font-weight: bold;
    text-rendering: optimizeLegibility;
    font-size: 1.38316rem;
    line-height: 1.1;
  }

  ul {
    margin-left: 1.45rem;
    margin-right: 0;
    margin-top: 0;
    padding: 0;
    margin-bottom: 1.45rem;
    list-style-position: outside;
    list-style-image: none;
  }

  ol {
    margin-left: 1.45rem;
    margin-bottom: 1.45rem;
    padding: 0;
    list-style-position: outside;
    list-style-image: none;
  }

  p {
    padding: 0;
    margin: 0;
  }

  iframe {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
  }


  strong {
    font-weight: bold;
  }

  li {
    margin-bottom: calc(1.45rem / 2);
  }

  ol li {
    padding-left: 0;
  }

  ul li {
    padding-left: 0;
  }

  li > ol {
    margin-left: 1.45rem;
    margin-bottom: calc(1.45rem / 2);
    margin-top: calc(1.45rem / 2);
  }

  li > ul {
    margin-left: 1.45rem;
    margin-bottom: calc(1.45rem / 2);
    margin-top: calc(1.45rem / 2);
  }

  blockquote *:last-child {
    margin-bottom: 0;
  }

  li *:last-child {
    margin-bottom: 0;
  }

  p *:last-child {
    margin-bottom: 0;
  }

  li > p {
    margin-bottom: calc(1.45rem / 2);
  }

  @media only screen and (max-width: 480px) {
    html {
      font-size: 100%;
    }
  }
`;

export default Layout;
