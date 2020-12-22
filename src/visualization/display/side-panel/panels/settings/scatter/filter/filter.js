import PropTypes from 'prop-types';
import React from 'react';

import Input from '../../../../../../../components/input/text/input-text-container';
import Section from '../../../section/section';

const Filter = ({
  handleSettingChange,
  inputLabels,
  xFilter,
  yFilter,
}) => (
  <Section title="Filters">
    <Input
      id="xFilter"
      label={inputLabels.x}
      onChange={handleSettingChange}
      min="0"
      step="0.01"
      type="number"
      value={xFilter}
    />
    <Input
      id="yFilter"
      label={inputLabels.y}
      onChange={handleSettingChange}
      min="0"
      step="0.01"
      type="number"
      value={yFilter}
    />
  </Section>
);

Filter.propTypes = {
  handleSettingChange: PropTypes.func.isRequired,
  inputLabels: PropTypes.shape({
    x: PropTypes.string,
    y: PropTypes.string,
  }).isRequired,
  xFilter: PropTypes.number.isRequired,
  yFilter: PropTypes.number.isRequired,
};

export default Filter;
