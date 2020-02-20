import PropTypes from 'prop-types';
import React, { useState } from 'react';

import AdvancedField from './advanced-field';

const AdvancedFieldContainer = ({
  children,
  message,
  title,
}) => {
  const [isModalOpen, setModalState] = useState(false);

  const toggleModal = () => {
    setModalState(!isModalOpen);
  };

  return (
    <AdvancedField
      message={message}
      isModalOpen={isModalOpen}
      title={title}
      toggleModal={toggleModal}
    >
      {children}
    </AdvancedField>
  );
};

AdvancedFieldContainer.propTypes = {
  children: PropTypes.node.isRequired,
  message: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default AdvancedFieldContainer;
