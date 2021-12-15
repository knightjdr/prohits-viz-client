import PropTypes from 'prop-types';
import React from 'react';

import Input from '../../../../../../../components/input/text/input-text-container';
import Section from '../../../section/section';
import Switch from '../../../../../../../components/input/switch/switch-container';

const Filter = ({
  handleSettingChange,
  labels,
  strictAxisFiltering,
  xFilter,
  yFilter,
}) => (
  <Section
    helpLink="/help/visualization/scatterplot#settings-filtering"
    title="Filters"
  >
    <Input
      id="xFilter"
      label={labels.x}
      onChange={handleSettingChange}
      min="0"
      step="0.01"
      type="number"
      value={xFilter}
    />
    <Input
      id="yFilter"
      label={labels.y}
      onChange={handleSettingChange}
      min="0"
      step="0.01"
      type="number"
      value={yFilter}
    />
    <Switch
      checked={strictAxisFiltering}
      id="strictAxisFiltering"
      label="Strict axis filtering"
      onChange={handleSettingChange}
    />
  </Section>
);

Filter.propTypes = {
  handleSettingChange: PropTypes.func.isRequired,
  labels: PropTypes.shape({
    x: PropTypes.string,
    y: PropTypes.string,
  }).isRequired,
  strictAxisFiltering: PropTypes.bool.isRequired,
  xFilter: PropTypes.number.isRequired,
  yFilter: PropTypes.number.isRequired,
};

export default Filter;
