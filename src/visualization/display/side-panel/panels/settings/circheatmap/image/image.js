import PropTypes from 'prop-types';
import React from 'react';

import Section from '../../../section/section';
import Select from '../../../../../../../components/select/select-container';
import CircleDND from './circle-dnd';

import './image.css';

const Image = ({
  circles,
  handleDragEnd,
  handlePlotChange,
  handleSettingChange,
  plotNames,
  selectedPlot,
}) => (
  <>
    <Section
      border={false}
      title="Image"
    >
      {
        plotNames.length > 1
        && (
          <Select
            id="selectedPlot"
            label="Plot"
            onChange={handlePlotChange}
            options={plotNames}
            value={plotNames[selectedPlot]}
          />
        )
      }
      <CircleDND
        circles={circles.order}
        handleDragEnd={handleDragEnd}
        handleSettingChange={handleSettingChange}
      />
    </Section>
  </>
);

Image.propTypes = {
  circles: PropTypes.shape({
    order: PropTypes.arrayOf(
      PropTypes.shape({
        color: PropTypes.string,
        name: PropTypes.string,
      }),
    ),
  }).isRequired,
  handleDragEnd: PropTypes.func.isRequired,
  handlePlotChange: PropTypes.func.isRequired,
  handleSettingChange: PropTypes.func.isRequired,
  plotNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedPlot: PropTypes.number.isRequired,
};

export default Image;
