import React from 'react';

import FileSelector from './file-selector-container';
import Id from './id-container';

import convertIsoDate from '../../../utils/convert-iso-date';
import getStatus from './get-status';

const formatRows = (tasks, handleChangeFile, viewImage, download) => (
  tasks.map((task) => ({
    date: {
      content: convertIsoDate(task.date, true),
    },
    files: {
      content: (
        <FileSelector
          download={download}
          task={task}
          viewImage={viewImage}
        />
      ),
    },
    id: {
      content: (
        <Id
          id={task.id}
          name={task.name}
        />
      ),
    },
    rowID: task.id,
    status: {
      content: getStatus(task.status),
    },
    tool: {
      content: task.tool,
    },
  }))
);

export default formatRows;
