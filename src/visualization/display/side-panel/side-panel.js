import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { faBars } from '@fortawesome/pro-solid-svg-icons';

import IconButton from '../../../components/buttons/icon/button';
import Info from './panels/info/info-container';
import Minimap from './panels/minimap/minimap-container';
import Tabs from './tabs/tabs-container';

import './side-panel.css';

const Panel = {
  info: <Info />,
  minimap: <Minimap />,
};

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
  activeTab,
  isOpen,
  togglePanel,
}) => {
  const settings = visibilityConfig(isOpen);
  return (
    <Fragment>
      <div className={`side-panel ${settings.className}`}>
        <Tabs />
        <div className="panel">
          {Panel[activeTab]}
        </div>
      </div>
      <IconButton
        className={`side-panel__menu ${settings.className}`}
        icon={faBars}
        kind="primary"
        onClick={togglePanel}
      />
    </Fragment>
  );
};

SidePanel.propTypes = {
  activeTab: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  togglePanel: PropTypes.func.isRequired,
};

export default SidePanel;
