import PropTypes from 'prop-types';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faExclamationTriangle, faSpinner } from '@fortawesome/pro-duotone-svg-icons';

import Button from '../../components/buttons/rectangular/button';
import ButtonLink from '../../components/buttons/link/button';
import Link from '../../components/link/text/link';
import Select from '../../components/select/select-container';

const getModalElements = {
  complete: (options) => ({
    alertMessage: 'The task is complete.',
    icon: faCheck,
    iconClass: 'task__modal-status_green',
    link: true,
    description: (
      <div className="task__modal-complete-container">
        <Select
          id="select_image"
          label="Available files"
          onChange={options.handleChangeFile}
          options={options.status.files}
          placeholder="Select file..."
          value={options.status.primaryFile}
        />
        <Button
          data-primaryfile={options.status.primaryFile}
          data-taskid={options.taskID}
          kind="success"
          onClick={options.viewImage}
          type="button"
        >
          View
        </Button>
      </div>
    ),
  }),
  error: (options) => ({
    alertMessage: 'There was an error running the task.',
    icon: faExclamationTriangle,
    iconClass: 'task__modal-status-icon_red',
    link: true,
    description: (
      <div className="task__modal-error-button-container">
        <ButtonLink
          data-file="error"
          id="task_file"
          onClick={options.viewText}
          type="button"
        >
          Show errors
        </ButtonLink>
      </div>
    ),
  }),
  initializing: () => ({
    alertMessage: 'Initializing...',
    icon: faSpinner,
    iconClass: 'task__modal-status-icon',
    spinIcon: true,
  }),
  running: (options) => ({
    alertMessage: 'The task is running....',
    icon: faSpinner,
    iconClass: 'task__modal-status-icon',
    spinIcon: true,
    description: (
      <>
        <p>You can track its status from:</p>
        <ol>
          <li>This window</li>
          <li>
            From this link:
            {' '}
            <Link
              href={`/tasks/${options.taskID}`}
            >
              {`${process.env.REACT_APP_URI}/task/${options.taskID}`}
            </Link>
          </li>
          <li>
            By clicking the
            {' '}
            <Link
              href="/tasks"
              visited={false}
            >
              Tasks
            </Link>
            {' '}
            link on the navigation menu at the top of the page
          </li>
        </ol>
        <p>The task results will be available for 24 hours.</p>
      </>
    ),
  }),
};

const ModalContent = ({
  handleChangeFile,
  status,
  taskID,
  viewText,
  viewImage,
}) => {
  const options = {
    handleChangeFile,
    status,
    taskID,
    viewText,
    viewImage,
  };
  const elements = getModalElements[status.status || 'initializing'](options);
  return (
    <>
      <div className="task__modal-status-icon">
        <FontAwesomeIcon
          className={elements.iconClass}
          icon={elements.icon}
          spin={elements.spinIcon}
        />
        {elements.alertMessage}
      </div>
      {elements.description}
    </>
  );
};

ModalContent.propTypes = {
  handleChangeFile: PropTypes.func.isRequired,
  status: PropTypes.shape({
    files: PropTypes.arrayOf(PropTypes.string),
    primaryFile: PropTypes.string,
    status: PropTypes.string,
  }).isRequired,
  taskID: PropTypes.string.isRequired,
  viewText: PropTypes.func.isRequired,
  viewImage: PropTypes.func.isRequired,
};

export default ModalContent;
