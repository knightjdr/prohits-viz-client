import PropTypes from 'prop-types';
import React from 'react';

import Button from '../../../../../../../../components/buttons/rectangular/button';

const PasteInputFooter = ({
  handleAppend,
  handleClose,
  handleReplace,
}) => (
  <div className="selection__paste-input-footer">
    <Button
      kind="warning"
      onClick={handleClose}
      type="button"
    >
      Close
    </Button>
    <Button
      kind="alert"
      onClick={handleReplace}
      type="button"
    >
      Replace
    </Button>
    <Button
      kind="success"
      onClick={handleAppend}
      type="button"
    >
      Append
    </Button>
  </div>
);

PasteInputFooter.propTypes = {
  handleAppend: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleReplace: PropTypes.func.isRequired,
};

export default PasteInputFooter;
