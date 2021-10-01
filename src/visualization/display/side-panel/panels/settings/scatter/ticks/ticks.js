import PropTypes from 'prop-types';
import React from 'react';

import Input from '../../../../../../../components/input/text/input-text-container';
import Section from '../../../section/section';

const Ticks = ({
  handleTickChange,
  xTicks,
  yTicks,
}) => (
  <Section
    helpLink="/help/visualization/scatterplot#settings-ticks"
    title="Ticks"
  >
    <Input
      id="xTicks"
      label="x"
      onChange={handleTickChange}
      placeholder="0, 5, 10..."
      type="text"
      value={xTicks.join(', ')}
    />
    <Input
      id="yTicks"
      label="y"
      onChange={handleTickChange}
      placeholder="0, 5, 10..."
      type="text"
      value={yTicks.join(', ')}
    />
  </Section>
);

Ticks.propTypes = {
  handleTickChange: PropTypes.func.isRequired,
  xTicks: PropTypes.arrayOf(
    PropTypes.number,
  ).isRequired,
  yTicks: PropTypes.arrayOf(
    PropTypes.number,
  ).isRequired,
};

export default Ticks;
