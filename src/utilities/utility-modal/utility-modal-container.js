import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import UtilityModal from './utility-modal';

import useTask from '../../hooks/tasks/use-task';
import { selectStateProperty } from '../../state/selector/general';

const UtilityModalContainer = ({
  handleClose,
  taskID,
}) => {
  const [downloading, setDownloadingStatus] = useState(false);
  const status = useSelector((state) => selectStateProperty(state, 'tasks', taskID));

  const taskHandlers = useTask();

  const download = async (e) => {
    setDownloadingStatus(true);
    await taskHandlers.download(e);
    setDownloadingStatus(false);
  };

  return (
    <UtilityModal
      download={download}
      downloading={downloading}
      handleClose={handleClose}
      status={status}
      taskID={taskID}
    />
  );
};

UtilityModalContainer.propTypes = {
  handleClose: PropTypes.func.isRequired,
  taskID: PropTypes.string.isRequired,
};

const ShowWrapper = ({
  taskID,
  ...props
}) => (
  taskID && <UtilityModalContainer taskID={taskID} {...props} />
);

ShowWrapper.propTypes = {
  handleClose: PropTypes.func.isRequired,
  taskID: PropTypes.string.isRequired,
};

export default ShowWrapper;
