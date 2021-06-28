import PropTypes from 'prop-types';
import React from 'react';

import Divider from '../components/divider/divider';
import Select from '../components/select/select-container';

const UtilitySelect = ({
  handleUtilityType,
  utility,
}) => (
  <div className="utilities__select">
    <Divider>Utility</Divider>
    <Select
      id="utility_type"
      onChange={handleUtilityType}
      options={[
        { label: 'Process interactive file', optGroup: true },
        { label: 'Convert interactive file from ProHits version 1', value: 'pvconvert' },
      ]}
      placeholder="Select Utility..."
      value={utility}
    />
  </div>
);

UtilitySelect.propTypes = {
  handleUtilityType: PropTypes.func.isRequired,
  utility: PropTypes.string.isRequired,
};

export default UtilitySelect;
