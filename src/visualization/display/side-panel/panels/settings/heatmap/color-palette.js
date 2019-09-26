import PropTypes from 'prop-types';
import React from 'react';

import Section from '../../section/section';
import Select from '../../../../../../components/select/select-container';

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
  { label: 'purple', value: 'a' },
  { label: 'pink', value: 'b' },
  { label: 'black', value: 'c' },
];

const ColorPalette = ({
  edgeColor,
  fillColor,
  handleChange,
}) => (
  <>
    <Section
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
    </Section>
  </>
);

ColorPalette.propTypes = {
  edgeColor: PropTypes.string.isRequired,
  fillColor: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default ColorPalette;
