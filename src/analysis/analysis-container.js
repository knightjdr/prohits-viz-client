import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Analysis from './analysis';

import { selectState } from '../state/selector/general';
import { setFormField } from '../state/analysis/form-actions';

const AnalysisContainer = () => {
  const dispatch = useDispatch();

  const form = useSelector(state => selectState(state, 'form'));

  const isStepTwoReady = Boolean(form.files.length > 0 && form.fileType);
  const showStepTwo = () => {
    dispatch(setFormField('step', 2));
  };

  const isStepThreeReady = Boolean(isStepTwoReady && form.tool);
  const showStepThree = () => {
    dispatch(setFormField('step', 3));
  };

  return (
    <Analysis
      currentStep={form.step}
      isStepTwoReady={isStepTwoReady}
      isStepThreeReady={isStepThreeReady}
      showStepTwo={showStepTwo}
      showStepThree={showStepThree}
    />
  );
};

export default AnalysisContainer;
