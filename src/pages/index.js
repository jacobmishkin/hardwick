import React from 'react';

import Layout from '../components/layout';
import Widget from '../components/widget';
import SEO from '../components/seo';
import Headings from '../components/headings';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Widget />
    <div style={{ maxWidth: `450px`, marginBottom: `1.45rem` }}>
      <Headings query="1" />
    </div>
  </Layout>
);

export default IndexPage;
