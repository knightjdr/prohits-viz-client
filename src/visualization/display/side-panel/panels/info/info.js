import PropTypes from 'prop-types';
import React from 'react';
import { faDownload } from '@fortawesome/pro-duotone-svg-icons';

import IconButton from '../../../../../components/buttons/icon/button';
import Legend from './legend/legend-container';
import Name from './info-name';
import Section from '../section/section';
import Settings from './settings/settings';

import './info.css';

const Info = ({
  downloadLegend,
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
    <Section title="Legend">
      <Legend />
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
      />
    </div>
  </div>
);

Info.propTypes = {
  downloadLegend: PropTypes.func.isRequired,
  loadNewFile: PropTypes.func.isRequired,
  parameters: PropTypes.shape({
    filename: PropTypes.string,
  }).isRequired,
};

export default Info;
