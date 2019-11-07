import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import ContextMenu from './context-menu';
import PasteInput from './paste-input';

import convertTextToPOI from './convert-text-to-poi';
import copyOptions from './copy-options';
import { updatePOI } from '../../../../../../../../state/visualization/analysis/poi-actions';

const ContextMenuContainer = ({
  handleMenuClose,
  menuState,
}) => {
  const dispatch = useDispatch();
  const [isPasteInputOpen, setIsPasteInputOpen] = useState(false);
  const [pasteText, setPasteText] = useState('');

  const canPaste = menuState.selectionType === 'poi';

  const handlePasteInputClose = () => {
    setIsPasteInputOpen(false);
    setPasteText('');
  };

  const pastePOI = (currentOrder = []) => {
    handlePasteInputClose();
    const newPOI = {
      [menuState.contextType]: convertTextToPOI(pasteText, menuState.items.names, currentOrder),
    };
    dispatch(updatePOI(newPOI));
  };

  const handleAppend = () => {
    pastePOI(menuState.items.poiOrder);
  };

  const handleCopy = () => {
    handleMenuClose();
    copyOptions(menuState.items[menuState.selectionType]);
  };

  const handleCopyHighlighted = () => {
    handleMenuClose();
    copyOptions(menuState.highlighted);
  };

  const handlePasteInputOpen = () => {
    handleMenuClose();
    setIsPasteInputOpen(true);
  };

  const handlePasteTextChange = (e, id, value) => {
    setPasteText(value);
  };

  const handleReplace = () => {
    pastePOI();
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
  handleMenuClose: PropTypes.func.isRequired,
  menuState: PropTypes.shape({
    contextType: PropTypes.string,
    highlighted: PropTypes.arrayOf(PropTypes.string),
    items: PropTypes.shape({
      names: PropTypes.arrayOf(PropTypes.string),
      poi: PropTypes.arrayOf(
        PropTypes.shape({
          index: PropTypes.number,
          name: PropTypes.string,
        }),
      ),
      poiOrder: PropTypes.arrayOf(PropTypes.number),
      unselected: PropTypes.arrayOf(
        PropTypes.shape({
          index: PropTypes.number,
          name: PropTypes.string,
        }),
      ),
    }),
    isOpen: PropTypes.bool.isRequired,
    selectionType: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
  }).isRequired,
};

export default ContextMenuContainer;
