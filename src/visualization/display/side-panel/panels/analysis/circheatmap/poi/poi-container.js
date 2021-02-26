import React, {
  useMemo,
  useRef,
  useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Poi from './poi';

import defineNewPOI from '../../poi/define-new-poi';
import definePoiOptions from '../../poi/define-poi-options';
import getHighlightedAttribute from '../../poi/get-highlighted-attribute';
import reorderPOI from '../../poi/reorder-poi';
import { selectData } from '../../../../../../../state/selector/visualization/data-selector';
import { selectCircHeatmapLabels } from '../../../../../../../state/selector/visualization/circheatmap-selector';
import { updatePOI } from '../../../../../../../state/visualization/analysis/poi-actions';

const PoiContainer = () => {
  const dispatch = useDispatch();

  const [contextMenuState, setContextMenuState] = useState({ isOpen: false });

  const refs = {
    readouts: {
      poi: useRef(),
      unselected: useRef(),
    },
  };

  const { labels, order: labelOrder } = useSelector((state) => selectCircHeatmapLabels(state));
  const poi = useSelector((state) => selectData(state, 'poi'));

  const readoutOptions = useMemo(
    () => definePoiOptions(labels, labelOrder, poi.readouts),
    [labels, labelOrder, poi.readouts],
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
      highlighted: getHighlightedAttribute(refs.readouts[selectionType].current, 'text'),
      items: readoutOptions,
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

  return (
    <Poi
      closeContextMenu={closeContextMenu}
      contextMenuState={contextMenuState}
      handleContextMenu={handleContextMenu}
      handleReorder={handleReorder}
      handleSwap={handleSwap}
      ref={refs}
      readouts={readoutOptions}
    />
  );
};

export default PoiContainer;
