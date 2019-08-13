import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';
import { createPortal } from 'react-dom';

import StyledModal from './modal-style';
import ModalFooter from './modal-footer';
import ModalHeader from './modal-header';

const Modal = forwardRef((
  {
    children,
    className,
    footer,
    portal,
    title,
    transform,
    ...props
  },
  ref,
) => createPortal(
  <StyledModal
    className={className}
    {...props}
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
  children: null,
  footer: null,
  title: '',
};

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string.isRequired,
  footer: PropTypes.bool,
  portal: PropTypes.shape({}).isRequired,
  title: PropTypes.string,
  transform: PropTypes.shape({
    transformOrigin: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
  }).isRequired,
};

export default Modal;
