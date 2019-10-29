import PropTypes from 'prop-types';
import React from 'react';

import Input from '../../../../../../../components/input/text/input-text-container';
import Section from '../../../section/section';
import Select from '../../../../../../../components/select/select-container';
import Switch from '../../../../../../../components/input/switch/switch-container';

const Filter = ({
  abundanceCap,
  columns,
  filterBy,
  filteringNotification,
  handleChangeAbundanceCap,
  handleChangeMinAbundance,
  handleChangePrimaryFilter,
  handleChangeSecondaryFilter,
  handleFilter,
  imageType,
  minAbundance,
  primaryFilter,
  removeEmptyColumns,
  secondaryFilter,
}) => (
  <>
    {filteringNotification}
    <Section title="Filters">
      <Input
        id="abundanceCap"
        label="Abundance cap"
        onChange={handleChangeAbundanceCap}
        step={0.01}
        type="number"
        value={abundanceCap}
      />
      <Input
        id="minAbundance"
        label="Abundance minimum"
        onChange={handleChangeMinAbundance}
        step={0.01}
        type="number"
        value={minAbundance}
      />
      <Input
        id="primaryFilter"
        label="Primary filter"
        onChange={handleChangePrimaryFilter}
        step={0.01}
        type="number"
        value={primaryFilter}
      />
      {
        imageType === 'dotplot'
        && (
          <Input
            id="secondaryFilter"
            label="Secondary filter"
            onChange={handleChangeSecondaryFilter}
            step={0.01}
            type="number"
            value={secondaryFilter}
          />
        )
      }
      <Select
        canClear
        id="filterBy"
        label="Filter by"
        multiple
        onChange={handleFilter}
        options={columns}
        value={filterBy}
      />
      <Switch
        checked={removeEmptyColumns}
        id="removeEmptyColumns"
        label="Clear failing columns"
        onChange={handleFilter}
      />
    </Section>
  </>
);

Filter.defaultProps = {
  filteringNotification: null,
};

Filter.propTypes = {
  abundanceCap: PropTypes.number.isRequired,
  columns: PropTypes.arrayOf(PropTypes.string).isRequired,
  filterBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  filteringNotification: PropTypes.node,
  handleChangeAbundanceCap: PropTypes.func.isRequired,
  handleChangeMinAbundance: PropTypes.func.isRequired,
  handleChangePrimaryFilter: PropTypes.func.isRequired,
  handleChangeSecondaryFilter: PropTypes.func.isRequired,
  handleFilter: PropTypes.func.isRequired,
  imageType: PropTypes.string.isRequired,
  minAbundance: PropTypes.number.isRequired,
  primaryFilter: PropTypes.number.isRequired,
  removeEmptyColumns: PropTypes.bool.isRequired,
  secondaryFilter: PropTypes.number.isRequired,
};

export default Filter;
