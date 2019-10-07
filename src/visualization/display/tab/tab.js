import PropTypes from 'prop-types';
import React from 'react';

const Tab = ({
  children,
}) => (
  <>
    {children}
  </>
);

Tab.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Tab;
