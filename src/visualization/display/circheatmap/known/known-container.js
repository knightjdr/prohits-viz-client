import PropTypes from 'prop-types';
import React, { useMemo } from 'react';

import Known from './known';

import definePath from './define-path';

const KnownContainer = ({
  radius,
  readouts,
}) => {
  const path = useMemo(
    () => definePath(readouts, radius),
    [radius, readouts],
  );

  return (
    <Known
      path={path}
      radius={radius}
    />
  );
};

KnownContainer.propTypes = {
  radius: PropTypes.number.isRequired,
  readouts: PropTypes.arrayOf(
    PropTypes.shape({}),
  ).isRequired,
};

export default KnownContainer;
