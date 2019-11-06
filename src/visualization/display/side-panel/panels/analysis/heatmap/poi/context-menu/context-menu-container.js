import PropTypes from 'prop-types';
import React, { useState } from 'react';

import ContextMenu from './context-menu';
import PasteInput from './paste-input';

const ContextMenuContainer = ({
  columns,
  handleMenuClose,
  menuState,
  rows,
}) => {
  const [isPasteInputOpen, setPasteInputState] = useState(true);
  const [pasteText, setPasteText] = useState('');

  const canPaste = menuState.selectionType === 'selected';

  const handlePasteInputClose = () => {
    setPasteInputState(false);
  };

  const handleAppend = () => {
    handlePasteInputClose();
  };

  const handleCopy = () => {};

  const handleCopyHighlighted = () => {};

  const handlePasteInputOpen = () => {
    handleMenuClose();
    setPasteInputState(true);
  };

  const handlePasteTextChange = (e, id, value) => {
    setPasteText(value);
  };

  const handleReplace = () => {
    handlePasteInputClose();
  };

  const placement = {
    horizontal: 'right',
    vertical: 'center',
    x: menuState.x,
    y: menuState.y,
  };

  return (
    <>
      <ContextMenu
        canPaste={canPaste}
        handleClose={handleMenuClose}
        handleCopy={handleCopy}
        handleCopyHighlighted={handleCopyHighlighted}
        handlePasteInputOpen={handlePasteInputOpen}
        isOpen={menuState.isOpen}
        placement={placement}
      />
      <PasteInput
        handleAppend={handleAppend}
        handleChange={handlePasteTextChange}
        handleClose={handlePasteInputClose}
        handleReplace={handleReplace}
        isOpen={isPasteInputOpen}
        pasteText={pasteText}
      />
    </>
  );
};

ContextMenuContainer.propTypes = {
  columns: PropTypes.shape({
    unselected: PropTypes.arrayOf(
      PropTypes.shape({
        index: PropTypes.number,
        name: PropTypes.string,
      }),
    ).isRequired,
    poi: PropTypes.arrayOf(
      PropTypes.shape({
        index: PropTypes.number,
        name: PropTypes.string,
      }),
    ).isRequired,
  }).isRequired,
  handleMenuClose: PropTypes.func.isRequired,
  menuState: PropTypes.shape({
    contextType: PropTypes.string,
    isOpen: PropTypes.bool.isRequired,
    selectionType: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
  }).isRequired,
  rows: PropTypes.shape({
    unselected: PropTypes.arrayOf(
      PropTypes.shape({
        index: PropTypes.number,
        name: PropTypes.string,
      }),
    ).isRequired,
    poi: PropTypes.arrayOf(
      PropTypes.shape({
        index: PropTypes.number,
        name: PropTypes.string,
      }),
    ).isRequired,
  }).isRequired,
};

export default ContextMenuContainer;
