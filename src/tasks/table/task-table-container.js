import PropTypes from 'prop-types';
import React, { useMemo } from 'react';

import TaskTable from './task-table';

import formatRows from './format/format-rows';

const TaskTableContainer = ({
  tasks,
}) => {
  const tableRows = useMemo(
    () => formatRows(tasks),
    [tasks],
  );

  console.log(tableRows);
  return (
    <TaskTable rows={tableRows} />
  );
};

TaskTableContainer.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({}),
  ).isRequired,
};

export default TaskTableContainer;
