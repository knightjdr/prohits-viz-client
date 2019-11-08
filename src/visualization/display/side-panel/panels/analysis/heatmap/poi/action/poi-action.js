import PropTypes from 'prop-types';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faFilter } from '@fortawesome/pro-solid-svg-icons';

import Button from '../../../../../../../../components/buttons/rectangular/button';

import './poi-action.css';

const PoiAction = ({
  filteringComponent,
  handleApply,
  handleChangeSnapshotName,
  handleSnapshot,
  snapshotName,
}) => (
  <>
    {filteringComponent}
    <div className="poi__action">
      <Button
        onClick={handleApply}
        kind="secondary"
        type="button"
      >
        <FontAwesomeIcon icon={faFilter} />
        Filter
      </Button>
      <Button
        onClick={handleSnapshot}
        kind="secondary"
        type="button"
      >
        <FontAwesomeIcon icon={faCamera} />
        Snapshot
      </Button>
    </div>
  </>
);

PoiAction.defaultProps = {
  filteringComponent: null,
};

PoiAction.propTypes = {
  filteringComponent: PropTypes.node,
  handleApply: PropTypes.func.isRequired,
  handleChangeSnapshotName: PropTypes.func.isRequired,
  handleSnapshot: PropTypes.func.isRequired,
  snapshotName: PropTypes.string.isRequired,
};

export default PoiAction;
