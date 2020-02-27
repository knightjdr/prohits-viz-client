import PropTypes from 'prop-types';
import React from 'react';

import Table from '../../components/table/table-container';

import columnDefinitions from './column-definitions';

import './task-table.css';

const TaskTable = ({
  rows,
}) => (
  <div className="tasks__table">
    <Table
      fieldOrder={columnDefinitions.order}
      header={columnDefinitions.header}
      minWidth={700}
      sortBy="date"
      sortByDirection="descending"
      rows={rows}
    />
  </div>
);

TaskTable.propTypes = {
  rows: PropTypes.arrayOf(
    PropTypes.shape({}),
  ).isRequired,
};

export default TaskTable;
