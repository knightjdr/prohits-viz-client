import PropTypes from 'prop-types';
import React from 'react';

import Dotplot from './legend__dotplot';
import Heatmap from './legend__heatmap';
import CircHeatmap from './legend__circheatmap';

import './legend.css';

const Legend = ({
  parameters,
  segments,
  settings,
}) => {
  let content;
  switch (parameters.imageType) {
    case 'dotplot':
      content = (
        <Dotplot
          abundanceColumn={parameters.abundanceColumn}
          scoreColumn={parameters.scoreColumn}
          scoreType={parameters.scoreType}
          {...settings}
        />
      );
      break;
    case 'heatmap':
      content = (
        <Heatmap
          abundanceColumn={parameters.abundanceColumn}
          {...settings}
        />
      );
      break;
    case 'circ-heatmap':
      content = (
        <CircHeatmap
          {...settings}
          segments={segments}
          segmentSettings={settings.segments}
        />
      );
      break;
    default:
      break;
  }
  return (
    <div className="panel__info-legend">
      {content}
    </div>
  );
};

Legend.defaultProps = {
  segments: [],
};

Legend.propTypes = {
  parameters: PropTypes.shape({
    abundanceColumn: PropTypes.string,
    imageType: PropTypes.string,
    scoreColumn: PropTypes.string,
    scoreType: PropTypes.string,
  }).isRequired,
  segments: PropTypes.arrayOf(
    PropTypes.shape({}),
  ),
  settings: PropTypes.shape({
    segments: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
};

export default Legend;
