import PropTypes from 'prop-types';
import React from 'react';

import Select from '../../../components/select/select-container';

const CrisprConvert = ({
  errors,
  handleStringUtilityField,
  tool,
}) => (
  <>
    <p className="utility__description">
      Convert output files from a supported CRISPR analysis tool to a format compatible
      with ProHits-viz. First select the file or files to convert and then specify the analysis tool.
      Multiple files can be selected, and generally should be for tools that output separate
      files for each experimental condition. All files submitted must be from the same tool
      and the same version of the tool or pipeline; for example, files output from the MAGeCK RRA and
      MLE commands cannot be mixed together.
    </p>
    <div className="utility__inputs">
      <Select
        id="tool"
        label="Tool"
        onChange={handleStringUtilityField}
        options={[
          { label: 'BAGEL', value: 'bagel' },
          { label: 'drugZ', value: 'drugz' },
          { label: 'MAGeCK', value: 'mageck' },
          { label: 'RANKS', value: 'ranks' },
        ]}
        placeholder="Select tool..."
        value={tool}
        warning={errors.tool}
      />
    </div>
  </>
);

CrisprConvert.defaultProps = {
  errors: {},
  tool: '',
};

CrisprConvert.propTypes = {
  tool: PropTypes.string,
  errors: PropTypes.shape({
    tool: PropTypes.string,
  }),
  handleStringUtilityField: PropTypes.func.isRequired,
};

export default CrisprConvert;
