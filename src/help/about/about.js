import React from 'react';

import FundingLinks from '../../home/footer/funding-links';
import Link from '../../components/link/text/link';

const About = () => (
  <div>
    <h1>About</h1>
    <p>
      ProHits-viz is developed by the laboratory of
      {' '}
      <Link to="https://gingraslab.lunenfeld.ca">
        Dr Anne-Claude Gingras
      </Link>
      {' '}
      at the Lunenfeld-Tanenbaum Research Institute in Toronto.
    </p>
    <p>
      Any questions not addressed by this help documentation should be sent to
      {' '}
      <Link to="mailto:contact@prohits-viz.org?Subject=ProHits-viz%20help">
        contact@prohits-viz.org
      </Link>
      .
    </p>
    <p>
      Funding for this project has been provided by:
    </p>
    <div className="help__inner-funding">
      <FundingLinks />
    </div>
  </div>
);

export default About;
