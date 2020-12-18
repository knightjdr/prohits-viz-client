import { validateBoolean } from '../../../utils/validate-type';

export const defaultState = {
  open: true,
  tab: 'info',
};

const validTabs = {
  info: true,
  settings: true,
};

const fillPanel = (userPanel) => {
  if (!userPanel) {
    return { ...defaultState };
  }

  const { open, tab } = userPanel;
  const panel = {};

  panel.open = validateBoolean(open, defaultState.open);
  panel.tab = validTabs[tab] ? tab : defaultState.tab;
  return panel;
};

export default fillPanel;
