import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';
import { createPortal } from 'react-dom';

import Div from './modal-style';
import ModalFooter from './modal-footer';
import ModalHeader from './modal-header';

const Modal = forwardRef((
  {
    children,
    className,
    footer,
    portal,
    title,
  },
  ref,
) => createPortal(
  <Div className={className}>
    <section ref={ref}>
      <ModalHeader title={title} />
      <div>
        {children}
      </div>
      <ModalFooter footer={footer} />
    </section>
  </Div>,
  portal,
));

Modal.defaultProps = {
  children: null,
  title: '',
};

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string.isRequired,
  footer: PropTypes.bool.isRequired,
  portal: PropTypes.shape({}).isRequired,
  title: PropTypes.string,
};

export default Modal;
