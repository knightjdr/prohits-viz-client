import PropTypes from 'prop-types';
import React from 'react';

import Sorting from './sorting';

const Settings = ({
  handleChange,
  settings,
}) => {
  const { sortAbundanceFilter } = settings;

  return (
    <>
      <Sorting
        handleChange={handleChange}
        sortAbundanceFilter={sortAbundanceFilter}
      />
    </>
  );
};

Settings.propTypes = {
  handleChange: PropTypes.func.isRequired,
  settings: PropTypes.shape({
    sortAbundanceFilter: PropTypes.number.isRequired,
  }).isRequired,
};

export default Settings;
