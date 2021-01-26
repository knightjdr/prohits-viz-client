import PropTypes from 'prop-types';
import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import Input from '../../../../../../../components/input/text/input-text-container';
import Select from '../../../../../../../components/select/select-container';

const colorOptions = [
  { label: 'mono', optGroup: true },
  { label: 'blue', value: 'blue' },
  { label: 'green', value: 'green' },
  { label: 'greyscale', value: 'greyscale' },
  { label: 'red', value: 'red' },
  { label: 'yellow', value: 'yellow' },
  { label: 'dual', optGroup: true },
  { label: 'blue-yellow', value: 'blueYellow' },
  { label: 'blue-red', value: 'blueRed' },
];

const CircleContent = ({
  circle,
  handleSettingChange,
  index,
}) => (
  <div className="settings__image-circle-draggable">
    <h4>{circle.name}</h4>
    <div className="settings__image-circle-draggable-content">
      <Input
        id={`circle_min_${index}_${circle.name}`}
        label="Min."
        onChange={handleSettingChange}
        step="0.01"
        type="number"
        value={circle.min}
        vertical
      />
      <Input
        id={`circle_max_${index}_${circle.name}`}
        label="Max."
        onChange={handleSettingChange}
        step="0.01"
        type="number"
        value={circle.max}
        vertical
      />
      <Select
        id={`circle_color_${index}_${circle.name}`}
        label="Color"
        onChange={handleSettingChange}
        options={colorOptions}
        value={circle.color}
      />
    </div>
  </div>
);

CircleContent.propTypes = {
  circle: PropTypes.shape({
    color: PropTypes.string,
    max: PropTypes.number,
    min: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
  handleSettingChange: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

const CircleDraggable = ({
  circle,
  index,
  handleSettingChange,
}) => (
  <Draggable draggableId={circle.name} index={index}>
    {(provided) => (
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
        <CircleContent
          circle={circle}
          handleSettingChange={handleSettingChange}
          index={index}
        />
      </div>
    )}
  </Draggable>
);

CircleDraggable.propTypes = {
  circle: PropTypes.shape({
    color: PropTypes.string,
    max: PropTypes.number,
    min: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
  handleSettingChange: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

const CircleList = ({
  circles,
  handleSettingChange,
}) => (
  circles.map((circle, index) => (
    <CircleDraggable
      circle={circle}
      handleSettingChange={handleSettingChange}
      index={index}
      key={circle.name}
    />
  ))
);

CircleList.propTypes = {
  circles: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string,
      max: PropTypes.number,
      min: PropTypes.number,
      name: PropTypes.string,
    }),
  ).isRequired,
  handleSettingChange: PropTypes.func.isRequired,
};

const CircleDND = ({
  circles,
  handleDragEnd,
  handleSettingChange,
}) => (
  <div className="settings__image-circle">
    <h3>Circle settings</h3>
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable
        droppableId="image-circle-list"
        renderClone={(provided, snapshot, rubric) => (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <CircleContent
              circle={circles[rubric.source.index]}
              handleSettingChange={handleSettingChange}
              index={rubric.source.index}
            />
          </div>
        )}
      >
        {(provided) => (
          <div ref={provided.innerRef}>
            <CircleList
              circles={circles}
              handleSettingChange={handleSettingChange}
            />
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  </div>
);

CircleDND.propTypes = {
  circles: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string,
      max: PropTypes.number,
      min: PropTypes.number,
      name: PropTypes.string,
    }),
  ).isRequired,
  handleDragEnd: PropTypes.func.isRequired,
  handleSettingChange: PropTypes.func.isRequired,
};

export default CircleDND;
