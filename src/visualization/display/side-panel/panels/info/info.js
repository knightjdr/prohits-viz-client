import PropTypes from 'prop-types';
import React from 'react';

import CircHeatmap from './circheatmap/plot-container';
import Legend from './legend/legend-container';
import Name from './info-name';
import Scatter from './scatter/plot-container';
import Section from '../section/section';
import Settings from './settings/settings';

import './info.css';

const Plot = ({
  imageType,
}) => {
  if (imageType === 'circheatmap') {
    return <CircHeatmap />;
  } if (imageType === 'scatter') {
    return <Scatter />;
  }
  return null;
};

Plot.propTypes = {
  imageType: PropTypes.string.isRequired,
};

const Info = ({
  loadNewFile,
  parameters,
}) => (
  <div className="panel">
    <Name
      loadNewFile={loadNewFile}
      name={parameters.filename}
    />
    <Plot imageType={parameters.imageType} />
    <Section title="Analysis settings">
      {Settings(parameters)}
    </Section>
    <Legend />
  </div>
);

Info.propTypes = {
  loadNewFile: PropTypes.func.isRequired,
  parameters: PropTypes.shape({
    filename: PropTypes.string,
    imageType: PropTypes.string,
  }).isRequired,
};

export default Info;
