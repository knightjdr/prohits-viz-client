import PropTypes from 'prop-types';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/pro-duotone-svg-icons';

import Input from '../../../../../../../components/input/text/input-text-container';
import InputTextArea from '../../../../../../../components/input/text-area/input-text-area-container';
import Section from '../../../section/section';
import Switch from '../../../../../../../components/input/switch/switch-container';

import './line.css';

const Line = ({
  dashLength,
  fcLines,
  handleSetFcLines,
  handleSettingChange,
  isDashed,
  showFcLines,
  showMidline,
  showWarning,
}) => (
  <Section
    helpLink="/help/visualization/scatterplot#markup-lines"
    title="Lines"
  >
    {
      showWarning
      && (
        <p className="panel-markup__lines-warning">
          <FontAwesomeIcon icon={faExclamationTriangle} />
          Lines will not be displayed when only one axis is log-transformed.
        </p>
      )
    }
    <div className="panel-markup__grid">
      <Switch
        checked={showMidline}
        id="showMidline"
        label="Show x=y line"
        onChange={handleSettingChange}
      />
      <Switch
        checked={showFcLines}
        id="showFcLines"
        label="Show fold-change lines"
        onChange={handleSettingChange}
      />
      <Switch
        checked={isDashed}
        id="isDashed"
        label="Dashed lines"
        onChange={handleSettingChange}
      />
      <Input
        id="dashLength"
        label="Dash length"
        min={1}
        onChange={handleSettingChange}
        step={1}
        type="number"
        value={dashLength}
      />
      <div className="panel-markup__lines-fc">
        <InputTextArea
          id="fcLines"
          label="Fold change lines"
          onChange={handleSetFcLines}
          placeholder="-10, -2, 2, 10"
          value={fcLines.join(', ')}
        />
        <p>
          Enter a comma-, space- or newline-separated list of numbers indicating
          the fold-change lines you would like drawn. Positive fold refers to
          the x axis and negative fold to the y axis.
        </p>
      </div>
    </div>
  </Section>
);

Line.propTypes = {
  dashLength: PropTypes.number.isRequired,
  fcLines: PropTypes.arrayOf(PropTypes.number).isRequired,
  handleSetFcLines: PropTypes.func.isRequired,
  handleSettingChange: PropTypes.func.isRequired,
  isDashed: PropTypes.bool.isRequired,
  showFcLines: PropTypes.bool.isRequired,
  showMidline: PropTypes.bool.isRequired,
  showWarning: PropTypes.bool.isRequired,
};

export default Line;
