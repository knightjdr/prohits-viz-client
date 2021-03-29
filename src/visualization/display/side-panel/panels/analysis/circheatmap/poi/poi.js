import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import Action from './action/poi-action-container';
import ContextMenu from '../../poi/context-menu/context-menu-container';
import ListReorder from '../../poi/list-reorder';
import ListSwap from '../../poi/list-swap';
import Section from '../../../section/section';
import Select from '../../poi/select';

import './poi.css';

const Poi = forwardRef((
  {
    closeContextMenu,
    contextMenuState,
    handleContextMenu,
    handleReorder,
    handleSwap,
    readouts,
  },
  ref,
) => (
  <>
    <ContextMenu
      handleMenuClose={closeContextMenu}
      menuState={contextMenuState}
    />
    <Section
      border={false}
      helpLink="/help/visualization/circular-heatmap#selections"
      title="Selection"
    >
      <div className="poi__grid-circheatmap">
        <Select
          handleContextMenu={handleContextMenu}
          options={readouts.unselected}
          ref={ref.readouts.unselected}
          selectedType="unselected"
          type="readouts"
          title="Label"
        />
        <ListSwap
          handleSwap={handleSwap}
          type="readouts"
        />
        <Select
          handleContextMenu={handleContextMenu}
          options={readouts.poi}
          ref={ref.readouts.poi}
          selectedType="poi"
          type="readouts"
          title="Selected"
        />
        <ListReorder
          handleReorder={handleReorder}
          type="readouts"
        />
      </div>
      <Action />
    </Section>
  </>
));

Poi.propTypes = {
  closeContextMenu: PropTypes.func.isRequired,
  contextMenuState: PropTypes.shape({}).isRequired,
  handleContextMenu: PropTypes.func.isRequired,
  handleReorder: PropTypes.func.isRequired,
  handleSwap: PropTypes.func.isRequired,
  readouts: PropTypes.shape({
    unselected: PropTypes.arrayOf(
      PropTypes.shape({
        index: PropTypes.number,
        name: PropTypes.string,
      }),
    ).isRequired,
    poi: PropTypes.arrayOf(
      PropTypes.shape({
        index: PropTypes.number,
        name: PropTypes.string,
      }),
    ).isRequired,
  }).isRequired,
};

export default Poi;
