import PropTypes from 'prop-types';
import React from 'react';

import Button from '../../../../../../components/buttons/rectangular/button';
import Gprofiler from '../gprofiler/gprofiler-container';
import RSQ from '../rsq/rsq-container';
import Section from '../../section/section';
import Select from '../../../../../../components/select/select-container';

import InputText from '../../../../../../components/input/text/input-text-container';

import './options.css';

const getSelectOptions = (imageType) => {
  if (imageType === 'scatter') {
    return ([
      { label: 'g:Profiler', value: 'gprofiler' },
      { label: 'R-squared', value: 'rsq' },
    ]);
  }
  return [
    { label: 'g:Profiler', value: 'gprofiler' },
  ];
};

const options = {
  gprofiler: <Gprofiler />,
  rsq: <RSQ />,
  '': null,
};

const AnalysisOptions = ({
  analysisName,
  analysisType,
  handleAnalysisNameChange,
  handleAnalysisTypeChange,
  helpLink,
  imageType,
  submitForm,
}) => (
  <Section
    helpLink={helpLink}
    title="Analysis"
  >
    <div className="analysis__options-definition">
      <Select
        onChange={handleAnalysisTypeChange}
        options={getSelectOptions(imageType)}
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
  helpLink: PropTypes.string.isRequired,
  imageType: PropTypes.string.isRequired,
  submitForm: PropTypes.func.isRequired,
};

export default AnalysisOptions;
