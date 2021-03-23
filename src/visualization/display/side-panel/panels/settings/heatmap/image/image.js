import PropTypes from 'prop-types';
import React from 'react';

import Input from '../../../../../../../components/input/text/input-text-container';
import Section from '../../../section/section';
import Select from '../../../../../../../components/select/select-container';
import Switch from '../../../../../../../components/input/switch/switch-container';

const Image = ({
  canTranslate,
  cellSize,
  fixPlotLeft,
  handleChange,
  imageType,
  plotFixed,
  resetRatios,
}) => (
  <>
    <Section
      border={false}
      helpLink="/help/visualization/heatmap#settings-image"
      title="Image"
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
      <Input
        id="cellSize"
        label="Cell size"
        onChange={handleChange}
        type="number"
        value={cellSize}
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
      {
        canTranslate
        && (
          <Switch
            checked={plotFixed}
            id="plotFixed"
            label="Fix plot"
            onChange={fixPlotLeft}
          />
        )
      }
    </Section>
  </>
);

Image.propTypes = {
  canTranslate: PropTypes.bool.isRequired,
  cellSize: PropTypes.number.isRequired,
  fixPlotLeft: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  imageType: PropTypes.string.isRequired,
  plotFixed: PropTypes.bool.isRequired,
  resetRatios: PropTypes.bool.isRequired,
};

export default Image;
