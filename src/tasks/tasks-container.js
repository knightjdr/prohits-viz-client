import React, { useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import Tasks from './tasks';

import addTaskNames from './add-task-names';
import fetch from '../utils/fetch';
import filterTasksToDisplay from './filter-tasks-to-display';
import useOnMount from '../hooks/on-mount/use-on-mount';
import useTask from '../hooks/tasks/use-task';
import { selectState } from '../state/selector/general';
import { updateTasks, updateTaskStatus } from '../state/task/task-actions';

const TasksContainer = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [errorStatus, setErrorStatus] = useState(0);
  const [isLoading, setLoadingState] = useState(true);

  const tasks = useSelector((state) => selectState(state, 'tasks'));

  const taskHandlers = useTask();

  const tasksToDisplay = useMemo(() => filterTasksToDisplay(id, tasks), [id, tasks]);

  const updateStatus = (result) => {
    if (result.error) {
      setErrorStatus(1);
    } else if (Object.keys(result.data.tasks).length === 0) {
      setErrorStatus(2);
    } else if (id) {
      dispatch(updateTaskStatus(id, result.data.tasks[id]));
    } else {
      const availableTasksWithLocalNames = addTaskNames(tasks, result.data.tasks);
      dispatch(updateTasks(availableTasksWithLocalNames));
    }
  };

  const fetchStatus = async () => {
    setErrorStatus(0);
    setLoadingState(true);

    const tasksToUpdate = id ? [id] : Object.keys(tasks);
    if (tasksToUpdate.length > 0) {
      const availableTasks = await fetch(`/status/${tasksToUpdate.join(';')}`);
      updateStatus(availableTasks);
    } else {
      setErrorStatus(2);
    }
    setLoadingState(false);
  };

  useOnMount(() => {
    fetchStatus();
  });

  return (
    <Tasks
      errorStatus={errorStatus}
      fetchStatus={fetchStatus}
      isLoading={isLoading}
      taskHandlers={taskHandlers}
      tasks={tasksToDisplay}
    />
  );
};

export default TasksContainer;
