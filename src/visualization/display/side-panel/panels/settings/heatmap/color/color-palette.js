import PropTypes from 'prop-types';
import React from 'react';

import Section from '../../../section/section';
import Select from '../../../../../../../components/select/select-container';
import Switch from '../../../../../../../components/input/switch/switch-container';

const colorOptions = [
  { label: 'mono', optGroup: true },
  { label: 'blue', value: 'blue' },
  { label: 'green', value: 'green' },
  { label: 'greyscale', value: 'greyscale' },
  { label: 'red', value: 'red' },
  { label: 'yellow', value: 'yellow' },
  { label: 'dual', optGroup: true },
  { label: 'blue-yellow', value: 'blueYellow' },
  { label: 'blue-red', value: 'blueRed' },
];

const ColorPalette = ({
  edgeColor,
  fillColor,
  handleChange,
  invertColor,
}) => (
  <>
    <Section
      helpLink="/help/visualization/heatmap#settings-colour"
      title="Color palette"
    >
      <Select
        id="edgeColor"
        label="Edge color"
        onChange={handleChange}
        options={colorOptions}
        value={edgeColor}
      />
      <Select
        id="fillColor"
        label="Fill color"
        onChange={handleChange}
        options={colorOptions}
        value={fillColor}
      />
      <Switch
        checked={invertColor}
        id="invertColor"
        label="Invert fill color"
        onChange={handleChange}
      />
    </Section>
  </>
);

ColorPalette.propTypes = {
  edgeColor: PropTypes.string.isRequired,
  fillColor: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  invertColor: PropTypes.bool.isRequired,
};

export default ColorPalette;
