import PropTypes from 'prop-types';
import React from 'react';

import Input from '../../../../../../components/input/text/input-text-container';
import Section from '../../section/section';

const Filters = ({
  abundanceCap,
  handleChange,
  minAbundance,
  primaryFilter,
  secondaryFilter,
}) => (
  <>
    <Section title="Filters">
      <Input
        id="abundanceCap"
        label="Abundance cap"
        onChange={handleChange}
        type="number"
        value={abundanceCap}
      />
      <Input
        id="minAbundance"
        label="Abundance minimum"
        onChange={handleChange}
        type="number"
        value={minAbundance}
      />
      <Input
        id="primaryFilter"
        label="Primary filter"
        onChange={handleChange}
        step={0.01}
        type="number"
        value={primaryFilter}
      />
      <Input
        id="secondaryFilter"
        label="Secondary filter"
        onChange={handleChange}
        step={0.01}
        type="number"
        value={secondaryFilter}
      />
    </Section>
  </>
);

Filters.propTypes = {
  abundanceCap: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
  minAbundance: PropTypes.number.isRequired,
  primaryFilter: PropTypes.number.isRequired,
  secondaryFilter: PropTypes.number.isRequired,
};

export default Filters;
