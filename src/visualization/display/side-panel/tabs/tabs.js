import PropTypes from 'prop-types';
import React from 'react';
import { faArrowRight } from '@fortawesome/pro-solid-svg-icons';

import IconButton from '../../../../components/buttons/icon/button';
import Tab from './tab';

import './tabs.css';

const Tabs = ({
  activeTab,
  handleClick,
  panelOpen,
  tabs,
  togglePanel,
}) => (
  <div className="side-panel__tabs">
    {
      tabs.map((tab) => (
        <Tab
          activeTab={activeTab}
          key={tab}
          onClick={handleClick}
          tab={tab}
        />
      ))
    }
    <div className="side-panel__tabs-filler" />
    <IconButton
      className={`side-panel__toggle ${panelOpen ? 'visible' : 'hidden'}`}
      icon={faArrowRight}
      kind="primary"
      onClick={togglePanel}
    />
  </div>
);

Tabs.propTypes = {
  activeTab: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  panelOpen: PropTypes.bool.isRequired,
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  togglePanel: PropTypes.func.isRequired,
};

export default Tabs;
