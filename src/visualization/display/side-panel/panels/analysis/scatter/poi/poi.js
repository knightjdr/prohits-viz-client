import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

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
    points,
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
      helpLink="/help/visualization/scatterplot#selections"
      title="Selection"
    >
      <div className="poi__grid-scatter">
        <Select
          handleContextMenu={handleContextMenu}
          options={points.unselected}
          ref={ref.points.unselected}
          selectedType="unselected"
          type="points"
          title="Label"
        />
        <ListSwap
          handleSwap={handleSwap}
          type="points"
        />
        <Select
          handleContextMenu={handleContextMenu}
          options={points.poi}
          ref={ref.points.poi}
          selectedType="poi"
          type="points"
          title="Selected"
        />
        <ListReorder
          handleReorder={handleReorder}
          type="points"
        />
      </div>
    </Section>
  </>
));

Poi.propTypes = {
  closeContextMenu: PropTypes.func.isRequired,
  contextMenuState: PropTypes.shape({}).isRequired,
  handleContextMenu: PropTypes.func.isRequired,
  handleReorder: PropTypes.func.isRequired,
  handleSwap: PropTypes.func.isRequired,
  points: PropTypes.shape({
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
