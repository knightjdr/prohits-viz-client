import PropTypes from 'prop-types';
import React from 'react';

import PVConvert from './utility/pvconvert/pvconvert-container';
import SaintFEA from './utility/saint-fea/saint-fea-container';
import SaintStats from './utility/saint-stats/saint-stats-container';

const loadUtilityComponent = (utility, errors) => {
  if (utility === 'pvconvert') {
    return <PVConvert errors={errors} />;
  } if (utility === 'saintfea') {
    return <SaintFEA errors={errors} />;
  } if (utility === 'saintstats') {
    return <SaintStats errors={errors} />;
  }
  return null;
};

const LoadUtility = ({
  errors,
  utility,
}) => (
  utility
  && (
    <div className="utility">
      {loadUtilityComponent(utility, errors)}
    </div>
  )
);

LoadUtility.propTypes = {
  errors: PropTypes.shape({}).isRequired,
  utility: PropTypes.string.isRequired,
};

export default LoadUtility;
