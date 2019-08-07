import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { faBars } from '@fortawesome/pro-solid-svg-icons';

import IconButton from '../../../components/buttons/icon/button';
import Tabs from './tabs/tabs-container';

import './side-panel.css';

const visibilityConfig = (isOpen) => {
  if (isOpen) {
    return {
      className: 'visible',
    };
  }
  return {
    className: 'hidden',
  };
};

const SidePanel = ({
  isOpen,
  togglePanel,
}) => {
  const settings = visibilityConfig(isOpen);
  return (
    <Fragment>
      <div className={`side-panel ${settings.className}`}>
        <Tabs />
      </div>
      <IconButton
        className={`side-panel__menu ${settings.className}`}
        icon={faBars}
        kind="secondary"
        onClick={togglePanel}
      />
    </Fragment>
  );
};

SidePanel.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  togglePanel: PropTypes.func.isRequired,
};

export default SidePanel;
