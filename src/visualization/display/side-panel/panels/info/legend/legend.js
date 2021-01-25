import PropTypes from 'prop-types';
import React from 'react';
import { faDownload } from '@fortawesome/pro-duotone-svg-icons';

import CircHeatmap from './legend__circheatmap';
import Dotplot from './legend__dotplot';
import Heatmap from './legend__heatmap';
import IconButton from '../../../../../../components/buttons/icon/button';
import Scatter from './legend__scatter';
import Section from '../../section/section';

import './legend.css';

const drawLegend = (parameters, settings, options) => {
  if (parameters.imageType === 'circheatmap') {
    return (
      <CircHeatmap
        legend={options.legend}
        segmentOrder={settings.segmentOrder}
        showKnown={settings.showKnown}
      />
    );
  } if (parameters.imageType === 'dotplot') {
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
        customizations={options.customizations}
        legend={options.legend}
      />
    );
  }
  return null;
};

const showLegend = (imageType, options) => (
  imageType === 'dotplot'
  || imageType === 'heatmap'
  || (
    (
      imageType === 'circheatmap'
      || imageType === 'scatter'
    )
    && (
      options.legend.length > 0
      || Object.keys(options.customizations).length > 0
    )
  )
);

const Legend = ({
  customizations,
  downloadLegend,
  legend,
  parameters,
  settings,
}) => (
  showLegend(parameters.imageType, { customizations, legend })
  && (
    <>
      <Section title="Legend">
        <div className="panel__info-legend">
          {drawLegend(parameters, settings, { customizations, legend })}
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

Legend.defaultProps = {
  customizations: {},
};

Legend.propTypes = {
  customizations: PropTypes.shape({}),
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
