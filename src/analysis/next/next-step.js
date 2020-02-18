import PropTypes from 'prop-types';
import React from 'react';

import Button from '../../components/buttons/rectangular/button';

import './next-step.css';

const NextStep = ({
  onClick,
  show,
}) => (
  show
  && (
    <div className="analysis__next-step">
      <Button
        onClick={onClick}
        kind="secondary"
      >
        Next
      </Button>
    </div>
  )
);

NextStep.propTypes = {
  onClick: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};

export default NextStep;
