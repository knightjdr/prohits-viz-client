import PropTypes from 'prop-types';
import React from 'react';

import PVConvert from './utility/pvconvert/pvconvert-container';

const loadUtilityComponent = (utility) => {
  if (utility === 'pvconvert') {
    return <PVConvert />;
  }
  return null;
};

const LoadUtility = ({
  utility,
}) => (
  utility
  && (
    <div className="utility">
      {loadUtilityComponent(utility)}
    </div>
  )
);

LoadUtility.propTypes = {
  utility: PropTypes.string.isRequired,
};

export default LoadUtility;
