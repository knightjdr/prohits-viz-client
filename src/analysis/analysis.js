import PropTypes from 'prop-types';
import React from 'react';

import Advanced from './advanced/advanced-container';
import Columns from './columns/columns-container';
import FileSelection from './file-selection/file-selection-container';
import Next from './next/next-step-container';
import Submit from './submit/submit-container';
import Tool from './tool/tool-container';

import './analysis.css';

const Analysis = ({
  currentStep,
  errors,
  showAdvanced,
  submit,
}) => (
  <main className="analysis">
    <form
      className="analysis__inner"
      onSubmit={submit}
    >
      <FileSelection errors={errors} />
      <Next show={currentStep === 1} />
      <Tool errors={errors} show={currentStep > 1} />
      <Next show={currentStep === 3} />
      <Columns errors={errors} show={currentStep > 3} />
      <Next show={currentStep === 5} />
      <Submit errors={errors} show={currentStep > 5} />
      <Advanced errors={errors} show={currentStep > 5 && showAdvanced} />
    </form>
  </main>
);

Analysis.propTypes = {
  currentStep: PropTypes.number.isRequired,
  errors: PropTypes.shape({}).isRequired,
  showAdvanced: PropTypes.bool.isRequired,
  submit: PropTypes.func.isRequired,
};

export default Analysis;
