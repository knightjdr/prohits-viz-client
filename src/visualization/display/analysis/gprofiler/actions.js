import PropTypes from 'prop-types';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenSquare, faFileExport } from '@fortawesome/pro-duotone-svg-icons';

import Button from '../../../../components/buttons/rectangular/button';
import InputWithButton from '../../../../components/input/with-button/input-with-button-container';

const Actions = ({
  handleAddAnnotation,
  handleExportCSV,
  imageType,
}) => (
  <div className="gprofiler-results__actions">
    {
      (imageType === 'dotplot' || imageType === 'heatmap')
      && (
        <InputWithButton
          buttonKind="success"
          buttonType="button"
          icon={faPenSquare}
          inputType="text"
          label="Annotation"
          onClick={handleAddAnnotation}
          placeholder="Add annotation..."
          value=""
        />
      )
    }
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
  handleAddAnnotation: PropTypes.func.isRequired,
  handleExportCSV: PropTypes.func.isRequired,
  imageType: PropTypes.string.isRequired,
};

export default Actions;
