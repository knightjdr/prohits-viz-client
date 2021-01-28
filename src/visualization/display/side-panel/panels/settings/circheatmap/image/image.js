import PropTypes from 'prop-types';
import React from 'react';

import Input from '../../../../../../../components/input/text/input-text-container';
import Section from '../../../section/section';
import Select from '../../../../../../../components/select/select-container';
import Switch from '../../../../../../../components/input/switch/switch-container';
import CircleDND from './circle-dnd';

import './image.css';

const Image = ({
  circles,
  handleDragEnd,
  handleImageSetting,
  handlePlotChange,
  handleSettingChange,
  plotNames,
  selectedPlot,
  sortByKnown,
  thickness,
  toggleVisibility,
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
      <Switch
        checked={sortByKnown}
        id="sortByKnown"
        label="Sort by known"
        onChange={handleImageSetting}
      />
      <Input
        id="thickness"
        label="Circle thickness"
        onChange={handleImageSetting}
        min={1}
        step={1}
        type="number"
        value={thickness}
      />
      <CircleDND
        circles={circles}
        handleDragEnd={handleDragEnd}
        handleSettingChange={handleSettingChange}
        toggleVisibility={toggleVisibility}
      />
    </Section>
  </>
);

Image.propTypes = {
  circles: PropTypes.shape({
    order: PropTypes.arrayOf(
      PropTypes.shape({
        attribute: PropTypes.string,
        color: PropTypes.string,
      }),
    ),
  }).isRequired,
  handleDragEnd: PropTypes.func.isRequired,
  handleImageSetting: PropTypes.func.isRequired,
  handlePlotChange: PropTypes.func.isRequired,
  handleSettingChange: PropTypes.func.isRequired,
  plotNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedPlot: PropTypes.number.isRequired,
  sortByKnown: PropTypes.bool.isRequired,
  thickness: PropTypes.number.isRequired,
  toggleVisibility: PropTypes.func.isRequired,
};

export default Image;
