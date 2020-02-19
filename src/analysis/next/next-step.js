import PropTypes from 'prop-types';
import React from 'react';

import Button from '../../components/buttons/rectangular/button';

import './next-step.css';

const NextStep = ({
  goToNextStep,
  show,
}) => (
  <div
    className="analysis__next-step"
    style={{ visibility: show ? 'visible' : 'hidden' }}
  >
    <Button
      onClick={goToNextStep}
      kind="secondary"
      type="button"
    >
      Next
    </Button>
  </div>
);

NextStep.propTypes = {
  goToNextStep: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};

export default NextStep;
