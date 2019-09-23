import PropTypes from 'prop-types';
import React from 'react';

import Input from '../../../../../../components/input/text/input-text-container';
import Section from '../../section/section';

const Sorting = ({
  handleChange,
  cellSize,
}) => (
  <>
    <Section
      border={false}
      title="Basic settings"
    >
      <Input
        data-setting="cellSize"
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
};

export default Sorting;
