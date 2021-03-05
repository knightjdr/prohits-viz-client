import React from 'react';

import Link from '../components/link/text/link';

const Main = () => (
  <div>
    <h1>Help pages</h1>
    <p><strong>This help is a work in progress.</strong></p>
    <p>
      ProHits-viz is a suite of web tools designed originally to aid in visualizing
      protein-protein interaction data although it can be used for any data set
      composed of conditions and readouts. The goal of this project is to make
      datasets of any size accessible through interactive visualization and a
      variety of analysis and display options.
    </p>
    <p>
      The navigation menu at left can be used to find the help you need. If you have
      a question not covered by this guide, feel free to contact us at
      {' '}
      <Link to="mailto:contact@prohits-viz.org?Subject=ProHits-viz%20help">
        contact@prohits-viz.org
      </Link>
      .
    </p>
  </div>
);

export default Main;
