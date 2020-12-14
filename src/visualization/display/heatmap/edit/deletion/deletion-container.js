import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Deletion from './deletion';

import calculateEditElementStyle from '../calculate-edit-element-style';
import { deleteColumn } from '../../../../../state/visualization/heatmap/columns-actions';
import { deleteRow } from '../../../../../state/visualization/heatmap/rows-actions';
import { selectData, selectDataProperty } from '../../../../../state/selector/visualization/data-selector';
import { selectVisibleColumnNames } from '../../../../../state/selector/visualization/column-selector';
import { selectVisibleRowNames } from '../../../../../state/selector/visualization/row-selector';

const DeletionContainer = ({
  heatmapRef,
}) => {
  const dispatch = useDispatch();

  const columnOrder = useSelector((state) => selectDataProperty(state, 'columns', 'order'));
  const columns = useSelector((state) => selectVisibleColumnNames(state));
  const dimensions = useSelector((state) => selectData(state, 'dimensions'));
  const pagePosition = useSelector((state) => selectData(state, 'position'));
  const rowOrder = useSelector((state) => selectDataProperty(state, 'rows', 'order'));
  const rows = useSelector((state) => selectVisibleRowNames(state));
  const settings = useSelector((state) => selectDataProperty(state, 'settings', 'current'));

  const position = useMemo(
    () => calculateEditElementStyle(dimensions, heatmapRef),
    [dimensions, heatmapRef],
  );

  const deleteItem = (pageIndex, pageStart, order) => {
    const arrayIndexToDelete = pageStart + parseInt(pageIndex, 10);
    const arrayValue = order[arrayIndexToDelete];
    const newOrder = [...order];
    newOrder.splice(arrayIndexToDelete, 1);
    return {
      order: newOrder,
      value: arrayValue,
    };
  };

  const handleDeleteColumn = (e) => {
    const { index } = e.currentTarget.dataset;
    const deletionStatus = deleteItem(index, pagePosition.x, columnOrder);
    dispatch(deleteColumn(deletionStatus.value, deletionStatus.order));
  };

  const handleDeleteRow = (e) => {
    const { index } = e.currentTarget.dataset;
    const deletionStatus = deleteItem(index, pagePosition.y, rowOrder);
    dispatch(deleteRow(deletionStatus.value, deletionStatus.order));
  };

  const { cellSize } = settings;
  const fontSize = cellSize / 2;

  return (
    <>
      <Deletion
        cellSize={cellSize}
        fontSize={fontSize}
        handleDelete={handleDeleteColumn}
        items={columns}
        position={position.column}
        type="column"
      />
      <Deletion
        cellSize={cellSize}
        fontSize={fontSize}
        handleDelete={handleDeleteRow}
        items={rows}
        position={position.row}
        type="row"
      />
    </>
  );
};

DeletionContainer.propTypes = {
  heatmapRef: PropTypes.shape({}).isRequired,
};

const ShowComponent = ({
  heatmapRef,
}) => {
  const deleteFromImage = useSelector((state) => selectDataProperty(state, 'display', 'deleteFromImage'));
  return (
    heatmapRef.current
    && deleteFromImage
      ? <DeletionContainer heatmapRef={heatmapRef} />
      : null
  );
};

ShowComponent.propTypes = {
  heatmapRef: PropTypes.shape({
    current: PropTypes.shape({}),
  }).isRequired,
};

export default ShowComponent;
