import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Analysis from './analysis';

import getStep from './next/get-step';
import processForm from './validation/process-form';
import useFetch from '../hooks/fetch/use-fetch';
import { createTask } from '../state/task/task-actions';
import { selectState } from '../state/selector/general';
import { setFormField } from '../state/analysis/form-actions';

const AnalysisContainer = () => {
  const [taskID, setTaskID] = useState('');

  const dispatch = useDispatch();

  const form = useSelector((state) => selectState(state, 'form'));

  const fetch = useFetch();

  const submit = async (e) => {
    e.preventDefault();
    const status = processForm(form);
    if (status.errors) {
      dispatch(setFormField('errors', status.errors));
    } else {
      const options = { data: status.form, method: 'POST' };
      dispatch(setFormField('uploading', true));
      const response = await fetch(`/analysis/${status.tool}`, options);
      dispatch(setFormField('uploading', false));
      if (response.error) {
        dispatch(setFormField('errors', response.data.errors));
      } else {
        dispatch(createTask(response.data.id));
        setTaskID(response.data.id);
      }
    }
  };

  const handleModalClose = () => {
    setTaskID('');
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
      handleModalClose={handleModalClose}
      showAdvanced={form.showAdvanced}
      submit={submit}
      taskID={taskID}
      uploading={form.uploading}
    />
  );
};

export default AnalysisContainer;
