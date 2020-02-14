import PropTypes from 'prop-types';
import React from 'react';
import { faSave } from '@fortawesome/pro-duotone-svg-icons';

import IconButton from '../../../../../../components/buttons/icon/button';
import Message from './message';
import Section from '../../section/section';
import Select from '../../../../../../components/select/select-container';

import './image.css';

const Image = ({
  exporter,
  handleChange,
  handleSave,
}) => (
  <Section
    border={false}
    title="Save Image"
  >
    <div className="panel__save-image">
      <Select
        onChange={handleChange}
        options={[
          { label: 'SVG', value: 'svg' },
          { label: 'PNG', value: 'png' },
        ]}
        value={exporter.format}
      />
      <IconButton
        disabled={exporter.exporting}
        icon={faSave}
        kind="secondary"
        onClick={handleSave}
      />
    </div>
    <Message exporter={exporter} />
  </Section>
);

Image.propTypes = {
  exporter: PropTypes.shape({
    exporting: PropTypes.bool.isRequired,
    format: PropTypes.string.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired,
};

export default Image;
