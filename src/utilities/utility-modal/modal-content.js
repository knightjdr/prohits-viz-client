import PropTypes from 'prop-types';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faExclamationTriangle, faSpinner } from '@fortawesome/pro-duotone-svg-icons';

import Link from '../../components/link/text/link';

const getModalElements = {
  complete: () => ({
    alertMessage: 'The task is complete.',
    icon: faCheck,
    iconClass: 'utility__modal-status_green',
    link: true,
    description: (
      <p className="utility__modal-complete-container">
        Use the button below to download the results.
      </p>
    ),
  }),
  error: () => ({
    alertMessage: 'There was an error running the utility.',
    icon: faExclamationTriangle,
    iconClass: 'task__modal-status-icon_red',
    link: true,
    description: (
      <p>
        Please email
        {' '}
        <Link to="mailto:contact@prohits-viz.org?Subject=ProHits-viz%20utility%20support">
          contact@prohits-viz.org
        </Link>
        {' '}
        for support.
      </p>
    ),
  }),
  initializing: () => ({
    alertMessage: 'Initializing...',
    icon: faSpinner,
    iconClass: 'utility__modal-status-icon',
    spinIcon: true,
  }),
  running: (taskID) => ({
    alertMessage: 'The task is running....',
    icon: faSpinner,
    iconClass: 'utility__modal-status-icon',
    spinIcon: true,
    description: (
      <>
        <p>You can track its status from:</p>
        <ol>
          <li>This window</li>
          <li>
            From this link:
            {' '}
            <Link to={`/tasks/${taskID}`}>
              {`${process.env.REACT_APP_URI}/task/${taskID}`}
            </Link>
          </li>
          <li>
            By clicking the
            {' '}
            <Link
              to="/tasks"
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
  status,
  taskID,
}) => {
  const elements = getModalElements[status || 'initializing'](taskID);
  return (
    <>
      <div className="utility__modal-status-icon">
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
  status: PropTypes.string.isRequired,
  taskID: PropTypes.string.isRequired,
};

export default ModalContent;
