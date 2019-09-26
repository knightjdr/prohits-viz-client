import PropTypes from 'prop-types';
import React from 'react';

import Input from '../../../../../../components/input/text/input-text-container';
import Section from '../../section/section';
import Select from '../../../../../../components/select/select-container';

const Sorting = ({
  cellSize,
  handleChange,
  imageType,
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

Sorting.propTypes = {
  cellSize: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
  imageType: PropTypes.string.isRequired,
};

export default Sorting;
