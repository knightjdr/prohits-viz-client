import React from 'react';

import Link from '../../components/link/text/link';

const API = () => (
  <div className="help__api">
    <h1>API</h1>
    <p>
      Our API allows third-party websites and tools to visualize images using the interactive
      viewers at ProHits-viz. These images can be dot plots, heat maps, scatter plots or
      circular heat maps. There are three steps in this process:
    </p>
    <ol>
      <li>Format data to meet the requirements for the viewer</li>
      <li>Submit the data to our API</li>
      <li>Open the returned link or provide it to the user</li>
    </ol>
    <p>
      The API is restricted but you can request access by contacting us at
      {' '}
      <Link to="mailto:contact@prohits-viz.org?Subject=ProHits-viz%20help">
        contact@prohits-viz.org
      </Link>
      . More details on the API and how to format requests can be found on
      {' '}
      <Link to="https://github.com/knightjdr/prohits-viz-api">
        GitHub
      </Link>
      .
    </p>
  </div>
);

export default API;
