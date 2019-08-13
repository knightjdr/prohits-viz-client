import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import Columns from './columns';
import names from '../names/names';
import setFontSize from '../font-size/font-size';
import useContextMenu from '../context-menu/use-context-menu';
import { stateSelector, stateSelectorProp } from '../../../../state/selector/general';

const ColumnsContainer = () => {
  const [tooltip, setTooltip] = useState({
    open: false,
    position: { x: 0, y: 0 },
    text: '',
  });

  const columns = useSelector(state => stateSelector(state, 'columns'));
  const pageX = useSelector(state => stateSelectorProp(state, 'dimensions', 'pageX'));
  const settings = useSelector(state => stateSelectorProp(state, 'settings', 'current'));
  const x = useSelector(state => stateSelectorProp(state, 'position', 'x'));

  const contextMenu = useContextMenu('context-columns', 'columns');

  const { cellSize } = settings;
  const fontSize = setFontSize(cellSize);

  const columnNames = useMemo(
    () => names(columns.names, x, pageX, fontSize),
    [columns.names, x, pageX, fontSize],
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
      reference={columns.ref}
      showTooltip={showTooltip}
      sortingNotification={contextMenu.SortingComponent}
      tooltip={tooltip}
    />
  );
};

export default ColumnsContainer;