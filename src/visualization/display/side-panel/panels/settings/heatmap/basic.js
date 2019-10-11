import PropTypes from 'prop-types';
import React from 'react';

import Input from '../../../../../../components/input/text/input-text-container';
import Section from '../../section/section';
import Select from '../../../../../../components/select/select-container';
import Switch from '../../../../../../components/input/switch/switch-container';

const Basic = ({
  cellSize,
  handleChange,
  imageType,
  resetRatios,
}) => (
  <>
    <Section
      border={false}
      title="Basic settings"
    >
      <Select
        id="imageType"
        label="Image Type"
        onChange={handleChange}
        options={[
          { label: 'dot plot', value: 'dotplot' },
          { label: 'heat map', value: 'heatmap' },
        ]}
        value={imageType}
      />
      {
        imageType === 'dotplot'
        && (
          <Switch
            checked={resetRatios}
            id="resetRatios"
            label="Reset ratios"
            onChange={handleChange}
          />
        )
      }
      <Input
        id="cellSize"
        label="Cell size"
        onChange={handleChange}
        type="number"
        value={cellSize}
      />
    </Section>
  </>
);

Basic.propTypes = {
  cellSize: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
  imageType: PropTypes.string.isRequired,
  resetRatios: PropTypes.bool.isRequired,
};

export default Basic;
