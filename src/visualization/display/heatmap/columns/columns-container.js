import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import Columns from './columns';

import formatNames from '../names/format-names';
import setFontSize from '../font-size/font-size';
import useContextMenu from '../context-menu/use-context-menu';
import { selectData, selectDataProperty } from '../../../../state/selector/visualization/data-selector';
import { selectVisibleColumnNames } from '../../../../state/selector/visualization/column-selector';

const ColumnsContainer = () => {
  const [tooltip, setTooltip] = useState({
    open: false,
    placement: {
      horizontal: 'left',
      vertical: 'center',
      x: 0,
      y: 0,
    },
    text: '',
  });

  const columnRef = useSelector((state) => selectDataProperty(state, 'columns', 'ref'));
  const columnSearchMatches = useSelector((state) => selectDataProperty(state, 'searchStatus', 'columns'));
  const dimensions = useSelector((state) => selectData(state, 'dimensions'));
  const names = useSelector((state) => selectVisibleColumnNames(state));
  const settings = useSelector((state) => selectDataProperty(state, 'settings', 'current'));
  const sortBy = useSelector((state) => selectDataProperty(state, 'rows', 'sortBy'));
  const sortDirection = useSelector((state) => selectDataProperty(state, 'rows', 'direction'));

  const contextMenu = useContextMenu('context-columns', 'columns');

  const { cellSize } = settings;
  const fontSize = setFontSize(cellSize);

  const columnNames = useMemo(
    () => formatNames(names, fontSize),
    [names, fontSize],
  );

  const handleClick = (e) => {
    const { name } = e.currentTarget.dataset;
    if (e.shiftKey) {
      contextMenu.sortRows(name);
    } else if (e.altKey) {
      contextMenu.appendPOI([name]);
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
        placement: {
          ...tooltip.placement,
          x: clientX,
          y: clientY,
        },
        text: name,
      });
    }
  };

  return (
    <Columns
      cellSize={cellSize}
      contextMenu={contextMenu.Component}
      dimensions={dimensions}
      fontSize={fontSize}
      handleClick={handleClick}
      hideTooltip={hideTooltip}
      names={columnNames}
      openContextMenu={contextMenu.open}
      searchMatches={columnSearchMatches}
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
