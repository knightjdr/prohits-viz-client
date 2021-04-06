import PropTypes from 'prop-types';
import React from 'react';
import { faMinus, faPlus } from '@fortawesome/pro-solid-svg-icons';

import ButtonIcon from '../../../../../../../components/buttons/icon/button';
import Input from '../../../../../../../components/input/text/input-text-container';
import Section from '../../../section/section';
import Select from '../../../../../../../components/select/select-container';
import Switch from '../../../../../../../components/input/switch/switch-container';

import './image.css';

const Image = ({
  equalScaleAxes,
  fontSize,
  handleSettingChange,
  handleZoom,
  logBase,
  logX,
  logY,
}) => (
  <>
    <Section
      border={false}
      helpLink="/help/visualization/scatterplot#settings-image"
      title="Image"
    >
      <Select
        id="logBase"
        label="Log transform"
        onChange={handleSettingChange}
        options={['none', '2', '10']}
        value={logBase}
      />
      <Switch
        checked={logX}
        id="logX"
        label="Log transform x-axis"
        onChange={handleSettingChange}
      />
      <Switch
        checked={logY}
        id="logY"
        label="Log transform y-axis"
        onChange={handleSettingChange}
      />
      <Switch
        checked={equalScaleAxes}
        id="equalScaleAxes"
        label="Equal limit axes"
        onChange={handleSettingChange}
      />
      <Input
        id="fontSize"
        label="Font size (px)"
        onChange={handleSettingChange}
        min="0"
        step="1"
        type="number"
        value={fontSize}
      />
      <div className="settings__image-zoom">
        <div className="label">Zoom:</div>
        <div className="settings__image-zoom-buttons">
          <ButtonIcon
            ariaLabel="Zoom in"
            data-delta={-1}
            icon={faPlus}
            kind="primary"
            onClick={handleZoom}
          />
          <ButtonIcon
            ariaLabel="Zoom out"
            data-delta={1}
            icon={faMinus}
            kind="primary"
            onClick={handleZoom}
          />
        </div>
      </div>
    </Section>
  </>
);

Image.propTypes = {
  equalScaleAxes: PropTypes.bool.isRequired,
  fontSize: PropTypes.number.isRequired,
  handleSettingChange: PropTypes.func.isRequired,
  handleZoom: PropTypes.func.isRequired,
  logBase: PropTypes.string.isRequired,
  logX: PropTypes.bool.isRequired,
  logY: PropTypes.bool.isRequired,
};

export default Image;
