import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import fetch from '../../utils/fetch';
import Process from './process';
import useLoading from '../../hooks/loading/use-loading';
import { parseFile } from '../../state/visualization/file/interactive-file-actions';
import { stateSelector } from '../../state/selector/general';

const ProcessContainer = ({
  filename,
  id,
}) => {
  const parameters = useSelector(state => stateSelector(state, 'parameters'));
  const dispatch = useDispatch();
  const status = useLoading(true);

  useEffect(() => {
    if (
      id !== 'userfile'
      && (
        parameters.taskID !== id
        || parameters.filename !== filename
      )
    ) {
      const getFile = async () => {
        const response = await fetch(`/task/${id}/${filename}`);
        if (response.error) {
          status.setError(true);
          status.setErrorMessage('There was an error displaying the image');
        } else {
          const { data } = response;
          data.parameters.filename = filename;
          data.parameters.taskID = id;
          dispatch(parseFile(data));
        }
        status.setLoading(false);
      };
      getFile();
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
