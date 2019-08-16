import PropTypes from 'prop-types';
import React from 'react';

import Error from './error';
import NeedSynching from './need-synching';
import Synching from './synching';

import './synching-status.css';

const SynchingStatus = ({
  isSyncing,
  needSyncing,
  syncError,
  syncMinimap,
}) => (
  <div className="minimap__synching">
    {isSyncing && <Synching />}
    {syncError && <Error syncMinimap={syncMinimap} />}
    {
      !isSyncing && !syncError && needSyncing
      && <NeedSynching syncMinimap={syncMinimap} />
    }
  </div>
);

SynchingStatus.propTypes = {
  isSyncing: PropTypes.bool.isRequired,
  needSyncing: PropTypes.bool.isRequired,
  syncError: PropTypes.bool.isRequired,
  syncMinimap: PropTypes.func.isRequired,
};

export default SynchingStatus;
