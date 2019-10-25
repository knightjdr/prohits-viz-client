import PropTypes from 'prop-types';
import React from 'react';

import Section from '../../section/section';
import Switch from '../../../../../../components/input/switch/switch-container';

const Tooltip = ({
  handleToggleTooltips,
  show,
}) => (
  <Section title="Tooltips">
    <div className="panel-markup__grid">
      <Switch
        checked={show}
        id="showTooltips"
        label="Enable"
        onChange={handleToggleTooltips}
      />
    </div>
  </Section>
);

Tooltip.propTypes = {
  handleToggleTooltips: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};

export default Tooltip;
