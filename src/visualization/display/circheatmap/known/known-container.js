import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import Known from './known';

import definePath from './define-path';
import { selectDataProperty } from '../../../../state/selector/visualization/data-selector';

const KnownContainer = () => {
  const radius = useSelector((state) => selectDataProperty(state, 'dimensions', 'radius'));
  const readouts = useSelector((state) => selectDataProperty(state, 'readouts', 'current'));
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

export default KnownContainer;
