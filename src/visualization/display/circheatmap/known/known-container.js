import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import Known from './known';

import definePath from './define-path';
import { selectDataProperty } from '../../../../state/selector/visualization/data-selector';

const KnownContainer = ({
  readouts,
}) => {
  const radius = useSelector((state) => selectDataProperty(state, 'dimensions', 'radius'));
  const { sortByKnown } = useSelector((state) => selectDataProperty(state, 'settings', 'current'));

  const path = useMemo(
    () => definePath(readouts, radius),
    [radius, readouts],
  );

  return (
    radius
      ? (
        <Known
          path={path}
          radius={radius}
          sortByKnown={sortByKnown}
        />
      )
      : null
  );
};

KnownContainer.propTypes = {
  readouts: PropTypes.arrayOf(
    PropTypes.shape({}),
  ).isRequired,
};

export default KnownContainer;
