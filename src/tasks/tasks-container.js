import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Tasks from './tasks';

import fetch from '../utils/fetch';
import filterTasks from './filter-tasks';
import { selectState } from '../state/selector/general';
import { updateTasks } from '../state/task/task-actions';

const TasksContainer = ({
  id,
}) => {
  const dispatch = useDispatch();

  const [error, setErrorState] = useState(false);
  const [isLoading, setLoadingState] = useState(true);

  const tasks = useSelector(state => selectState(state, 'tasks'));

  const updateStatus = async () => {
    const taskIDs = id ? [id] : Object.keys(tasks);
    if (taskIDs.length > 0) {
      setErrorState(false);
      setLoadingState(true);
      const result = await fetch(`/status/${taskIDs.join(';')}`);
      setLoadingState(false);
      if (result.error) {
        setErrorState(true);
      } else {
        dispatch(updateTasks(result.data.status));
      }
    }
  };

  useEffect(() => {
    updateStatus();
    // eslint-disable-next-line
  }, []);

  const tasksToDisplay = filterTasks(id, tasks);

  return (
    <Tasks
      error={error}
      isLoading={isLoading}
      tasks={tasksToDisplay}
    />
  );
};

TasksContainer.defaultProps = {
  id: '',
};

TasksContainer.propTypes = {
  id: PropTypes.string,
};

export default TasksContainer;
