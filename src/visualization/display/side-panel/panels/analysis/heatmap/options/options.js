import PropTypes from 'prop-types';
import React from 'react';

import Section from '../../../section/section';
import Select from '../../../../../../../components/select/select-container';

import './options.css';

const AnalysisOptions = ({
  handleChange,
  selectedAnalysis,
}) => (
  <Section
    title="Analysis"
  >
    <div className="analysis__options-select-wrapper">
      <Select
        canClear
        onChange={handleChange}
        options={[
          { label: 'g:Profiler', value: 'gprofiler' },
        ]}
        value={selectedAnalysis}
      />
    </div>
  </Section>
);

AnalysisOptions.propTypes = {
  handleChange: PropTypes.func.isRequired,
  selectedAnalysis: PropTypes.string.isRequired,
};

export default AnalysisOptions;
