import PropTypes from 'prop-types';
import React from 'react';

import Input from '../../../components/input/text/input-text-container';
import Link from '../../../components/link/text/link';

const SaintFEA = ({
  errors,
  fdr,
  handleUtilityField,
  topPreys,
}) => (
  <>
    <p className="utility__description">
      Perform functional enrichment analysis for every bait in a SAINT .txt file using
      {' '}
      <Link to="https://biit.cs.ut.ee/gprofiler/gost">
        g:Profiler
      </Link>
      . Only significant preys are used for
      the enrichment analysis and you can limit the number of preys to use for each bait
      via the &ldquo;Top preys&rdquo; input (set to 0 to use all significant preys).
    </p>
    <div className="utility__inputs">
      <Input
        label="FDR for significant preys"
        id="fdr"
        max={1}
        min={0}
        onChange={handleUtilityField}
        step={0.01}
        type="number"
        value={fdr}
        vertical
        warning={errors.fdr}
      />
      <Input
        label="Top preys"
        id="topPreys"
        min={0}
        onChange={handleUtilityField}
        step={1}
        type="number"
        value={topPreys}
        vertical
        warning={errors.topPreys}
      />
    </div>
  </>
);

SaintFEA.defaultProps = {
  errors: {},
  fdr: 0,
  topPreys: 0,
};

SaintFEA.propTypes = {
  errors: PropTypes.shape({
    fdr: PropTypes.string,
    topPreys: PropTypes.string,
  }),
  fdr: PropTypes.number,
  handleUtilityField: PropTypes.func.isRequired,
  topPreys: PropTypes.number,
};

export default SaintFEA;
