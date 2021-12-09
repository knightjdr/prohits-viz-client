import PropTypes from 'prop-types';
import React from 'react';

import Groups from './groups';
import Section from '../../section/section';

import './point-list.css';

const PointList = ({
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
  <Section
    helpLink="/help/visualization/scatterplot#selections-customization"
    title="Customized groups"
  >
    <div className="customization__list">
      {
        groups.length === 0
          ? (
            <p>
              Use the selection box above to choose points for customization.
            </p>
            )
          : (
            <Groups
              groups={groups}
              handleColorChange={handleColorChange}
              handleDeleteAll={handleDeleteAll}
              handleDeleteGroup={handleDeleteGroup}
              handleDeletePoint={handleDeletePoint}
              handleDragEnd={handleDragEnd}
              handleDragStart={handleDragStart}
              handleLabelChange={handleLabelChange}
              handleRadiusChange={handleRadiusChange}
              isDragging={isDragging}
            />
            )
      }
    </div>
  </Section>
);

PointList.propTypes = {
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

export default PointList;
