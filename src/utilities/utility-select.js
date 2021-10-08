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
        { label: 'Calculate specificity of every prey in a SAINT file', value: 'saint_specificity' },
        { label: 'Create a file for Cytoscape from bait interactions', value: 'saint_biogrid_network' },
        { label: 'Domain enrichment analysis', value: 'saint_domain_enrich' },
        { label: 'Functional enrichment analysis', value: 'saint_fea' },
        { label: 'Text file', optGroup: true },
        { label: 'Retrieve interactions from a gene list and format for Cytoscape', value: 'text_biogrid_network' },
        { label: 'Summarize gene symbols corrupted by Excel', value: 'text_symbol_fix' },
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
