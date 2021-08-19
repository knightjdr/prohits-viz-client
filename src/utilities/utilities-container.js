import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Utilities from './utilities';

import useFetch from '../hooks/fetch/use-fetch';
import validate from './validation/validate';
import { createTask } from '../state/task/task-actions';
import { selectState } from '../state/selector/general';
import { setUtilityField, setUtilityFile, setUtilityType } from '../state/utilities/utilities-actions';

const UtilitiesContainer = () => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [taskID, setTaskID] = useState('');
  const fields = useSelector((state) => selectState(state, 'utilities'));

  const fetch = useFetch();

  const handleInputFile = (e, id, selectedFiles) => {
    dispatch(setUtilityFile(selectedFiles));
  };

  const handleModalClose = () => {
    setTaskID('');
  };

  const handleUtilityType = (e, id, value) => {
    dispatch(setUtilityType(value));
  };

  const handleSubmit = async () => {
    const validation = validate(fields);
    if (validation.errors) {
      setErrors(validation.errors);
    } else {
      const options = {
        data: validation.form,
        method: 'POST',
        onUploadProgress: (progress) => {
          dispatch(setUtilityField('uploadProgress', Math.round((progress.loaded * 100) / progress.total)));
        },
      };
      dispatch(setUtilityField('uploadProgress', 0));
      const response = await fetch(`/analysis/utility/${validation.form.get('utility')}`, options);
      dispatch(setUtilityField('uploadProgress', 0));
      if (response.error) {
        setErrors(response.data.errors);
      } else {
        dispatch(createTask(response.data.id));
        setTaskID(response.data.id);
      }
    }
  };

  return (
    <Utilities
      errors={errors}
      files={fields.files}
      handleInputFile={handleInputFile}
      handleModalClose={handleModalClose}
      handleSubmit={handleSubmit}
      handleUtilityType={handleUtilityType}
      taskID={taskID}
      uploadProgress={fields.uploadProgress}
      utility={fields.utility}
    />
  );
};

export default UtilitiesContainer;
