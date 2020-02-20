import PropTypes from 'prop-types';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion, faQuestionCircle } from '@fortawesome/pro-duotone-svg-icons';

import IconButton from '../../../../components/buttons/icon/button';
import Modal from '../../../../components/modal/modal-container';

import './advanced-field.css';

const AdvancedField = ({
  children,
  isModalOpen,
  message,
  title,
  toggleModal,
}) => (
  <>
    <div className="analysis__advanced-field_help">
      {children}
      <IconButton
        icon={faQuestion}
        onClick={toggleModal}
        type="button"
      />
    </div>
    <Modal
      handleClose={toggleModal}
      isOpen={isModalOpen}
      name="help-modal"
      placement={{
        horizontal: 'center',
        vertical: 'center',
      }}
      title={(
        <div className="analysis__advanced-field-modal-header">
          <FontAwesomeIcon icon={faQuestionCircle} />
          {title}
        </div>
      )}
    >
      {message}
    </Modal>
  </>
);

AdvancedField.propTypes = {
  children: PropTypes.node.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  message: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default AdvancedField;
