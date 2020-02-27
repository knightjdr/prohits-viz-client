import PropTypes from 'prop-types';
import React from 'react';

import Loading from './loading';
import Table from './table/task-table-container';

const Tasks = ({
  error,
  isLoading,
  tasks,
}) => (
  <>
    <Loading error={error} isLoading={isLoading} />
    {!(error && isLoading) && <Table tasks={tasks} />}
  </>
);

Tasks.propTypes = {
  error: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({}),
  ).isRequired,
};

export default Tasks;
