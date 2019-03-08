import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";

const Headings = ({ query }) => {
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
    <Heading>
      {widgetQuery.allMarkdownRemark.edges[`${query}`].node.rawMarkdownBody}
    </Heading>
  );
};

const Heading = styled.h2`
  font-weight: bold;
  font-size: 4.3rem;
  line-height: 2;
  text-align: left;
`;
export default Headings;
