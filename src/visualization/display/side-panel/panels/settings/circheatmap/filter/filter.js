import PropTypes from 'prop-types';
import React from 'react';

import Input from '../../../../../../../components/input/text/input-text-container';
import Section from '../../../section/section';

const Filter = ({
  handleSettingChange,
  maxReadouts,
  readoutName,
}) => (
  <Section title="Filters">
    <Input
      id="maxReadouts"
      label={`Max. no. ${readoutName}(s)`}
      onChange={handleSettingChange}
      min={1}
      step={1}
      type="number"
      value={maxReadouts}
    />
  </Section>
);

Filter.defaultProps = {
  readoutName: 'readout',
};

Filter.propTypes = {
  handleSettingChange: PropTypes.func.isRequired,
  maxReadouts: PropTypes.number.isRequired,
  readoutName: PropTypes.string,
};

export default Filter;
