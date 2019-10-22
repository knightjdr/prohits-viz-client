import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ContextMenu from './context-menu';
// import useSelections from '../selections/use-selections';
import useSortRows from '../sort/use-sort-rows';
import { setReference } from '../../../../state/visualization/heatmap/columns-actions';
import { selectDataProperty } from '../../../../state/selector/visualization/data-selector';

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
  const reference = useSelector(state => selectDataProperty(state, 'columns', 'ref'));

  // const setSelections = useSelections('columns', 'text');
  const rowSort = useSortRows();

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

  /* const setSelection = () => {
    closeMenu();
    setSelections([contextItem], containerType, `${containerType}Selected`);
  }; */

  const sortAscending = () => {
    closeMenu();
    rowSort.process(contextItem, 'asc', reference);
  };

  const sortDescending = () => {
    closeMenu();
    rowSort.process(contextItem, 'desc', reference);
  };

  const unsetReference = () => {
    closeMenu();
    dispatch(setReference(''));
  };

  return {
    open: openMenu,
    // setSelections,
    sortRows: rowSort.process,
    Component: (
      <ContextMenu
        containerType={containerType}
        handleClose={closeMenu}
        name={name}
        isOpen={isOpen}
        position={position}
        reference={reference}
        setReference={setReferenceColumn}
        setSelection={() => {}}
        sortAscending={sortAscending}
        sortDescending={sortDescending}
        target={contextItem}
        unsetReference={unsetReference}
      />
    ),
    SortingComponent: rowSort.Component,
  };
};

export default useContextMenu;
