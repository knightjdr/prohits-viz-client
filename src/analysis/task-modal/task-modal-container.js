import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import TaskModal from './task-modal';

import useTask from '../../hooks/tasks/use-task';
import { selectStateProperty } from '../../state/selector/general';

const TaskModalContainer = ({
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

  const viewText = (e) => {
    taskHandlers.fetchText(taskID, e.target.dataset.file);
  };

  return (
    <TaskModal
      download={download}
      downloading={downloading}
      fetchingText={taskHandlers.fetchingText}
      handleChangeFile={taskHandlers.handleChangeFile}
      handleClose={handleClose}
      status={status}
      taskID={taskID}
      text={taskHandlers.text}
      viewText={viewText}
      viewImage={taskHandlers.viewImage}
    />
  );
};

TaskModalContainer.propTypes = {
  handleClose: PropTypes.func.isRequired,
  taskID: PropTypes.string.isRequired,
};

const ShowWrapper = ({
  taskID,
  ...props
}) => (
  taskID && <TaskModalContainer taskID={taskID} {...props} />
);

ShowWrapper.propTypes = {
  handleClose: PropTypes.func.isRequired,
  taskID: PropTypes.string.isRequired,
};

export default ShowWrapper;
