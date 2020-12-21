import PropTypes from 'prop-types';
import React from 'react';

import Legend from './legend/legend-container';
import Name from './info-name';
import Section from '../section/section';
import Settings from './settings/settings';

import './info.css';

const Info = ({
  loadNewFile,
  parameters,
}) => (
  <div className="panel">
    <Name
      loadNewFile={loadNewFile}
      name={parameters.filename}
    />
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
  }).isRequired,
};

export default Info;
