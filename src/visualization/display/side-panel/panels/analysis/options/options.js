import PropTypes from 'prop-types';
import React from 'react';

import Button from '../../../../../../components/buttons/rectangular/button';
import GprofilerContainer from '../gprofiler/gprofiler-container';
import Section from '../../section/section';
import Select from '../../../../../../components/select/select-container';

import InputText from '../../../../../../components/input/text/input-text-container';

import './options.css';

const options = {
  gprofiler: <GprofilerContainer />,
  '': null,
};

const AnalysisOptions = ({
  analysisName,
  analysisType,
  handleAnalysisNameChange,
  handleAnalysisTypeChange,
  submitForm,
}) => (
  <Section
    title="Analysis"
  >
    <div className="analysis__options-definition">
      <Select
        onChange={handleAnalysisTypeChange}
        options={[
          { label: 'g:Profiler', value: 'gprofiler' },
        ]}
        value={analysisType}
      />
      <InputText
        onChange={handleAnalysisNameChange}
        placeholder="Analysis name..."
        type="text"
        value={analysisName}
      />
    </div>
    <div className="analysis__options-submit">
      <Button
        onClick={submitForm}
        kind="success"
        type="button"
      >
        Submit
      </Button>
    </div>
    {options[analysisType]}
  </Section>
);

AnalysisOptions.propTypes = {
  analysisName: PropTypes.string.isRequired,
  analysisType: PropTypes.string.isRequired,
  handleAnalysisNameChange: PropTypes.func.isRequired,
  handleAnalysisTypeChange: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
};

export default AnalysisOptions;
