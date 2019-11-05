import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Reorder from './reorder';

import calculateEditElementStyle from '../calculate-edit-element-style';
import reorderArrayItem from '../../../../../utils/reorder-array-item';
import { selectData, selectDataProperty } from '../../../../../state/selector/visualization/data-selector';
import { selectVisibleColumnNames } from '../../../../../state/selector/visualization/column-selector';
import { selectVisibleRowNames } from '../../../../../state/selector/visualization/row-selector';
import { setColumnOrder } from '../../../../../state/visualization/heatmap/columns-actions';
import { setRowOrder } from '../../../../../state/visualization/heatmap/rows-actions';

const ReorderContainer = ({
  heatmapRef,
}) => {
  const dispatch = useDispatch();

  const columnOrder = useSelector(state => selectDataProperty(state, 'columns', 'order'));
  const columns = useSelector(state => selectVisibleColumnNames(state));
  const dimensions = useSelector(state => selectData(state, 'dimensions'));
  const pagePosition = useSelector(state => selectData(state, 'position'));
  const rowOrder = useSelector(state => selectDataProperty(state, 'rows', 'order'));
  const rows = useSelector(state => selectVisibleRowNames(state));
  const settings = useSelector(state => selectDataProperty(state, 'settings', 'current'));

  const position = useMemo(
    () => calculateEditElementStyle(dimensions, heatmapRef),
    [dimensions, heatmapRef],
  );

  const reorderItem = (id, newIndex, pageStart, order) => {
    const pageIndex = parseInt(id.replace('reorder-', ''), 10);
    const arrayIndexToReorder = pageStart + parseInt(pageIndex, 10);
    const arrayDestination = pageStart + (newIndex - 1);
    const newOrder = reorderArrayItem(order, arrayIndexToReorder, arrayDestination);
    return newOrder;
  };

  const handleReorderColumn = (e, id, value) => {
    const newOrder = reorderItem(id, value, pagePosition.x, columnOrder);
    dispatch(setColumnOrder(newOrder));
  };

  const handleReorderRow = (e, id, value) => {
    const newOrder = reorderItem(id, value, pagePosition.y, rowOrder);
    dispatch(setRowOrder(newOrder));
  };

  const { cellSize } = settings;
  const fontSize = cellSize / 1.75;

  return (
    <>
      <Reorder
        cellSize={cellSize}
        fontSize={fontSize}
        handleReorder={handleReorderColumn}
        items={columns}
        position={position.column}
        type="column"
      />
      <Reorder
        cellSize={cellSize}
        fontSize={fontSize}
        handleReorder={handleReorderRow}
        items={rows}
        position={position.row}
        type="row"
      />
    </>
  );
};

ReorderContainer.propTypes = {
  heatmapRef: PropTypes.shape({}).isRequired,
};

const ShowComponent = ({
  heatmapRef,
}) => {
  const reorderImage = useSelector(state => selectDataProperty(state, 'display', 'reorderImage'));
  return (
    heatmapRef.current
    && reorderImage
      ? <ReorderContainer heatmapRef={heatmapRef} />
      : null
  );
};

ShowComponent.propTypes = {
  heatmapRef: PropTypes.shape({
    current: PropTypes.shape({}),
  }).isRequired,
};

export default ShowComponent;
