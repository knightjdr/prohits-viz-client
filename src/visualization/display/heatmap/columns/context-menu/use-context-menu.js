import React, { useState } from 'react';

import ContextMenu from './context-menu';

const ContextMenuContainer = () => {
  const [contextItem, setContextItem] = useState('');
  const [isOpen, setOpen] = useState(false);
  const [position, setPosition] = useState({
    horizontal: 'left',
    vertical: 'top',
    x: 0,
    y: 0,
  });

  const closeMenu = () => {
    setOpen(false);
  };

  const openMenu = (e) => {
    e.preventDefault();
    const { clientX, clientY, currentTarget } = e;
    setContextItem(currentTarget.dataset.name);
    setPosition({
      ...position,
      x: clientX,
      y: clientY,
    });
    setOpen(true);
  };

  const setReference = () => {
    closeMenu();
  };

  const setSelection = () => {
    closeMenu();
  };

  const sortAscending = () => {
    closeMenu();
  };

  const sortDescending = () => {
    closeMenu();
  };

  const unsetReference = () => {
    closeMenu();
  };

  return {
    open: openMenu,
    Component: (
      <ContextMenu
        handleClose={closeMenu}
        isOpen={isOpen}
        position={position}
        reference="reference"
        setReference={setReference}
        setSelection={setSelection}
        sortAscending={sortAscending}
        sortDescending={sortDescending}
        target="target"
        unsetReference={unsetReference}
      />
    ),
  };
};

export default ContextMenuContainer;
