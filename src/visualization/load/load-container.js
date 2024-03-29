import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Load from './load';

import fillInteractiveState from '../defaults/fill-interactive-state';
import removeFileExtenstion from '../../utils/remove-file-ext';
import useLoading from '../../hooks/loading/use-loading';
import { loadInteractiveState } from '../../state/visualization/data/interactive-file-actions';
import { selectState } from '../../state/selector/general';

// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved, import/order
import Worker from 'worker-loader?filename=dist.load-interactive-file.worker.js!./validation/validate-interactive-file';
import createWorker from './validation/create-worker';

const worker = createWorker(Worker);

const LoadContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const parameters = useSelector((state) => selectState(state, 'parameters'));

  const status = useLoading();

  const handleChange = async (e, id, selectedFiles) => {
    const file = selectedFiles[0];
    status.setLoading(true);

    try {
      const fileData = await worker(file);
      const filename = removeFileExtenstion(file.name);
      const interactiveData = fillInteractiveState(fileData, filename, 'userfile');
      dispatch(loadInteractiveState(interactiveData));
      navigate(`/visualization/userfile/${filename}`, { replace: true });
    } catch (err) {
      status.setError(true);
      status.setErrorMessage(err.toString());
      status.setLoading(false);
    }
  };

  const { filename, taskID } = parameters;

  useEffect(() => {
    if (filename && taskID) {
      navigate(`/visualization/${taskID}/${filename}`, { replace: true });
      status.setLoading(false);
    }
  }, [filename, status, taskID]);

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
