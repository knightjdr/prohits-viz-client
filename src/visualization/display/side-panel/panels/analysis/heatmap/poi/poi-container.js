import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Poi from './poi';

import defineNewPOI from './define-new-poi';
import definePoiOptions from './define-poi-options';
import getHighlightedAttribute from './get-highlighted-attribute';
import findOptionToFocus from './find-option-to-focus';
import reorderPOI from './reorder-poi';
import { selectColumnNames } from '../../../../../../../state/selector/visualization/column-selector';
import { selectData, selectDataProperty } from '../../../../../../../state/selector/visualization/data-selector';
import { selectRowNames } from '../../../../../../../state/selector/visualization/row-selector';
import { updatePOI } from '../../../../../../../state/visualization/analysis/poi-actions';

const PoiContainer = () => {
  const dispatch = useDispatch();

  const [contextMenuState, setContextMenuState] = useState({ isOpen: false });

  const refs = {
    columns: {
      poi: useRef(),
      unselected: useRef(),
    },
    rows: {
      poi: useRef(),
      unselected: useRef(),
    },
  };

  const columnNames = useSelector((state) => selectColumnNames(state));
  const columnOrder = useSelector((state) => selectDataProperty(state, 'columns', 'order'));
  const poi = useSelector((state) => selectData(state, 'poi'));
  const position = useSelector((state) => selectData(state, 'position'));
  const rowNames = useSelector((state) => selectRowNames(state));
  const rowOrder = useSelector((state) => selectDataProperty(state, 'rows', 'order'));

  const columnOptions = useMemo(
    () => definePoiOptions(columnNames, columnOrder, poi.columns),
    [columnNames, columnOrder, poi.columns],
  );

  const rowOptions = useMemo(
    () => definePoiOptions(rowNames, rowOrder, poi.rows),
    [rowNames, rowOrder, poi.rows],
  );

  const closeContextMenu = () => {
    setContextMenuState({
      ...contextMenuState,
      isOpen: false,
    });
  };

  const handleContextMenu = (e) => {
    e.preventDefault();
    const { contextType, selectionType } = e.currentTarget.dataset;
    setContextMenuState({
      contextType,
      highlighted: getHighlightedAttribute(refs[contextType][selectionType].current, 'text'),
      items: contextType === 'columns' ? columnOptions : rowOptions,
      isOpen: true,
      selectionType,
      x: e.clientX,
      y: e.clientY,
    });
  };

  const handleReorder = (e) => {
    const { reorderDirection, reorderType } = e.currentTarget.dataset;
    const highlighted = getHighlightedAttribute(refs[reorderType].poi.current);
    const updatedPOI = {
      [reorderType]: reorderPOI(reorderDirection, poi[reorderType], highlighted),
    };
    dispatch(updatePOI(updatedPOI));
  };

  const handleSwap = (e) => {
    const { swapSource, swapType } = e.currentTarget.dataset;
    const highlighted = getHighlightedAttribute(refs[swapType][swapSource].current);
    const updatedPOI = {
      [swapType]: defineNewPOI(swapSource, poi[swapType], highlighted),
    };
    dispatch(updatePOI(updatedPOI));
  };

  const scrollToPageTopOption = (order, unselectedOrder, pageIndex, ref) => {
    const optionIndex = findOptionToFocus(order, unselectedOrder, pageIndex);
    if (optionIndex >= 0) {
      const selectTop = ref.current.offsetTop;
      const optionTop = [...ref.current.options][optionIndex].offsetTop;
      ref.current.scrollTo(0, optionTop - selectTop);
    }
  };

  useEffect(() => {
    scrollToPageTopOption(columnOrder, columnOptions.unselectedOrder, position.x, refs.columns.unselected);
    scrollToPageTopOption(rowOrder, rowOptions.unselectedOrder, position.y, refs.rows.unselected);
  }, [columnOptions, columnOrder, position, refs, rowOptions, rowOrder]);

  return (
    <Poi
      closeContextMenu={closeContextMenu}
      columns={columnOptions}
      contextMenuState={contextMenuState}
      handleContextMenu={handleContextMenu}
      handleReorder={handleReorder}
      handleSwap={handleSwap}
      ref={refs}
      rows={rowOptions}
    />
  );
};

export default PoiContainer;
