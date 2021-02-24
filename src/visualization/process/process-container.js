import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import fetch from '../../utils/fetch';
import fillInteractiveState from '../defaults/fill-interactive-state';
import Process from './process';
import useLoading from '../../hooks/loading/use-loading';
import { loadInteractiveState } from '../../state/visualization/data/interactive-file-actions';
import { selectState } from '../../state/selector/general';

const ProcessContainer = ({
  filename,
  id,
}) => {
  const [attempts, setAttempts] = useState(0);
  const parameters = useSelector((state) => selectState(state, 'parameters'));
  const dispatch = useDispatch();
  const status = useLoading(true);

  useEffect(() => {
    console.log(id);
    if (
      id !== 'userfile'
      && attempts < 5
      && (
        parameters.taskID !== id
        || parameters.filename !== filename
      )
    ) {
      setAttempts(attempts + 1);
      const getFile = async () => {
        status.setLoading(true);
        const response = await fetch(`/task/${id}/${filename}`);
        if (response.error) {
          status.setError(true);
          status.setErrorMessage('There was an error displaying the image');
        } else {
          const data = fillInteractiveState(response.data, filename, id);
          dispatch(loadInteractiveState(data));
        }
        status.setLoading(false);
      };
      getFile();
    } else {
      status.setError(true);
      status.setErrorMessage('You must reload your local file');
    }
  }, [dispatch, filename, id, parameters, status]);

  return (
    <Process
      error={status.error}
      errorMessage={status.errorMessage}
      isLoading={status.isLoading}
    />
  );
};

ProcessContainer.defaultProps = {
  filename: '',
  id: '',
};

ProcessContainer.propTypes = {
  filename: PropTypes.string,
  id: PropTypes.string,
};

export default ProcessContainer;
