import PropTypes from 'prop-types';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import NextStep from './next-step';

import { selectState } from '../../state/selector/general';
import { setFormField } from '../../state/analysis/form-actions';

const NextStepContainer = ({
  show,
}) => {
  const dispatch = useDispatch();

  const form = useSelector((state) => selectState(state, 'form'));

  const goToNextStep = () => {
    dispatch(setFormField('step', form.step + 1));
  };

  return (
    <NextStep
      goToNextStep={goToNextStep}
      show={show}
    />
  );
};

NextStepContainer.propTypes = {
  show: PropTypes.bool.isRequired,
};

export default NextStepContainer;
