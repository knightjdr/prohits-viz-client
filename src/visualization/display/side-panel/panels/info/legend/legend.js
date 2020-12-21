import PropTypes from 'prop-types';
import React from 'react';
import { faDownload } from '@fortawesome/pro-duotone-svg-icons';

import Dotplot from './legend__dotplot';
import Heatmap from './legend__heatmap';
import IconButton from '../../../../../../components/buttons/icon/button';
import Scatter from './legend__scatter';
import Section from '../../section/section';

import './legend.css';

const drawLegend = (parameters, settings, legend) => {
  if (parameters.imageType === 'dotplot') {
    return (
      <Dotplot
        abundanceColumn={parameters.abundanceColumn}
        scoreColumn={parameters.scoreColumn}
        scoreType={parameters.scoreType}
        {...settings}
      />
    );
  } if (parameters.imageType === 'heatmap') {
    return (
      <Heatmap
        abundanceColumn={parameters.abundanceColumn}
        {...settings}
      />
    );
  } if (parameters.imageType === 'scatter') {
    return (
      <Scatter
        legend={legend}
      />
    );
  }
  return null;
};

const showLegend = (imageType, legend) => (
  imageType === 'dotplot'
  || imageType === 'heatmap'
  || (
    imageType === 'scatter'
    && legend.length > 0
  )
);

const Legend = ({
  downloadLegend,
  legend,
  parameters,
  settings,
}) => (
  showLegend(parameters.imageType, legend)
  && (
    <>
      <Section title="Legend">
        <div className="panel__info-legend">
          {drawLegend(parameters, settings, legend)}
        </div>
      </Section>
      <div className="panel__info-legend-download">
        <div>
          Download legend
        </div>
        <IconButton
          className="panel__info-legend-download-button"
          onClick={downloadLegend}
          icon={faDownload}
          size="1x"
          type="button"
        />
      </div>
    </>
  )
);

Legend.propTypes = {
  downloadLegend: PropTypes.func.isRequired,
  legend: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string,
      text: PropTypes.string,
    }),
  ).isRequired,
  parameters: PropTypes.shape({
    abundanceColumn: PropTypes.string,
    imageType: PropTypes.string,
    scoreColumn: PropTypes.string,
    scoreType: PropTypes.string,
  }).isRequired,
  settings: PropTypes.shape({}).isRequired,
};

export default Legend;
