import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';

import AdvancedField from './advanced-field';

const createModalID = (modalID) => (
  modalID ? `help-modal-${modalID}` : `help-modal-${nanoid()}`
);

const AdvancedFieldContainer = ({
  children,
  iconMargin,
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
  iconMargin: true,
  modalID: '',
};

AdvancedFieldContainer.propTypes = {
  children: PropTypes.node.isRequired,
  iconMargin: PropTypes.bool,
  message: PropTypes.node.isRequired,
  modalID: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default AdvancedFieldContainer;
