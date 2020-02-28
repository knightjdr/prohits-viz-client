import PropTypes from 'prop-types';
import React from 'react';

import Button from '../../components/buttons/rectangular/button';

const ModalFooter = ({
  handleClose,
}) => (
  <div className="tasks__modal-footer">
    <Button
      className="task__modal-footer-close"
      kind="warning"
      onClick={handleClose}
      type="button"
    >
      Close
    </Button>
  </div>
);

ModalFooter.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

export default ModalFooter;
