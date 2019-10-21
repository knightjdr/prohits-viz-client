export const defaultState = {
  open: true,
  tab: 'markup',
};

const validTabs = {
  analysis: true,
  info: true,
  markup: true,
  minimap: true,
  save: true,
  settings: true,
};

const fillPanel = (userPanel) => {
  if (!userPanel) {
    return { ...defaultState };
  }

  const { open, tab } = userPanel;
  const panel = {};

  panel.open = typeof open === 'boolean' ? open : defaultState.open;
  panel.tab = validTabs[tab] ? tab : defaultState.tab;
  return panel;
};

export default fillPanel;
