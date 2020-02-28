import PropTypes from 'prop-types';
import React from 'react';

import Advanced from './advanced/advanced-container';
import Columns from './columns/columns-container';
import FileSelection from './file-selection/file-selection-container';
import Next from './next/next-step-container';
import Submit from './submit/submit-container';
import TaskModal from './task-modal/task-modal-container';
import Tool from './tool/tool-container';

import './analysis.css';

const Analysis = ({
  currentStep,
  errors,
  handleModalClose,
  showAdvanced,
  submit,
  taskID,
  uploading,
}) => (
  <main className="analysis">
    <form className="analysis__inner">
      <FileSelection errors={errors} />
      <Next show={currentStep === 1} />
      <Tool errors={errors} show={currentStep > 1} />
      <Next show={currentStep === 3} />
      <Columns errors={errors} show={currentStep > 3} />
      <Next show={currentStep === 5} />
      <Submit errors={errors} show={currentStep > 5} submit={submit} uploading={uploading} />
      <Advanced errors={errors} show={currentStep > 5} visible={showAdvanced} />
    </form>
    <TaskModal
      handleClose={handleModalClose}
      taskID={taskID}
    />
  </main>
);

Analysis.propTypes = {
  currentStep: PropTypes.number.isRequired,
  errors: PropTypes.shape({}).isRequired,
  handleModalClose: PropTypes.func.isRequired,
  showAdvanced: PropTypes.bool.isRequired,
  submit: PropTypes.func.isRequired,
  taskID: PropTypes.string.isRequired,
  uploading: PropTypes.bool.isRequired,
};

export default Analysis;
