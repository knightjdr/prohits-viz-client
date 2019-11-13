import PropTypes from 'prop-types';
import React from 'react';

import Advanced from './advanced';
import Databases from './databases';
import Description from './description';
import Organism from './organism';

const Analysis = ({
  handleChange,
  handleGoCheckboxChange,
  showAdvanced,
  settings,
  toggleAdvanced,
}) => (
  <div>
    <Description />
    <Organism
      handleChange={handleChange}
      organism={settings.organism}
    />
    <Databases
      handleChange={handleChange}
      handleGoCheckboxChange={handleGoCheckboxChange}
      settings={settings}
    />
    <Advanced
      handleChange={handleChange}
      settings={settings}
      showAdvanced={showAdvanced}
      toggleAdvanced={toggleAdvanced}
    />
  </div>
);

Analysis.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleGoCheckboxChange: PropTypes.func.isRequired,
  settings: PropTypes.shape({
    organism: PropTypes.string.isRequired,
  }).isRequired,
  showAdvanced: PropTypes.bool.isRequired,
  toggleAdvanced: PropTypes.func.isRequired,
};

export default Analysis;
