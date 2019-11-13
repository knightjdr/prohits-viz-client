import isObject from '../../utils/is-object';
import { validateArray, validateNumber, validateString } from '../../utils/validate-type';

export const defaultState = {
  active: 'main',
  activeSnapshot: 'main',
  analysisID: 0,
  availableAnalyses: [],
  availableSnapshots: ['main'],
  snapshotID: 0,
  tabType: 'snapshot',
};

const fillTabs = (userTabs) => {
  if (!userTabs || !isObject(userTabs)) {
    return {
      ...defaultState,
      availableAnalyses: [],
      availableSnapshots: ['main'],
    };
  }

  const {
    active,
    activeSnapshot,
    analysisID,
    availableAnalyses,
    availableSnapshots,
    snapshotID,
    tabType,
  } = userTabs;

  const tabs = {
    active: validateString(active, defaultState.active),
    activeSnapshot: validateString(activeSnapshot, defaultState.activeSnapshot),
    analysisID: validateNumber(analysisID, defaultState.analysisID),
    availableAnalyses: validateArray(availableAnalyses, defaultState.availableAnalyses),
    availableSnapshots: validateArray(availableSnapshots, defaultState.availableSnapshots),
    snapshotID: validateNumber(snapshotID, defaultState.snapshotID),
    tabType: validateString(tabType, defaultState.tabType),
  };

  if (![...tabs.availableAnalyses, ...tabs.availableSnapshots].includes(tabs.active)) {
    [tabs.active] = tabs.availableSnapshots;
    tabs.tabType = 'snapshot';
  }

  if (!tabs.availableSnapshots.includes(activeSnapshot)) {
    [tabs.activeSnapshot] = tabs.availableSnapshots;
  }

  return tabs;
};

export default fillTabs;
