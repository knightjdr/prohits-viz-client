import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Analysis from './analysis';

import getStep from './next/get-step';
import validate from './validation/validate';
import { selectState } from '../state/selector/general';
import { setFormField } from '../state/analysis/form-actions';
import useFetch from '../hooks/fetch/use-fetch';

const AnalysisContainer = () => {
  const dispatch = useDispatch();

  const form = useSelector(state => selectState(state, 'form'));

  const fetch = useFetch();

  const submit = async (e) => {
    e.preventDefault();
    const status = validate(form);
    if (status.valid) {
      const options = { data: form, method: 'POST' };
      await fetch(`/analysis/${status.tool}`, options);
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
