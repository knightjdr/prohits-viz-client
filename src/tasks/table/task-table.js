import PropTypes from 'prop-types';
import React from 'react';
import { faSync } from '@fortawesome/pro-duotone-svg-icons';

import Button from '../../components/buttons/icon/button';
import Table from '../../components/table/table-container';

import columnDefinitions from './column-definitions';

import './task-table.css';

const TaskTable = ({
  fetchStatus,
  rows,
}) => (
  <div className="tasks__table">
    <div className="tasks__refresh-button">
      <Button
        data-tooltip="Refresh status"
        data-tooltip-position="right"
        icon={faSync}
        kind="primary"
        onClick={fetchStatus}
        type="button"
      />
    </div>
    <Table
      fieldOrder={columnDefinitions.order}
      header={columnDefinitions.header}
      minWidth={850}
      rowHeight={50}
      rows={rows}
      sortBy="date"
      sortByDirection="descending"
    />
  </div>
);

TaskTable.propTypes = {
  fetchStatus: PropTypes.func.isRequired,
  rows: PropTypes.arrayOf(
    PropTypes.shape({}),
  ).isRequired,
};

export default TaskTable;
