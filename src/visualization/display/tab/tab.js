import PropTypes from 'prop-types';
import React from 'react';

import TabMenu from './menu/tab__menu-container';

import getTabComponent from './get-tab-component';

import './tab.css';

const Tab = ({
  imageType,
  showMenu,
  tabType,
}) => (
  <div className="tab">
    <TabMenu show={showMenu} />
    {getTabComponent(tabType, imageType)}
  </div>
);

Tab.propTypes = {
  imageType: PropTypes.string.isRequired,
  showMenu: PropTypes.bool.isRequired,
  tabType: PropTypes.string.isRequired,
};

export default Tab;
