import PropTypes from 'prop-types';
import React from 'react';

import ContextMenu from './context-menu';
import PasteInput from './paste-input';

const Modals = ({
  handleContextMenuClose,
  handlePasteInputClose,
  isContextMenuOpen,
  isPasteInputOpen,
  ...props
}) => (
  <>
    <ContextMenu
      handleClose={handleContextMenuClose}
      isOpen={isContextMenuOpen}
      {...props}
    />
    <PasteInput
      handleClose={handlePasteInputClose}
      isOpen={isPasteInputOpen}
    />
  </>
);

Modals.propTypes = {
  handleContextMenuClose: PropTypes.func.isRequired,
  handlePasteInputClose: PropTypes.func.isRequired,
  isContextMenuOpen: PropTypes.bool.isRequired,
  isPasteInputOpen: PropTypes.bool.isRequired,
};

export default Modals;
