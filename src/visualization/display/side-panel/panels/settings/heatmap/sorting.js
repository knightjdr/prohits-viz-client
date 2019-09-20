import PropTypes from 'prop-types';
import React from 'react';

import Input from '../../../../../../components/input/text/input-text-container';
import Section from '../../section/section';

const Sorting = ({
  handleChange,
  sortAbundanceFilter,
}) => (
  <>
    <Section
      border={false}
      title="Reference sorting"
    >
      <Input
        data-setting="sortAbundanceFilter"
        label="Abundance"
        onChange={handleChange}
        type="number"
        value={sortAbundanceFilter}
      />
    </Section>
  </>
);

Sorting.propTypes = {
  handleChange: PropTypes.func.isRequired,
  sortAbundanceFilter: PropTypes.number.isRequired,
};

export default Sorting;
