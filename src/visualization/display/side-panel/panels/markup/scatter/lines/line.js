import PropTypes from 'prop-types';
import React from 'react';

import Input from '../../../../../../../components/input/text/input-text-container';
import InputTextArea from '../../../../../../../components/input/text-area/input-text-area-container';
import Section from '../../../section/section';
import Switch from '../../../../../../../components/input/switch/switch-container';

import './line.css';

const Line = ({
  dashLength,
  fclines,
  handleSetFcLines,
  handleSettingChange,
  isDashed,
  showFcLines,
  showMidline,
}) => (
  <Section title="Labels">
    <div className="panel-markup__grid">
      <Switch
        checked={showMidline}
        id="showMidline"
        label="Show midline"
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
        label="Dash width"
        min={1}
        onChange={handleSettingChange}
        step={1}
        type="number"
        value={dashLength}
      />
      <div className="panel-markup__lines-fc">
        <InputTextArea
          id="fclines"
          label="Fold change lines"
          onChange={handleSetFcLines}
          placeholder="-10, -2, 2, 10"
          value={fclines.join(', ')}
        />
        <p>
          Enter a comma-, space- or newline-separated list of numbers indicating
          the fold-change lines you would like drawn. This should generally only be
          done with log-transformed axes.
        </p>
      </div>
    </div>
  </Section>
);

Line.propTypes = {
  dashLength: PropTypes.number.isRequired,
  fclines: PropTypes.arrayOf(PropTypes.number).isRequired,
  handleSetFcLines: PropTypes.func.isRequired,
  handleSettingChange: PropTypes.func.isRequired,
  isDashed: PropTypes.bool.isRequired,
  showFcLines: PropTypes.bool.isRequired,
  showMidline: PropTypes.bool.isRequired,
};

export default Line;
