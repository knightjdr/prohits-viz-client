import PropTypes from 'prop-types';
import React from 'react';

import Input from '../../../../../../components/input/text/input-text-container';
import Section from '../../section/section';
import Select from '../../../../../../components/select/select-container';

const Filters = ({
  abundanceCap,
  columns,
  filterBy,
  handleChange,
  handleFilter,
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
        onChange={handleFilter}
        type="number"
        value={minAbundance}
      />
      <Input
        id="primaryFilter"
        label="Primary filter"
        onChange={handleFilter}
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
      <Select
        canClear
        id="filterBy"
        label="Filter by"
        onChange={handleFilter}
        options={columns}
        value={filterBy}
      />
    </Section>
  </>
);

Filters.propTypes = {
  abundanceCap: PropTypes.number.isRequired,
  columns: PropTypes.arrayOf(PropTypes.string).isRequired,
  filterBy: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleFilter: PropTypes.func.isRequired,
  minAbundance: PropTypes.number.isRequired,
  primaryFilter: PropTypes.number.isRequired,
  secondaryFilter: PropTypes.number.isRequired,
};

export default Filters;
