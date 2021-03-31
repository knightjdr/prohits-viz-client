import { faTrash } from '@fortawesome/pro-duotone-svg-icons';
import PropTypes from 'prop-types';
import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import Group from './group';
import Button from '../../../../../../components/buttons/icon/button';

const Groups = ({
  groups,
  handleColorChange,
  handleDeleteAll,
  handleDeleteGroup,
  handleDeletePoint,
  handleDragEnd,
  handleDragStart,
  handleLabelChange,
  handleRadiusChange,
  isDragging,
}) => (
  <div>
    <DragDropContext
      onDragEnd={handleDragEnd}
      onDragStart={handleDragStart}
    >
      {
        groups.map((group, index) => (
          <Group
            groupIndex={index}
            handleColorChange={handleColorChange}
            handleDeleteGroup={handleDeleteGroup}
            handleDeletePoint={handleDeletePoint}
            handleLabelChange={handleLabelChange}
            handleRadiusChange={handleRadiusChange}
            isDragging={isDragging}
            key={group.label}
            {...group}
          />
        ))
      }
    </DragDropContext>
    <div className="customization__group-actions">
      <div>
        Delete all groups:
      </div>
      <Button
        aria-label="Delete all groups"
        icon={faTrash}
        kind="warning"
        onClick={handleDeleteAll}
      />
    </div>
  </div>
);

Groups.propTypes = {
  groups: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string,
      label: PropTypes.string,
      points: PropTypes.arrayOf(PropTypes.string),
      radius: PropTypes.number,
    }),
  ).isRequired,
  handleColorChange: PropTypes.func.isRequired,
  handleDeleteAll: PropTypes.func.isRequired,
  handleDeleteGroup: PropTypes.func.isRequired,
  handleDeletePoint: PropTypes.func.isRequired,
  handleDragEnd: PropTypes.func.isRequired,
  handleDragStart: PropTypes.func.isRequired,
  handleLabelChange: PropTypes.func.isRequired,
  handleRadiusChange: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
};

export default Groups;
