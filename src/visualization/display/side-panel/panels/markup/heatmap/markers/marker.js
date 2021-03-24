import PropTypes from 'prop-types';
import React from 'react';
import { faTrash } from '@fortawesome/pro-duotone-svg-icons';

import ColorPicker from '../../../../../../../components/color-picker/color-picker-container';
import IconButton from '../../../../../../../components/buttons/icon/button';
import Section from '../../../section/section';
import Switch from '../../../../../../../components/input/switch/switch-container';

const Marker = ({
  color,
  handleClearAll,
  handleColorChange,
  handleSettingChange,
  handleToggleMarkers,
  record,
  show,
}) => (
  <Section
    helpLink="/help/visualization/heatmap#markup-markers"
    title="Markers"
  >
    <div className="panel-markup__grid">
      <Switch
        checked={show}
        id="showMarkers"
        label="Show"
        onChange={handleToggleMarkers}
      />
      <Switch
        checked={record}
        id="record"
        label="Record selections"
        onChange={handleSettingChange}
      />
      <span className="panel-markup__label">
        Color:
      </span>
      <ColorPicker
        color={color}
        onChange={handleColorChange}
        placement={['right', 'center']}
      />
      <span className="panel-markup__label">
        Clear all:
      </span>
      <IconButton
        icon={faTrash}
        kind="warning"
        onClick={handleClearAll}
        type="button"
      />
    </div>
  </Section>
);

Marker.propTypes = {
  color: PropTypes.string.isRequired,
  handleClearAll: PropTypes.func.isRequired,
  handleColorChange: PropTypes.func.isRequired,
  handleSettingChange: PropTypes.func.isRequired,
  handleToggleMarkers: PropTypes.func.isRequired,
  record: PropTypes.bool.isRequired,
  show: PropTypes.bool.isRequired,
};

export default Marker;
