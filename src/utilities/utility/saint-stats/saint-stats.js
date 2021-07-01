import PropTypes from 'prop-types';
import React from 'react';

import Input from '../../../components/input/text/input-text-container';

const SaintStats = ({
  error,
  fdr,
  handleUtilityField,
}) => (
  <>
    <p className="utility__description">
      Generate interaction statistics from a SAINT .txt file, the number of preys,
      the number of unique preys, the number of interactions and the
      number of unique interactions. Specify the FDR for significant preys.
    </p>
    <Input
      label="FDR"
      id="fdr"
      max={1}
      min={0}
      onChange={handleUtilityField}
      step={0.01}
      type="number"
      value={fdr}
      warning={error}
    />
  </>
);

SaintStats.defaultProps = {
  error: '',
  fdr: 0,
};

SaintStats.propTypes = {
  error: PropTypes.string,
  fdr: PropTypes.number,
  handleUtilityField: PropTypes.func.isRequired,
};

export default SaintStats;
