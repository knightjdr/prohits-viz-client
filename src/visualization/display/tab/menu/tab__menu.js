import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';
import { faWindow } from '@fortawesome/pro-duotone-svg-icons';

import IconButton from '../../../../components/buttons/icon/button';
import MenuList from './menu__list';
import Modal from '../../../../components/modal/modal-container';

import './tab__menu.css';

const TabMenu = forwardRef((
  {
    activeTab,
    analyses,
    handleChangeAnalysis,
    handleChangeSnapshot,
    handleCloseMenu,
    handleDeleteAnalysis,
    handleDeleteSnapshot,
    handleToggleMenu,
    menuState,
    snapshots,
  },
  ref,
) => (
  <span
    className="tab__menu"
    ref={ref}
  >
    <IconButton
      icon={faWindow}
      kind="secondary"
      onClick={handleToggleMenu}
      type="button"
    />
    <Modal
      background={false}
      fromCursor
      handleClose={handleCloseMenu}
      isOpen={menuState.open}
      name="tab-menu"
      padding={false}
      placement={{
        horizontal: 'left',
        vertical: 'top',
        x: menuState.x,
        y: menuState.y,
      }}
    >
      <MenuList
        active={activeTab}
        deleteFirst={false}
        handleChangeSnapshot={handleChangeSnapshot}
        handleDeleteSnapshot={handleDeleteSnapshot}
        items={snapshots}
        title="snapshots"
      />
      <MenuList
        active={activeTab}
        handleChangeSnapshot={handleChangeAnalysis}
        handleDeleteSnapshot={handleDeleteAnalysis}
        items={analyses}
        title="analyses"
      />
    </Modal>
  </span>
));

TabMenu.propTypes = {
  activeTab: PropTypes.string.isRequired,
  analyses: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleChangeAnalysis: PropTypes.func.isRequired,
  handleChangeSnapshot: PropTypes.func.isRequired,
  handleCloseMenu: PropTypes.func.isRequired,
  handleDeleteAnalysis: PropTypes.func.isRequired,
  handleDeleteSnapshot: PropTypes.func.isRequired,
  handleToggleMenu: PropTypes.func.isRequired,
  menuState: PropTypes.shape({
    open: PropTypes.bool.isRequired,
    x: PropTypes.number,
    y: PropTypes.number,
  }).isRequired,
  snapshots: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TabMenu;
