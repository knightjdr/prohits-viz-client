import PropTypes from 'prop-types';
import React, { useState } from 'react';
import nanoid from 'nanoid';

import AdvancedField from './advanced-field';

const createModalID = modalID => (
  modalID ? `help-modal-${modalID}` : `help-modal-${nanoid()}`
);

const AdvancedFieldContainer = ({
  children,
  message,
  modalID,
  title,
}) => {
  const [id] = useState(createModalID(modalID));
  const [isModalOpen, setModalState] = useState(false);

  const toggleModal = () => {
    setModalState(!isModalOpen);
  };

  return (
    <AdvancedField
      message={message}
      id={id}
      isModalOpen={isModalOpen}
      title={title}
      toggleModal={toggleModal}
    >
      {children}
    </AdvancedField>
  );
};

AdvancedFieldContainer.defaultProps = {
  modalID: '',
};

AdvancedFieldContainer.propTypes = {
  children: PropTypes.node.isRequired,
  message: PropTypes.node.isRequired,
  modalID: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default AdvancedFieldContainer;
