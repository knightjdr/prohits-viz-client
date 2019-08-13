import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ContextMenu from './context-menu';
import useSelections from '../selections/use-selections';
import useSortRows from '../sort/use-sort-rows';
import { setReference } from '../../../../state/visualization/file/columns-actions';
import { stateSelectorProp } from '../../../../state/selector/general';

const useContextMenu = (name = 'contextMenu', containerType = 'columns') => {
  const [contextItem, setContextItem] = useState('');
  const [isOpen, setOpen] = useState(false);
  const [position, setPosition] = useState({
    horizontal: 'left',
    vertical: 'top',
    x: 0,
    y: 0,
  });

  const dispatch = useDispatch();

  const reference = useSelector(state => stateSelectorProp(state, 'columns', 'ref'));

  const setSelections = useSelections('columns', 'text');
  const sort = useSortRows();

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

  const setReferenceColumn = () => {
    closeMenu();
    dispatch(setReference(contextItem));
  };

  const setSelection = () => {
    closeMenu();
    setSelections([contextItem], containerType, `${containerType}Selected`);
  };

  const sortAscending = () => {
    closeMenu();
    sort.rows(contextItem, 'asc', reference);
  };

  const sortDescending = () => {
    closeMenu();
    sort.rows(contextItem, 'desc', reference);
  };

  const unsetReference = () => {
    closeMenu();
    dispatch(setReference(''));
  };

  return {
    open: openMenu,
    setSelections,
    sortRows: sort.rows,
    Component: (
      <ContextMenu
        containerType={containerType}
        handleClose={closeMenu}
        name={name}
        isOpen={isOpen}
        position={position}
        reference={reference}
        setReference={setReferenceColumn}
        setSelection={setSelection}
        sortAscending={sortAscending}
        sortDescending={sortDescending}
        target={contextItem}
        unsetReference={unsetReference}
      />
    ),
    SortingComponent: sort.Component,
  };
};

export default useContextMenu;
