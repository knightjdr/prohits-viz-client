import PropTypes from 'prop-types';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion, faQuestionCircle } from '@fortawesome/pro-duotone-svg-icons';

import IconButton from '../../../../components/buttons/icon/button';
import Modal from '../../../../components/modal/modal-container';

import './advanced-field.css';

const AdvancedField = ({
  className,
  children,
  handleModalClose,
  iconMargin,
  id,
  isModalOpen,
  message,
  title,
  toggleModal,
}) => (
  <div className={className}>
    <div className="analysis__advanced-field-help">
      {children}
      <IconButton
        className={iconMargin ? 'analysis__advanced-field-help-icon_margin' : 'analysis__advanced-field-help-icon'}
        icon={faQuestion}
        onClick={toggleModal}
        type="button"
      />
    </div>
    <Modal
      handleClose={handleModalClose}
      isOpen={isModalOpen}
      name={id}
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
  </div>
);

AdvancedField.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  handleModalClose: PropTypes.func.isRequired,
  iconMargin: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  message: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default AdvancedField;
