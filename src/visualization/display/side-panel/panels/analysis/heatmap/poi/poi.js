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
    columns,
    contextMenuState,
    handleContextMenu,
    handleReorder,
    handleSwap,
    rows,
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
      helpLink="/help/visualization/heatmap#selections"
      title="Selection"
    >
      <div className="poi__grid-heatmap">
        <Select
          handleContextMenu={handleContextMenu}
          options={columns.unselected}
          ref={ref.columns.unselected}
          selectedType="unselected"
          type="columns"
          title="Columns"
        />
        <ListSwap
          handleSwap={handleSwap}
          type="columns"
        />
        <Select
          handleContextMenu={handleContextMenu}
          options={columns.poi}
          ref={ref.columns.poi}
          selectedType="poi"
          type="columns"
          title="Selected"
        />
        <ListReorder
          handleReorder={handleReorder}
          type="columns"
        />
        <Select
          handleContextMenu={handleContextMenu}
          options={rows.unselected}
          ref={ref.rows.unselected}
          selectedType="unselected"
          type="rows"
          title="Rows"
        />
        <ListSwap
          handleSwap={handleSwap}
          type="rows"
        />
        <Select
          handleContextMenu={handleContextMenu}
          options={rows.poi}
          ref={ref.rows.poi}
          selectedType="poi"
          type="rows"
          title="Selected"
        />
        <ListReorder
          handleReorder={handleReorder}
          type="rows"
        />
      </div>
      <Action />
    </Section>
  </>
));

Poi.displayName = 'Poi';
Poi.propTypes = {
  closeContextMenu: PropTypes.func.isRequired,
  columns: PropTypes.shape({
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
  contextMenuState: PropTypes.shape({}).isRequired,
  handleContextMenu: PropTypes.func.isRequired,
  handleReorder: PropTypes.func.isRequired,
  handleSwap: PropTypes.func.isRequired,
  rows: PropTypes.shape({
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
