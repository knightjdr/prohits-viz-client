import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import Known from './known';

import definePath from './define-path';
import { selectDataProperty } from '../../../../state/selector/visualization/data-selector';

const KnownContainer = ({
  radius,
  readouts,
}) => {
  const { sortByKnown } = useSelector((state) => selectDataProperty(state, 'settings', 'current'));

  const path = useMemo(
    () => definePath(readouts, radius),
    [radius, readouts],
  );

  return (
    <Known
      path={path}
      radius={radius}
      sortByKnown={sortByKnown}
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
