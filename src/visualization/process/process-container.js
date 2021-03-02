import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import fetch from '../../utils/fetch';
import fillInteractiveState from '../defaults/fill-interactive-state';
import Process from './process';
import useLoading from '../../hooks/loading/use-loading';
import { loadInteractiveState } from '../../state/visualization/data/interactive-file-actions';
import { selectState } from '../../state/selector/general';

const ProcessContainer = () => {
  const { id, filename } = useParams();
  const history = useHistory();
  const attemptRef = useRef(0);
  const parameters = useSelector((state) => selectState(state, 'parameters'));
  const dispatch = useDispatch();
  const status = useLoading(true);

  useEffect(() => {
    // If a users loads an image from a file and hits refresh in the browser,
    // this will catch that and redirect to the upload page.
    if (id === 'userfile' && !parameters.taskID) {
      history.replace('/visualization');
    }
    // Load files from the server. It will make five attempts, and if the image cannot be
    // found it will display the error message.
    if (
      id !== 'userfile'
      && attemptRef.current < 5
      && (
        parameters.taskID !== id
        || parameters.filename !== filename
      )
    ) {
      attemptRef.current += 1;
      const getFile = async () => {
        status.setLoading(true);
        const response = await fetch(`/task/${id}/${filename}`);
        if (response.error) {
          status.setError(true);
          status.setErrorMessage('There was an error loading the image. Tasks are only kept for 24 hours.');
        } else {
          const data = fillInteractiveState(response.data, filename, id);
          dispatch(loadInteractiveState(data));
        }
        status.setLoading(false);
      };
      getFile();
    } else {
      status.setLoading(false);
    }
  }, [attemptRef.current, dispatch, filename, id, parameters, status]);

  return (
    <Process
      error={status.error}
      errorMessage={status.errorMessage}
      isLoading={status.isLoading}
    />
  );
};

export default ProcessContainer;
