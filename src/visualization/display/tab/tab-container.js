import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';

import Tab from './tab';
import { selectStateProperty } from '../../../state/selector/general';

const TabContainer = ({
  children,
}) => {
  const activeTab = useSelector(state => selectStateProperty(state, 'tabs', 'active'));

  return (
    <Tab activeTab={activeTab}>
      {children}
    </Tab>
  );
};

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TabContainer;
