import PropTypes from 'prop-types';
import React from 'react';
import { faDownload, faSpinner } from '@fortawesome/pro-duotone-svg-icons';

import Button from '../../../components/buttons/rectangular/button';
import IconButton from '../../../components/buttons/icon/button';
import Select from '../../../components/select/select-container';

const FileSelector = ({
  download,
  downloading,
  handleChange,
  task,
  view,
}) => (
  <div className="tasks__table-file-selector">
    {
      task.files?.length > 0
      && (
        <>
          <Select
            id={`task-select-${task.id}`}
            onChange={handleChange}
            options={task.files}
            placeholder="Select file..."
            value={task.primaryFile}
          />
          <Button
            data-primaryfile={task.primaryFile}
            data-taskid={task.id}
            kind="success"
            onClick={view}
            type="button"
          >
            View
          </Button>
        </>
      )
    }
    {
      task.status === 'complete'
      && (
        <IconButton
          data-tool={task.tool}
          data-taskid={task.id}
          data-tooltip="Download task folder"
          data-tooltip-position="left"
          disabled={downloading}
          kind="primary"
          icon={downloading ? faSpinner : faDownload}
          onClick={download}
          spin={downloading}
          type="button"
        />
      )
    }
  </div>
);

FileSelector.propTypes = {
  download: PropTypes.func.isRequired,
  downloading: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  task: PropTypes.shape({
    files: PropTypes.arrayOf(PropTypes.string),
    id: PropTypes.string,
    primaryFile: PropTypes.string,
    status: PropTypes.string,
    tool: PropTypes.string,
  }).isRequired,
  view: PropTypes.func.isRequired,
};

export default FileSelector;
