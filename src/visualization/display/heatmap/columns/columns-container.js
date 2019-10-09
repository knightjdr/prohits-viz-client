import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import Columns from './columns';
import selectColumns from '../../../../state/selector/visualization/column-selector';
import parseNames from '../names/names';
import setFontSize from '../font-size/font-size';
import useContextMenu from '../context-menu/use-context-menu';
import { selectDataProperty } from '../../../../state/selector/visualization/data-selector';

const ColumnsContainer = () => {
  const [tooltip, setTooltip] = useState({
    open: false,
    position: { x: 0, y: 0 },
    text: '',
  });

  const columnRef = useSelector(state => selectDataProperty(state, 'columns', 'ref'));
  const names = useSelector(state => selectColumns(state));
  const pageX = useSelector(state => selectDataProperty(state, 'dimensions', 'pageX'));
  const settings = useSelector(state => selectDataProperty(state, 'settings', 'current'));
  const sortBy = useSelector(state => selectDataProperty(state, 'rows', 'sortBy'));
  const sortDirection = useSelector(state => selectDataProperty(state, 'rows', 'direction'));
  const x = useSelector(state => selectDataProperty(state, 'position', 'x'));

  const contextMenu = useContextMenu('context-columns', 'columns');

  const { cellSize } = settings;
  const fontSize = setFontSize(cellSize);

  const columnNames = useMemo(
    () => parseNames(names, x, pageX, fontSize),
    [names, x, pageX, fontSize],
  );

  const handleClick = (e) => {
    const { name } = e.currentTarget.dataset;
    if (e.shiftKey) {
      contextMenu.sortRows(name);
    } else if (e.altKey) {
      contextMenu.setSelections([name], 'columns', 'columnsSelected');
    }
  };

  const hideTooltip = (e) => {
    const { trimmed } = e.currentTarget.dataset;
    if (trimmed === 'true') {
      setTooltip({
        ...tooltip,
        open: false,
      });
    }
  };

  const showTooltip = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { name, trimmed } = currentTarget.dataset;
    if (trimmed === 'true') {
      setTooltip({
        open: true,
        position: { x: clientX, y: clientY },
        text: name,
      });
    }
  };

  return (
    <Columns
      cellSize={cellSize}
      contextMenu={contextMenu.Component}
      fontSize={fontSize}
      handleClick={handleClick}
      hideTooltip={hideTooltip}
      names={columnNames}
      openContextMenu={contextMenu.open}
      search={{}}
      sortBy={sortBy}
      sortDirection={sortDirection}
      reference={columnRef}
      showTooltip={showTooltip}
      sortingNotification={contextMenu.SortingComponent}
      tooltip={tooltip}
    />
  );
};

export default ColumnsContainer;
