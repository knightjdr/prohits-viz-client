/* eslint-disable max-len */
import PropTypes from 'prop-types';
import React from 'react';

import Divider from '../components/divider/divider';
import Select from '../components/select/select-container';

const UtilitySelect = ({
  handleUtilityType,
  utility,
}) => (
  <div className="utilities__select">
    <Divider>Utility</Divider>
    <Select
      id="utility_type"
      onChange={handleUtilityType}
      options={[
        { label: 'CRISPR file', optGroup: true },
        { label: 'Convert output from a CRISPR analysis tool to a ProHits-viz compatible format', value: 'crispr_convert' },
        { label: 'Process interactive file', optGroup: true },
        { label: 'Convert interactive file from ProHits version 1', value: 'pvconvert' },
        { label: 'SAINT file', optGroup: true },
        { label: 'Calculate interaction statistics', value: 'saint_stats' },
        { label: 'Domain enrichment analysis', value: 'saint_domain_enrich' },
        { label: 'Functional enrichment analysis', value: 'saint_fea' },
      ]}
      placeholder="Select Utility..."
      value={utility}
    />
  </div>
);

UtilitySelect.propTypes = {
  handleUtilityType: PropTypes.func.isRequired,
  utility: PropTypes.string.isRequired,
};

export default UtilitySelect;
