import PropTypes from 'prop-types';
import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import Checkbox from '../../../../../../../components/input/checkbox/input-checkbox-container';
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
  toggleVisibility,
  visible,
}) => (
  <div className="settings__image-circle-draggable">
    <div className="settings__image-circle-draggable-heading">
      <h4>{circle.attribute}</h4>
      <Checkbox
        checked={!visible}
        id={`circle_visibility_${index}_${circle.attribute}`}
        label="hide"
        onChange={toggleVisibility}
      />
    </div>
    <div className="settings__image-circle-draggable-content">
      <Input
        id={`circle_filter_${index}_${circle.attribute}`}
        label="Filter"
        onChange={handleSettingChange}
        min={0}
        step="0.01"
        type="number"
        value={circle.filter}
        vertical
      />
      <Input
        id={`circle_min_${index}_${circle.attribute}`}
        label="Min"
        onChange={handleSettingChange}
        step="0.01"
        type="number"
        value={circle.min}
        vertical
      />
      <Input
        id={`circle_max_${index}_${circle.attribute}`}
        label="Max"
        onChange={handleSettingChange}
        step="0.01"
        type="number"
        value={circle.max}
        vertical
      />
      <Select
        id={`circle_color_${index}_${circle.attribute}`}
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
    attribute: PropTypes.string,
    color: PropTypes.string,
    filter: PropTypes.number,
    max: PropTypes.number,
    min: PropTypes.number,
  }).isRequired,
  handleSettingChange: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  toggleVisibility: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};

const CircleDraggable = ({
  circle,
  index,
  handleSettingChange,
  toggleVisibility,
  visible,
}) => (
  <Draggable draggableId={circle.attribute} index={index}>
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
          toggleVisibility={toggleVisibility}
          visible={visible}
        />
      </div>
    )}
  </Draggable>
);

CircleDraggable.propTypes = {
  circle: PropTypes.shape({
    attribute: PropTypes.string,
    color: PropTypes.string,
    filter: PropTypes.number,
    max: PropTypes.number,
    min: PropTypes.number,
  }).isRequired,
  handleSettingChange: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  toggleVisibility: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};

const CircleList = ({
  circles,
  handleSettingChange,
  toggleVisibility,
  visible,
}) => (
  circles.map((circle, index) => (
    <CircleDraggable
      circle={circle}
      handleSettingChange={handleSettingChange}
      index={index}
      key={circle.attribute}
      toggleVisibility={toggleVisibility}
      visible={visible}
    />
  ))
);

CircleList.propTypes = {
  circles: PropTypes.arrayOf(
    PropTypes.shape({
      attribute: PropTypes.string,
      color: PropTypes.string,
      filter: PropTypes.number,
      max: PropTypes.number,
      min: PropTypes.number,
    }),
  ).isRequired,
  handleSettingChange: PropTypes.func.isRequired,
  toggleVisibility: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};

const CircleDND = ({
  circles,
  handleDragEnd,
  handleSettingChange,
  toggleVisibility,
}) => (
  <div className="settings__image-circle">
    <h3>Circle settings</h3>
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable
        droppableId="circle-list-visible"
        renderClone={(provided, snapshot, rubric) => (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <CircleContent
              circle={circles.order[rubric.source.index]}
              handleSettingChange={handleSettingChange}
              index={rubric.source.index}
              toggleVisibility={toggleVisibility}
              visible
            />
          </div>
        )}
      >
        {(provided) => (
          <div ref={provided.innerRef}>
            <CircleList
              circles={circles.order}
              handleSettingChange={handleSettingChange}
              toggleVisibility={toggleVisibility}
              visible
            />
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      {
        circles.hidden.length > 0
        && (
          <div className="settings__image-circle-hidden">
            <h3>Hidden</h3>
            <Droppable
              droppableId="circle-list-hidden"
              renderClone={(provided, snapshot, rubric) => (
                <div
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  ref={provided.innerRef}
                >
                  <CircleContent
                    circle={circles.hidden[rubric.source.index]}
                    handleSettingChange={handleSettingChange}
                    index={rubric.source.index}
                    toggleVisibility={toggleVisibility}
                    visible
                  />
                </div>
              )}
            >
              {(provided) => (
                <div ref={provided.innerRef}>
                  <CircleList
                    circles={circles.hidden}
                    handleSettingChange={handleSettingChange}
                    toggleVisibility={toggleVisibility}
                    visible={false}
                  />
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        )
      }
    </DragDropContext>
  </div>
);

CircleDND.propTypes = {
  circles: PropTypes.shape({
    hidden: PropTypes.arrayOf(
      PropTypes.shape({
        attribute: PropTypes.string,
        color: PropTypes.string,
        filter: PropTypes.number,
        max: PropTypes.number,
        min: PropTypes.number,
      }),
    ),
    order: PropTypes.arrayOf(
      PropTypes.shape({
        attribute: PropTypes.string,
        color: PropTypes.string,
        filter: PropTypes.number,
        max: PropTypes.number,
        min: PropTypes.number,
      }),
    ),
  }).isRequired,
  handleDragEnd: PropTypes.func.isRequired,
  handleSettingChange: PropTypes.func.isRequired,
  toggleVisibility: PropTypes.func.isRequired,
};

export default CircleDND;
