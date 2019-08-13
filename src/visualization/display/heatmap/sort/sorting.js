import PropTypes from 'prop-types';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/pro-duotone-svg-icons';

import Modal from '../../../../components/modal/modal-container';

import './sorting.css';

const Sorting = ({
  isOpen,
}) => (
  <Modal
    background={false}
    isOpen={isOpen}
    name="sorting-notification"
    placement={{
      horizontal: 'center',
      vertical: 'center',
    }}
  >
    <span className="sorting__notification">
      <FontAwesomeIcon icon={faSpinner} spin />
      sorting
    </span>
  </Modal>
);

Sorting.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default Sorting;
