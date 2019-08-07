import PropTypes from 'prop-types';
import React from 'react';

import Dotplot from './legend__dotplot';
import Heatmap from './legend__heatmap';
import CircHeatmap from './legend__circheatmap';

import './legend.css';

const Legend = ({
  imageType,
  scoreType,
  segments,
  settings,
}) => {
  let content;
  switch (imageType) {
    case 'dotplot':
      content = (
        <Dotplot
          scoreType={scoreType}
          {...settings}
        />
      );
      break;
    case 'heatmap':
      content = <Heatmap {...settings} />;
      break;
    case 'circ-heatmap':
      content = (
        <CircHeatmap
          {...settings}
          segments={segments}
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
  imageType: PropTypes.string.isRequired,
  segments: PropTypes.arrayOf(
    PropTypes.shape({}),
  ),
  settings: PropTypes.shape({}).isRequired,
  scoreType: PropTypes.string.isRequired,
};

export default Legend;
