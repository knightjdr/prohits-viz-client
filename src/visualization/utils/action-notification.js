import PropTypes from 'prop-types';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/pro-duotone-svg-icons';

import Modal from '../../components/modal/modal-container';

import './action-notification.css';

const ActionNotification = ({
  id,
  isOpen,
  text,
}) => (
  <Modal
    background={false}
    isOpen={isOpen}
    name={`${id}-notification`}
    placement={{
      horizontal: 'center',
      vertical: 'center',
    }}
  >
    <span className="action__notification">
      <FontAwesomeIcon icon={faSpinner} spin />
      {text}
    </span>
  </Modal>
);

ActionNotification.propTypes = {
  id: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default ActionNotification;
