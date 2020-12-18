import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TabMenu from './tab__menu';

import { selectState } from '../../../../state/selector/general';
import { changeActiveAnalysis, changeActiveSnapshot } from '../../../../state/visualization/settings/tabs-actions';
import { removeAnalysis } from '../../../../state/visualization/analysis/analysis-actions';
import { removeSnapshot } from '../../../../state/visualization/data/snapshot-actions';

const TabMenuContainer = () => {
  const dispatch = useDispatch();
  const ref = useRef();
  const [menuState, setMenuState] = useState({ open: false });

  const tabs = useSelector((state) => selectState(state, 'tabs'));

  const { active: activeTab, availableAnalyses, availableSnapshots } = tabs;

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

  const handleChangeAnalysis = (e) => {
    const { item } = e.currentTarget.dataset;
    handleCloseMenu();
    dispatch(changeActiveAnalysis(item));
  };

  const handleChangeSnapshot = (e) => {
    const { item } = e.currentTarget.dataset;
    handleCloseMenu();
    dispatch(changeActiveSnapshot(item));
  };

  const handleDeleteAnalysis = (e) => {
    const { item } = e.currentTarget.dataset;
    dispatch(removeAnalysis(item));
  };

  const handleDeleteSnapshot = (e) => {
    const { item } = e.currentTarget.dataset;
    dispatch(removeSnapshot(item));
  };

  return (
    <TabMenu
      activeTab={activeTab}
      analyses={availableAnalyses}
      handleChangeAnalysis={handleChangeAnalysis}
      handleChangeSnapshot={handleChangeSnapshot}
      handleCloseMenu={handleCloseMenu}
      handleDeleteAnalysis={handleDeleteAnalysis}
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
