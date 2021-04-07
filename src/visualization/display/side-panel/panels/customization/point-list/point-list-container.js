import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PointList from './point-list';

import sort from '../../../../../../utils/sort';
import {
  deleteAllGroups,
  deleteGroup,
  deletePoint,
  updateGroups,
  updateGroupSetting,
} from '../../../../../../state/visualization/scatter/customization-actions';
import { selectDataProperty } from '../../../../../../state/selector/visualization/data-selector';

const PointListContainer = () => {
  const dispatch = useDispatch();
  const [isDragging, setDraggingStatus] = useState(false);
  const groups = useSelector((state) => selectDataProperty(state, 'customization', 'groups'));

  const groupsWithPointsSorted = useMemo(
    () => groups.map((group) => ({
      ...group,
      points: [...group.points].sort(sort.character),
    })),
    [groups],
  );

  const handleColorChange = (hex, id) => {
    const groupIndex = Number(id.split('-')[0]);
    dispatch(updateGroupSetting(groupIndex, 'color', hex));
  };

  const handleDeleteAll = () => {
    dispatch(deleteAllGroups());
  };

  const handleDeleteGroup = (e) => {
    const { groupIndex } = e.currentTarget.dataset;
    dispatch(deleteGroup(Number(groupIndex)));
  };

  const handleDeletePoint = (e) => {
    const { groupIndex, label } = e.currentTarget.dataset;
    dispatch(deletePoint(Number(groupIndex), label));
  };

  const handleDragEnd = (result) => {
    setDraggingStatus(false);
    if (result.destination && result.source) {
      const destID = Number(result.destination.droppableId.split('-')[0]);
      const sourceID = Number(result.source.droppableId.split('-')[0]);
      if (destID !== sourceID) {
        const label = result.draggableId;
        const updatedGroups = groups.map((group, index) => {
          if (index === destID) {
            return {
              ...group,
              points: [...group.points, label],
            };
          } if (index === sourceID) {
            return {
              ...group,
              points: group.points.filter((point) => point !== label),
            };
          }
          return group;
        });
        dispatch(updateGroups(updatedGroups));
      }
    }
  };

  const handleDragStart = () => {
    setDraggingStatus(true);
  };

  const handleLabelChange = (e, id, value) => {
    const { groupIndex } = e.target.dataset;
    dispatch(updateGroupSetting(Number(groupIndex), 'label', value));
  };

  const handleRadiusChange = (e, id, value) => {
    const { groupIndex } = e.target.dataset;
    dispatch(updateGroupSetting(Number(groupIndex), 'radius', Number(value)));
  };

  return (
    <PointList
      handleColorChange={handleColorChange}
      handleDeleteAll={handleDeleteAll}
      handleDeleteGroup={handleDeleteGroup}
      handleDeletePoint={handleDeletePoint}
      handleDragEnd={handleDragEnd}
      handleDragStart={handleDragStart}
      handleLabelChange={handleLabelChange}
      handleRadiusChange={handleRadiusChange}
      isDragging={isDragging}
      groups={groupsWithPointsSorted}
    />
  );
};

export default PointListContainer;
