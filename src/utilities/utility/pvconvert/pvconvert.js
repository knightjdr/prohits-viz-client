import PropTypes from 'prop-types';
import React from 'react';

import Select from '../../../components/select/select-container';

const PVConvert = ({
  error,
  handleUtilityField,
  imageType,
}) => (
  <>
    <p className="utility__description">
      Convert an interactive file in .txt or .tsv format from ProHits-viz version 1 (prohits-viz.lunenfeld.ca)
      to a format compatible with this version of ProHits-viz.
    </p>
    <Select
      label="Image type"
      id="imageType"
      onChange={handleUtilityField}
      options={[
        { label: 'Dot plot', value: 'dotplot' },
        { label: 'Heat map', value: 'heatmap' },
        { label: 'Scatter', value: 'scatter' },
      ]}
      placeholder="Select image type..."
      value={imageType}
      warning={error}
    />
  </>
);

PVConvert.defaultProps = {
  error: '',
  imageType: '',
};

PVConvert.propTypes = {
  error: PropTypes.string,
  handleUtilityField: PropTypes.func.isRequired,
  imageType: PropTypes.string,
};

export default PVConvert;
