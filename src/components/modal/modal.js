import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';
import { createPortal } from 'react-dom';

import StyledModal from './modal-style';
import ModalFooter from './modal-footer';
import ModalHeader from './modal-header';

const Modal = forwardRef((
  {
    background,
    children,
    className,
    footer,
    portal,
    shadow,
    title,
    transform,
  },
  ref,
) => createPortal(
  <StyledModal
    background={background}
    className={className}
    shadow={shadow}
  >
    <section
      ref={ref}
      style={transform}
    >
      <ModalHeader title={title} />
      <div>
        {children}
      </div>
      <ModalFooter footer={footer} />
    </section>
  </StyledModal>,
  portal,
));

Modal.defaultProps = {
  background: true,
  children: null,
  footer: null,
  shadow: true,
  title: '',
};

Modal.propTypes = {
  background: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string.isRequired,
  footer: PropTypes.bool,
  portal: PropTypes.shape({}).isRequired,
  shadow: PropTypes.bool,
  title: PropTypes.string,
  transform: PropTypes.shape({
    transformOrigin: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
  }).isRequired,
};

export default Modal;
