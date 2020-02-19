import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Analysis from './analysis';

import getStep from './next/get-step';
import { selectState } from '../state/selector/general';
import { setFormField } from '../state/analysis/form-actions';

const AnalysisContainer = () => {
  const dispatch = useDispatch();

  const form = useSelector(state => selectState(state, 'form'));

  const submit = (e) => {
    e.preventDefault();
    console.log('submit');
  };

  useEffect(() => {
    const currentStep = getStep(form);
    if (currentStep !== form.step) {
      dispatch(setFormField('step', currentStep));
    }
  }, [dispatch, form]);

  return (
    <Analysis
      currentStep={form.step}
      errors={{}}
      showAdvanced={form.showAdvanced}
      submit={submit}
    />
  );
};

export default AnalysisContainer;
