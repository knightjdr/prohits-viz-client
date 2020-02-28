import PropTypes from 'prop-types';
import React, { useMemo } from 'react';

import TaskTable from './task-table';

import formatRows from './format/format-rows';

const TaskTableContainer = ({
  download,
  fetchStatus,
  handleChangeFile,
  tasks,
  viewImage,
}) => {
  const tableRows = useMemo(
    () => formatRows(tasks, handleChangeFile, viewImage, download),
    [tasks, handleChangeFile, viewImage, download],
  );

  return (
    <TaskTable
      fetchStatus={fetchStatus}
      rows={tableRows}
    />
  );
};

TaskTableContainer.propTypes = {
  download: PropTypes.func.isRequired,
  fetchStatus: PropTypes.func.isRequired,
  handleChangeFile: PropTypes.func.isRequired,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({}),
  ).isRequired,
  viewImage: PropTypes.func.isRequired,
};

export default TaskTableContainer;
