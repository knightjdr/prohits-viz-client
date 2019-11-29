import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';
import { faBars } from '@fortawesome/pro-solid-svg-icons';

import Analysis from './panels/analysis/analysis-container';
import IconButton from '../../../components/buttons/icon/button';
import Info from './panels/info/info-container';
import Markup from './panels/markup/markup';
import Minimap from './panels/minimap/minimap-container';
import Save from './panels/save/save';
import Settings from './panels/settings/settings-container';
import Tabs from './tabs/tabs-container';

import './side-panel.css';

const visibilityConfig = isOpen => (
  isOpen ? { className: 'visible' } : { className: 'hidden' }
);

const SidePanel = forwardRef((
  {
    isOpen,
    togglePanel,
    translation,
  },
  ref,
) => {
  const settings = visibilityConfig(isOpen);
  return (
    <>
      <div
        className={`side-panel ${settings.className}`}
        ref={ref}
      >
        <Tabs />
        <div
          className="panel__container"
          style={{
            transform: `translate(${translation}px)`,
          }}
        >
          <Info />
          <Minimap />
          <Settings />
          <Markup />
          <Analysis />
          <Save />
        </div>
      </div>
      <IconButton
        className={`side-panel__menu ${settings.className}`}
        icon={faBars}
        kind="primary"
        onClick={togglePanel}
      />
    </>
  );
});

SidePanel.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  togglePanel: PropTypes.func.isRequired,
  translation: PropTypes.number.isRequired,
};

export default SidePanel;
