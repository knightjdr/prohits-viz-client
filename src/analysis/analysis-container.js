import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Analysis from './analysis';

import defaultFormValues from './tool/default-form-values';
import getStep from './next/get-step';
import { selectState } from '../state/selector/general';
import { setFormField, setFormFields } from '../state/analysis/form-actions';
import validate from './validation/validate';

const AnalysisContainer = () => {
  const dispatch = useDispatch();

  const form = useSelector(state => selectState(state, 'form'));

  const submit = (e) => {
    e.preventDefault();
    const status = validate(form);
    if (status.valid) {
      console.log('submit');
    } else {
      dispatch(setFormField('errors', status.errors));
    }
  };

  useEffect(() => {
    const currentStep = getStep(form);
    if (currentStep !== form.step) {
      dispatch(setFormField('step', currentStep));
    }
  }, [dispatch, form]);

  // REMOVE
  console.log('remove the following useEffect');
  useEffect(() => {
    dispatch(
      setFormFields({
        ...defaultFormValues.dotplot,
      }),
    );
  }, [dispatch]);

  return (
    <Analysis
      currentStep={form.step}
      errors={form.errors}
      showAdvanced={form.showAdvanced}
      submit={submit}
    />
  );
};

export default AnalysisContainer;
