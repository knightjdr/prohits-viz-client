import PropTypes from 'prop-types';
import React from 'react';

import Select from '../../../components/select/select-container';
import Switch from '../../../components/input/switch/switch-container';

export const defaultFieldValues = {
  controlSubtract: false,
  metric: 'fe',
};

const SaintSpecificityNetwork = ({
  controlSubtract,
  errors,
  handleUtilityField,
  metric,
}) => (
  <>
    <p className="utility__description">
      Calculate the specificity for every prey in a SAINT file relative to the bait
      it was detected with. This utility will return the SAINT file with an additional
      column containing the specificity score.
    </p>
    <div className="utility__inputs">
      <Select
        id="metric"
        label="Metric"
        onChange={handleUtilityField}
        options={[
          { label: 'fold enrichment', value: 'fe' },
          { label: 'Z-score', value: 'zscore' },
          { label: 'S-score', value: 'sscore' },
          { label: 'D-score', value: 'dscore' },
          { label: 'WD-score', value: 'wdscore' },
        ]}
        placeholder="Select specificity metric..."
        value={metric}
        warning={errors.metric}
      />
      <Switch
        id="controlSubtract"
        label="Perform control subtraction"
        onChange={handleUtilityField}
        checked={controlSubtract}
        warning={errors.controlSubtract}
      />
    </div>
  </>
);

SaintSpecificityNetwork.defaultProps = {
  errors: {},
  ...defaultFieldValues,
};

SaintSpecificityNetwork.propTypes = {
  controlSubtract: PropTypes.bool,
  errors: PropTypes.shape({
    controlSubtract: PropTypes.string,
    metric: PropTypes.string,
  }),
  metric: PropTypes.string.isRequired,
  handleUtilityField: PropTypes.func.isRequired,
};

export default SaintSpecificityNetwork;
