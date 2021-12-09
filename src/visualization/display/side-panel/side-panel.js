import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';
import { faBars } from '@fortawesome/pro-solid-svg-icons';

import Analysis from './panels/analysis/analysis-container';
import Customization from './panels/customization/customization';
import IconButton from '../../../components/buttons/icon/button';
import Info from './panels/info/info-container';
import Markup from './panels/markup/markup-container';
import Minimap from './panels/minimap/minimap-container';
import Save from './panels/save/save';
import Settings from './panels/settings/settings-container';
import Tabs from './tabs/tabs-container';

import './side-panel.css';

const visibilityConfig = (isOpen) => (
  isOpen ? { className: 'visible' } : { className: 'hidden' }
);

const panels = (imageType) => {
  if (imageType === 'circheatmap') {
    return (
      <>
        <Info />
        <Settings />
        <Markup />
        <Analysis />
        <Save />
      </>
    );
  } if (imageType === 'dotplot' || imageType === 'heatmap') {
    return (
      <>
        <Info />
        <Minimap />
        <Settings />
        <Markup />
        <Analysis />
        <Save />
      </>
    );
  } if (imageType === 'scatter') {
    return (
      <>
        <Info />
        <Settings />
        <Markup />
        <Customization />
        <Analysis />
        <Save />
      </>
    );
  }
  return null;
};

const SidePanel = forwardRef((
  {
    imageType,
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
          {panels(imageType)}
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

SidePanel.displayName = 'SidePanel';
SidePanel.propTypes = {
  imageType: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  togglePanel: PropTypes.func.isRequired,
  translation: PropTypes.number.isRequired,
};

export default SidePanel;
