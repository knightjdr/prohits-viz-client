import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';

import AdvancedField from './advanced-field';

const createModalID = (modalID) => (
  modalID ? `help-modal-${modalID}` : `help-modal-${nanoid()}`
);

const AdvancedFieldContainer = ({
  className,
  children,
  iconMargin,
  message,
  modalID,
  title,
}) => {
  const [id] = useState(createModalID(modalID));
  const [isModalOpen, setModalState] = useState(false);

  const handleModalClose = () => {
    setModalState(false);
  };

  const toggleModal = () => {
    setModalState(!isModalOpen);
  };

  return (
    <AdvancedField
      className={className}
      handleModalClose={handleModalClose}
      iconMargin={iconMargin}
      id={id}
      isModalOpen={isModalOpen}
      message={message}
      title={title}
      toggleModal={toggleModal}
    >
      {children}
    </AdvancedField>
  );
};

AdvancedFieldContainer.defaultProps = {
  className: 'analysis__advanced-field',
  iconMargin: true,
  modalID: '',
};

AdvancedFieldContainer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  iconMargin: PropTypes.bool,
  message: PropTypes.node.isRequired,
  modalID: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default AdvancedFieldContainer;
