import PropTypes from 'prop-types';
import React from 'react';

import Button from '../../../../../../../components/buttons/rectangular/button';
import GprofilerContainer from '../../gprofiler/gprofiler-container';
import Section from '../../../section/section';
import Select from '../../../../../../../components/select/select-container';

import './options.css';

const options = {
  gprofiler: <GprofilerContainer />,
  '': null,
};

const AnalysisOptions = ({
  analysisType,
  handleChange,
  submitForm,
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
        value={analysisType}
      />
      <Button
        onClick={submitForm}
        kind="success"
        type="submit"
      >
        Submit
      </Button>
    </div>
    {options[analysisType]}
  </Section>
);

AnalysisOptions.propTypes = {
  analysisType: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
};

export default AnalysisOptions;
