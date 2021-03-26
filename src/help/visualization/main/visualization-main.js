import React from 'react';

const Visualization = () => (
  <div>
    <p>
      ProHits-viz has interactive viewers to support the different images types we generate. These
      viewers are intended to make it easy to explore, modify and perform simple analysis directly
      on generated images.
    </p>
    <p>
      The three types of viewers and the analyses they are associated with are:
    </p>
    <ol className="help__inner-list-heading">
      <li>
        <span>heat map/dot plot:</span>
        visualizes images from the dot plot and correlation tools
      </li>
      <li>
        <span>scatter plot:</span>
        visualizes images from the condition-condition and specificity tools
      </li>
      <li>
        <span>circular heat map:</span>
        visualizes images from the single-condition visualization (SCV) tool
      </li>
    </ol>
  </div>
);

export default Visualization;
