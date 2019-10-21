import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import Modal from '../modal/modal-container';
import StyledModalButton, { ConfirmWrapper } from './modal-button-style';

const ModalButton = forwardRef((
  {
    button,
    children,
    handleClick,
    handleClose,
    handleKeyPress,
    name,
    open,
    position,
  },
  ref,
) => (
  <ConfirmWrapper
    onClick={handleClick}
    onKeyPress={handleKeyPress}
    role="button"
    tabIndex={-1}
  >
    <span ref={ref}>
      {button}
    </span>
    <Modal
      background={false}
      fromCursor
      handleClose={handleClose}
      isOpen={open}
      name={name}
      padding={false}
      placement={position}
    >
      <StyledModalButton>
        {children}
      </StyledModalButton>
    </Modal>
  </ConfirmWrapper>
));

ModalButton.propTypes = {
  button: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleKeyPress: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  position: PropTypes.shape({
    horizontal: PropTypes.string,
    vertical: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
  }).isRequired,
};

export default ModalButton;
