import PropTypes from 'prop-types';
import React, { useState } from 'react';

import AdvancedField from './advanced-field';

import createModalID from '../../../../components/modal/create-modal-id';

const AdvancedFieldContainer = ({
  className,
  children,
  iconMargin,
  message,
  title,
}) => {
  const [id] = useState(createModalID('help-modal'));
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
};

AdvancedFieldContainer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  iconMargin: PropTypes.bool,
  message: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default AdvancedFieldContainer;
