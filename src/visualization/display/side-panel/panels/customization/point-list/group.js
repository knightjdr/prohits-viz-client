/* eslint-disable react/destructuring-assignment */
import PropTypes from 'prop-types';
import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/pro-solid-svg-icons';

import Button from '../../../../../../components/buttons/icon/button';
import ColorPicker from '../../../../../../components/color-picker/color-picker-container';
import Input from '../../../../../../components/input/text/input-text-container';

const ListItem = ({
  groupIndex,
  handleDeletePoint,
  point,
}) => (
  <div className="customization__group-list-item">
    {point}
    <button
      aria-label={`Delete customization for ${point}`}
      data-group-index={groupIndex}
      data-label={point}
      onClick={handleDeletePoint}
      type="button"
    >
      <FontAwesomeIcon icon={faTimes} />
    </button>
  </div>
);

ListItem.propTypes = {
  groupIndex: PropTypes.number.isRequired,
  handleDeletePoint: PropTypes.func.isRequired,
  point: PropTypes.string.isRequired,
};

const ListDraggable = ({
  groupIndex,
  handleDeletePoint,
  point,
  pointIndex,
}) => (
  <Draggable draggableId={point} index={pointIndex}>
    {(provided) => (
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
        <ListItem
          groupIndex={groupIndex}
          handleDeletePoint={handleDeletePoint}
          point={point}
        />
      </div>
    )}
  </Draggable>
);

ListDraggable.propTypes = {
  groupIndex: PropTypes.number.isRequired,
  handleDeletePoint: PropTypes.func.isRequired,
  point: PropTypes.string.isRequired,
  pointIndex: PropTypes.number.isRequired,
};

const List = ({
  groupIndex,
  handleDeletePoint,
  isDragging,
  points,
}) => (
  <div className="customization__group-list">
    {
      points.length > 0
        ? (
          points.map((point, index) => (
            <ListDraggable
              groupIndex={groupIndex}
              handleDeletePoint={handleDeletePoint}
              key={point}
              point={point}
              pointIndex={index}
            />
          ))
        )
        : <div className="customization__group-list_empty">Group currently empty</div>
    }
    {
      isDragging
      && <div className="customization__group-list-target">Target group</div>
    }
  </div>
);

List.propTypes = {
  groupIndex: PropTypes.number.isRequired,
  handleDeletePoint: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
  points: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const getRenderClone = (groupIndex, points, handleDeletePoint) => (provided, snapshot, rubric) => (
  <div
    {...provided.draggableProps}
    {...provided.dragHandleProps}
    ref={provided.innerRef}
  >
    <ListItem
      groupIndex={groupIndex}
      handleDeletePoint={handleDeletePoint}
      point={points[rubric.source.index]}
    />
  </div>
);

const Points = ({
  groupIndex,
  handleDeletePoint,
  isDragging,
  points,
}) => (
  <div className="customization__group-list-container">
    <Droppable
      droppableId={`${groupIndex}-group-droppable`}
      direction="horizontal"
      renderClone={getRenderClone(groupIndex, points, handleDeletePoint)}
    >
      {(provided) => (
        <div ref={provided.innerRef}>
          <List
            groupIndex={groupIndex}
            handleDeletePoint={handleDeletePoint}
            isDragging={isDragging}
            points={points}
          />
          {provided.placeholder && <div />}
          <div style={{ display: 'none' }}>{provided.placeholder}</div>
        </div>
      )}
    </Droppable>
  </div>
);

Points.propTypes = {
  groupIndex: PropTypes.number.isRequired,
  handleDeletePoint: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
  points: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const Group = ({
  color,
  groupIndex,
  handleColorChange,
  handleDeleteGroup,
  handleDeletePoint,
  handleLabelChange,
  handleRadiusChange,
  isDragging,
  label,
  points,
  radius,
}) => (
  <div className="customization__group">
    <h3>
      <Input
        data-group-index={groupIndex}
        id="group-customization-label"
        onChange={handleLabelChange}
        type="text"
        value={label}
      />
      <Button
        aria-label="Delete group"
        data-group-index={groupIndex}
        icon={faTimes}
        onClick={handleDeleteGroup}
      />
    </h3>
    <div className="customization__group-inputs">
      <div className="customization__group-color">
        <div className="customization__group-color-label">
          Colour:
        </div>
        <ColorPicker
          button={(
            <button
              aria-label={`${label} color`}
              className="customization__group-color-indicator"
              style={{ backgroundColor: color }}
              type="button"
            />
          )}
          color={color}
          id={`${groupIndex}-${label}`}
          modalID={`${label}-group-color-customization`}
          onChange={handleColorChange}
          placement={['left', 'center']}
        />
      </div>
      <Input
        data-group-index={groupIndex}
        id="group-customization-size"
        label="Size"
        min={1}
        onChange={handleRadiusChange}
        step={1}
        type="number"
        value={radius}
      />
    </div>
    <Points
      groupIndex={groupIndex}
      handleDeletePoint={handleDeletePoint}
      isDragging={isDragging}
      points={points}
    />
  </div>
);

Group.propTypes = {
  color: PropTypes.string.isRequired,
  groupIndex: PropTypes.number.isRequired,
  handleColorChange: PropTypes.func.isRequired,
  handleDeleteGroup: PropTypes.func.isRequired,
  handleDeletePoint: PropTypes.func.isRequired,
  handleLabelChange: PropTypes.func.isRequired,
  handleRadiusChange: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  points: PropTypes.arrayOf(PropTypes.string).isRequired,
  radius: PropTypes.number.isRequired,
};

export default Group;
