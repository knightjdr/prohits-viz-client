import PropTypes from 'prop-types';
import React from 'react';

import getTabComponent from './get-tab-component';

const Tab = ({
  imageType,
  tabType,
}) => (
  <>
    {getTabComponent(tabType, imageType)}
  </>
);

Tab.propTypes = {
  imageType: PropTypes.string.isRequired,
  tabType: PropTypes.string.isRequired,
};

export default Tab;
