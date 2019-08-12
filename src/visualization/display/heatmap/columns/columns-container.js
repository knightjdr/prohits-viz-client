import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import Columns from './columns';
import names from './names';
import setFontSize from '../font-size/font-size';
import useContextMenu from './context-menu/use-context-menu';
import { stateSelector, stateSelectorProp } from '../../../../state/selector/general';

const ColumnsContainer = () => {
  const columns = useSelector(state => stateSelector(state, 'columns'));
  const pageX = useSelector(state => stateSelectorProp(state, 'dimensions', 'pageX'));
  const settings = useSelector(state => stateSelectorProp(state, 'settings', 'current'));
  const x = useSelector(state => stateSelectorProp(state, 'position', 'x'));

  const contextMenu = useContextMenu();

  const { cellSize } = settings;
  const fontSize = setFontSize(cellSize);

  const columnNames = useMemo(
    () => names(columns.names, x, pageX, fontSize),
    [columns.names, x, pageX, fontSize],
  );

  const handleClick = () => {
  };

  const hideTooltip = () => {
  };

  const showTooltip = () => {
  };

  return (
    <Columns
      cellSize={cellSize}
      contextMenu={contextMenu.Component}
      fontSize={fontSize}
      names={columnNames}
      openContextMenu={contextMenu.open}
      search={{}}
      handleClick={handleClick}
      hideTooltip={hideTooltip}
      reference={columns.ref}
      showTooltip={showTooltip}
    />
  );
};

export default ColumnsContainer;
