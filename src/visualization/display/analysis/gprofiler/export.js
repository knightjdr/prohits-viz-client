import PropTypes from 'prop-types';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileExport } from '@fortawesome/pro-duotone-svg-icons';

import Button from '../../../../components/buttons/rectangular/button';

const Actions = ({
  handleExportCSV,
}) => (
  <div>
    <Button
      className="gprofiler-results__export"
      kind="secondary"
      onClick={handleExportCSV}
      type="button"
    >
      <FontAwesomeIcon icon={faFileExport} />
      Export
    </Button>
  </div>
);

Actions.propTypes = {
  handleExportCSV: PropTypes.func.isRequired,
};

export default Actions;
