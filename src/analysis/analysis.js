import PropTypes from 'prop-types';
import React from 'react';

import FileSelection from './file-selection/file-selection-container';
import Next from './next/next-step';

import './analysis.css';
import Tool from './tool/tool-container';

const Analysis = ({
  currentStep,
  isStepTwoReady,
  isStepThreeReady,
  showStepTwo,
  showStepThree,
}) => (
  <main className="analysis">
    <div className="analysis__inner">
      <FileSelection />
      <Next
        onClick={showStepTwo}
        show={isStepTwoReady}
      />
      {
        currentStep > 1
        && (
          <>
            <Tool />
            <Next
              onClick={showStepThree}
              show={isStepThreeReady}
            />
          </>
        )
      }
    </div>
  </main>
);

Analysis.propTypes = {
  currentStep: PropTypes.number.isRequired,
  isStepTwoReady: PropTypes.bool.isRequired,
  isStepThreeReady: PropTypes.bool.isRequired,
  showStepTwo: PropTypes.func.isRequired,
  showStepThree: PropTypes.func.isRequired,
};

export default Analysis;
