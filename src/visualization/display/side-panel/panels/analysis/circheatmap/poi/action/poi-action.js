import PropTypes from 'prop-types';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/pro-solid-svg-icons';

import Button from '../../../../../../../../components/buttons/rectangular/button';

import './poi-action.css';

const PoiAction = ({
  handleApply,
}) => (
  <>
    <div className="poi__action-circheatmap">
      <Button
        className="poi__action-circheatmap-filter"
        onClick={handleApply}
        kind="secondary"
        type="button"
      >
        <FontAwesomeIcon icon={faFilter} />
        Filter
      </Button>
    </div>
  </>
);

PoiAction.propTypes = {
  handleApply: PropTypes.func.isRequired,
};

export default PoiAction;
