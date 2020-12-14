export const CHANGE_PANEL_TAB = 'CHANGE_PANEL_TAB';
export const TOGGLE_PANEL = 'TOGGLE_PANEL';

export const changePanelTab = (tab) => ({
  tab,
  type: CHANGE_PANEL_TAB,
});

export const togglePanel = (visible) => ({
  type: TOGGLE_PANEL,
  visible,
});
