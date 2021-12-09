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
    ...props
  },
  ref,
) => createPortal(
  <StyledModal
    className={className}
    {...props}
  >
    <section ref={ref}>
      <ModalHeader title={title} />
      <div className="modal__content">
        {children}
      </div>
      <ModalFooter footer={footer} />
    </section>
  </StyledModal>,
  portal,
));

Modal.displayName = 'Modal';
Modal.defaultProps = {
  children: null,
  className: undefined,
  footer: null,
  title: '',
};

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
  footer: PropTypes.node,
  portal: PropTypes.shape({}).isRequired,
  title: PropTypes.node,
};

export default Modal;
