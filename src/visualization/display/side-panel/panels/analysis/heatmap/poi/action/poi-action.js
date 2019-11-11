import PropTypes from 'prop-types';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/pro-duotone-svg-icons';
import { faFilter } from '@fortawesome/pro-solid-svg-icons';

import Button from '../../../../../../../../components/buttons/rectangular/button';
import Input from '../../../../../../../../components/input/with-button/input-with-button-container';

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
        className="poi__action-filter"
        onClick={handleApply}
        kind="secondary"
        type="button"
      >
        <FontAwesomeIcon icon={faFilter} />
        Filter
      </Button>
      <Input
        buttonKind="secondary"
        buttonType="button"
        id="snapshotName"
        icon={faCamera}
        onChange={handleChangeSnapshotName}
        onClick={handleSnapshot}
        placeholder="Snapshot name..."
        type="text"
        value={snapshotName}
      />
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
