import React from 'react';
import { navigate } from 'hookrouter';
import { useDispatch } from 'react-redux';

import Load from './load';

import fillInteractiveState from '../defaults/fill-interactive-state';
import removeFileExtenstion from '../../utils/remove-file-ext';
import useLoading from '../../hooks/loading/use-loading';
import validateInteractiveFile from './validate-interactive-file';
import { loadInteractiveState } from '../../state/visualization/data/interactive-file-actions';

const LoadContainer = () => {
  const dispatch = useDispatch();
  const status = useLoading();

  const handleChange = async (e) => {
    const file = e.currentTarget.files[0];
    status.setLoading(true);
    try {
      const fileData = await validateInteractiveFile(file);
      const filename = removeFileExtenstion(file.name);
      const interactiveData = fillInteractiveState(fileData, filename, filename);
      dispatch(loadInteractiveState(interactiveData));
      navigate(`/visualization/userfile/${filename}`);
    } catch (err) {
      status.setError(true);
      status.setErrorMessage(err.toString());
      status.setLoading(false);
    }
  };

  return (
    <Load
      error={status.error}
      errorMessage={status.errorMessage}
      handleChange={handleChange}
      isLoading={status.isLoading}
    />
  );
};


export default LoadContainer;
