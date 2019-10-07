import isObject from '../../utils/is-object';

const defaultState = {
  active: 'main',
  available: ['main'],
};

const fillTabs = (userTabs) => {
  if (!userTabs || !isObject(userTabs)) {
    return {
      active: 'main',
      available: ['main'],
    };
  }

  const { active, available } = userTabs;
  const tabs = {};

  tabs.available = Array.isArray(available) && available.length > 0
    ? available : defaultState.available;
  tabs.active = tabs.available.includes(active) ? active : tabs.available[0];

  return tabs;
};

export default fillTabs;
