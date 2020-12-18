import PropTypes from 'prop-types';
import React from 'react';
import { faMinus, faPlus } from '@fortawesome/pro-solid-svg-icons';

import ButtonIcon from '../../../../../../../components/buttons/icon/button';
import Section from '../../../section/section';
import Switch from '../../../../../../../components/input/switch/switch-container';

import './display.css';

const Display = ({
  logTransform,
  handleChange,
  handleZoom,
}) => (
  <>
    <Section
      border={false}
      title="Display"
    >
      <Switch
        checked={logTransform}
        id="logTransform"
        label="Log"
        onChange={handleChange}
      />
      <div className="settings__display-zoom">
        <div className="label">Zoom:</div>
        <div className="scatterplot__controls-zoom-buttons">
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

Display.propTypes = {
  logTransform: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleZoom: PropTypes.func.isRequired,
};

export default Display;
