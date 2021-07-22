import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
import Worker from 'worker-loader!./validation/validate-interactive-file';

import Load from './load';

import fillInteractiveState from '../defaults/fill-interactive-state';
import removeFileExtenstion from '../../utils/remove-file-ext';
import useLoading from '../../hooks/loading/use-loading';
import useWorker from '../../hooks/worker/use-worker';
import { loadInteractiveState } from '../../state/visualization/data/interactive-file-actions';
import { selectState } from '../../state/selector/general';

const LoadContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const parameters = useSelector((state) => selectState(state, 'parameters'));

  const status = useLoading();
  const worker = useWorker(Worker);

  const handleChange = async (e, id, selectedFiles) => {
    const file = selectedFiles[0];
    status.setLoading(true);

    try {
      const fileData = await worker(file);
      const filename = removeFileExtenstion(file.name);
      const interactiveData = fillInteractiveState(fileData, filename, 'userfile');
      dispatch(loadInteractiveState(interactiveData));
      history.replace(`/visualization/userfile/${filename}`);
    } catch (err) {
      status.setError(true);
      status.setErrorMessage(err.toString());
      status.setLoading(false);
    }
  };

  const { filename, taskID } = parameters;

  useEffect(() => {
    if (filename && taskID) {
      history.replace(`/visualization/${taskID}/${filename}`);
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
