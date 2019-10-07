import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import Columns from './rows';
import names from '../names/names';
import setFontSize from '../font-size/font-size';
import useContextMenu from '../context-menu/use-context-menu';
import { rowNamesSelector } from '../../../../state/selector/visualization/row-selector';
import { selectDataProperty } from '../../../../state/selector/visualization/data-selector';
import { selectStateProperty } from '../../../../state/selector/general';

const RowsContainer = () => {
  const [tooltip, setTooltip] = useState({
    open: false,
    position: { x: 0, y: 0 },
    text: '',
  });

  const orderedNames = useSelector(state => rowNamesSelector(state));
  const pageY = useSelector(state => selectStateProperty(state, 'dimensions', 'pageY'));
  const settings = useSelector(state => selectDataProperty(state, 'settings', 'current'));
  const y = useSelector(state => selectStateProperty(state, 'position', 'y'));

  const contextMenu = useContextMenu('context-rows', 'rows');

  const { cellSize } = settings;
  const fontSize = setFontSize(cellSize);

  const rowNames = useMemo(
    () => names(orderedNames, y, pageY, fontSize),
    [orderedNames, y, pageY, fontSize],
  );

  const handleClick = (e) => {
    const { name } = e.currentTarget.dataset;
    if (e.altKey) {
      contextMenu.setSelections([name], 'rows', 'rowsSelected');
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
      names={rowNames}
      openContextMenu={contextMenu.open}
      search={{}}
      showTooltip={showTooltip}
      tooltip={tooltip}
    />
  );
};

export default RowsContainer;
