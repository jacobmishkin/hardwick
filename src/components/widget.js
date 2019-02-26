import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

const WidgetWrapper = styled.div`
  max-width: 450px;
  box-shadow: 0px 8px 12px 4px rgba(23, 23, 23, 0.2);
  padding: 2rem;
  font-size: 1.2rem;
  background-color: white;
  margin-left: 3rem;
  position: relative;
  top: -55px;

  @media (min-width: 480px) {
    font-size: 1.8rem;
    right: -5%;
  }
  @media (min-width: 700px) {
    right: -30%;
  }

  @media (min-width: 1100px) {
    right: -50%;
  }
`;

const widget = () => {
  const widgetQuery = useStaticQuery(graphql`
    query HeaderQuery {
      allMarkdownRemark {
        edges {
          node {
            rawMarkdownBody
          }
        }
      }
    }
  `);

  return (
    <WidgetWrapper>
      <p>
        {widgetQuery.allMarkdownRemark.edges.map(
          edge => edge.node.rawMarkdownBody
        )}
      </p>
    </WidgetWrapper>
  );
};

export default widget;
