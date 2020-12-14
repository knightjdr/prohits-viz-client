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

const MIN_FOCUS_HEIGHT = 20;

const ReorderContainer = ({
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

  const { cellSize } = settings;
  const defaultFontSize = cellSize / 1.75;

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

  const parsePixelHeight = (element) => {
    const { height } = element.style;
    return parseInt(height.replace('px', ''), 10);
  };

  const setInputStyle = (element, styleSettings) => {
    const { fontSize: newFontSize, size, zIndex } = styleSettings;
    const styles = `font-size: ${newFontSize}px; height: ${size}px; width: ${size}px; z-index: ${zIndex}`;
    element.setAttribute('style', styles);
  };

  const handleBlur = (e) => {
    const { target } = e;
    const height = parsePixelHeight(target);
    if (height >= MIN_FOCUS_HEIGHT) {
      const styleSettings = {
        fontSize: defaultFontSize,
        size: cellSize,
        zIndex: 1,
      };
      setInputStyle(target, styleSettings);
    }
  };

  const handleFocus = (e) => {
    const { target } = e;
    const height = parsePixelHeight(target);
    if (height < MIN_FOCUS_HEIGHT) {
      const styleSettings = {
        fontSize: cellSize / 1.5,
        size: MIN_FOCUS_HEIGHT,
        zIndex: 2,
      };
      setInputStyle(target, styleSettings);
    }
  };

  const handleReorderColumn = (e, id, value) => {
    const newOrder = reorderItem(id, value, pagePosition.x, columnOrder);
    dispatch(setColumnOrder(newOrder));
  };

  const handleReorderRow = (e, id, value) => {
    const newOrder = reorderItem(id, value, pagePosition.y, rowOrder);
    dispatch(setRowOrder(newOrder));
  };

  return (
    <>
      <Reorder
        cellSize={cellSize}
        fontSize={defaultFontSize}
        handleBlur={handleBlur}
        handleFocus={handleFocus}
        handleReorder={handleReorderColumn}
        items={columns}
        position={position.column}
        type="column"
      />
      <Reorder
        cellSize={cellSize}
        fontSize={defaultFontSize}
        handleBlur={handleBlur}
        handleFocus={handleFocus}
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
  const reorderImage = useSelector((state) => selectDataProperty(state, 'display', 'reorderImage'));
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
