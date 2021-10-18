import React from 'react';
import { batch, useDispatch, useSelector } from 'react-redux';

import Image from './image';

import reorderArrayItem from '../../../../../../../utils/reorder-array-item';
import { filterAndSortReadouts } from '../../../../../../../state/visualization/circheatmap/readouts-actions';
import { selectData, selectDataProperty } from '../../../../../../../state/selector/visualization/data-selector';
import {
  updateCircleOrder,
  updateCircleSetting,
  updateCircleVisibility,
} from '../../../../../../../state/visualization/circheatmap/circle-actions';
import { updateSetting } from '../../../../../../../state/visualization/settings/settings-actions';

const ImageContainer = () => {
  const dispatch = useDispatch();

  const circles = useSelector((state) => selectData(state, 'circles'));
  const settings = useSelector((state) => selectDataProperty(state, 'settings', 'current'));

  const updateOrder = (destinationKey, sourceIndex, destIndex) => {
    const addItem = (dest, source) => [
      ...dest.slice(0, destIndex),
      source[sourceIndex],
      ...dest.slice(destIndex),
    ];
    const removeItem = (source) => source.filter((circle, i) => i !== sourceIndex);

    const updatedCircles = {
      hidden: destinationKey === 'hidden' ? addItem(circles.hidden, circles.order) : removeItem(circles.hidden),
      order: destinationKey === 'order' ? addItem(circles.order, circles.hidden) : removeItem(circles.order),
    };
    batch(() => {
      dispatch(updateCircleVisibility(updatedCircles));
      dispatch(filterAndSortReadouts({ circles: updatedCircles.order }));
    });
  };

  const handleDragEnd = (result) => {
    if (
      result.destination.droppableId === 'circle-list-visible'
      && result.source.droppableId === 'circle-list-hidden'
    ) {
      updateOrder('order', result.source.index, result.destination.index);
    } if (
      result.destination.droppableId === 'circle-list-hidden'
      && result.source.droppableId === 'circle-list-visible'
    ) {
      updateOrder('hidden', result.source.index, result.destination.index);
    } if (
      result.destination.droppableId === 'circle-list-visible'
      && result.source.droppableId === 'circle-list-visible'
      && result.destination.index !== result.source.index
    ) {
      const reordered = reorderArrayItem(circles.order, result.source.index, result.destination.index);
      batch(() => {
        dispatch(updateCircleOrder({ key: 'order', order: reordered }));
        dispatch(filterAndSortReadouts({ circles: reordered }));
      });
    } if (
      result.destination.droppableId === 'circle-list-hidden'
      && result.source.droppableId === 'circle-list-hidden'
      && result.destination.index !== result.source.index
    ) {
      const reordered = reorderArrayItem(circles.hidden, result.source.index, result.destination.index);
      dispatch(updateCircleOrder({ key: 'hidden', order: reordered }));
    }
  };

  const handleImageSetting = (e, id, value) => {
    dispatch(updateSetting(id, value));
  };

  const handleSettingChange = (e, id, value) => {
    const [, attribute, indexString] = id.split('_');
    const index = Number(indexString);
    if (attribute === 'filter') {
      const updatedCircles = circles.order.map((circle, circleIndex) => {
        if (circleIndex === index) {
          return {
            ...circle,
            filter: value,
          };
        }
        return circle;
      });
      batch(() => {
        dispatch(updateCircleSetting({
          attribute: 'filter',
          index,
          value,
        }));
        dispatch(filterAndSortReadouts({ circles: updatedCircles }));
      });
    } else {
      dispatch(updateCircleSetting({
        attribute,
        index,
        value,
      }));
    }
  };

  const handleSortByKnownChange = (e, id, value) => {
    batch(() => {
      dispatch(updateSetting('sortByKnown', value));
      dispatch(filterAndSortReadouts({ sortByKnown: value }));
    });
  };

  const toggleVisibility = (e, id, hide) => {
    const [, , index] = id.split('_');

    if (hide) {
      updateOrder('hidden', Number(index), circles.hidden.length);
    } else {
      updateOrder('order', Number(index), circles.order.length);
    }
  };

  return (
    <Image
      circles={circles}
      handleDragEnd={handleDragEnd}
      handleImageSetting={handleImageSetting}
      handleSettingChange={handleSettingChange}
      handleSortByKnownChange={handleSortByKnownChange}
      sortByKnown={settings.sortByKnown}
      thickness={settings.thickness}
      toggleVisibility={toggleVisibility}
    />
  );
};

export default ImageContainer;
