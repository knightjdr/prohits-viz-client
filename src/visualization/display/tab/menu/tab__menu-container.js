import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TabMenu from './tab__menu';

import { selectState } from '../../../../state/selector/general';
import { changeActiveSnapshot } from '../../../../state/visualization/settings/tabs-actions';
import { removeHeatmapSnapshot } from '../../../../state/visualization/data/snapshot-actions';

const TabMenuContainer = () => {
  const dispatch = useDispatch();
  const ref = useRef();
  const [menuState, setMenuState] = useState({ open: false });

  const tabs = useSelector(state => selectState(state, 'tabs'));

  const { active: activeTab, availableAnalysis, availableSnapshots } = tabs;

  const handleCloseMenu = () => {
    setMenuState({ open: false });
  };

  const handleToggleMenu = () => {
    const { x, y } = ref.current.getBoundingClientRect();
    setMenuState({
      open: !menuState.open,
      x,
      y,
    });
  };

  const handleChangeSnapshot = (e) => {
    const { snapshot } = e.currentTarget.dataset;
    dispatch(changeActiveSnapshot(snapshot));
  };

  const handleDeleteSnapshot = (e) => {
    const { snapshot } = e.currentTarget.dataset;
    dispatch(removeHeatmapSnapshot(snapshot));
  };

  return (
    <TabMenu
      activeTab={activeTab}
      analyses={availableAnalysis}
      handleChangeSnapshot={handleChangeSnapshot}
      handleCloseMenu={handleCloseMenu}
      handleDeleteSnapshot={handleDeleteSnapshot}
      handleToggleMenu={handleToggleMenu}
      menuState={menuState}
      ref={ref}
      snapshots={availableSnapshots}
    />
  );
};

const ShowContainer = ({
  show,
}) => (
  show
    ? <TabMenuContainer />
    : null
);

ShowContainer.propTypes = {
  show: PropTypes.bool.isRequired,
};

export default ShowContainer;
