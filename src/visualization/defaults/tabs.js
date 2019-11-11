import isObject from '../../utils/is-object';
import { validateArray, validateNumber } from '../../utils/validate-type';

export const defaultState = {
  active: 'main',
  activeSnapshot: 'main',
  analysisID: 0,
  availableAnalysis: [],
  availableSnapshots: ['main'],
  snapshotID: 0,
};

const fillTabs = (userTabs) => {
  if (!userTabs || !isObject(userTabs)) {
    return {
      ...defaultState,
      availableAnalysis: [],
      availableSnapshots: ['main'],
    };
  }

  const {
    active,
    activeSnapshot,
    analysisID,
    availableAnalysis,
    availableSnapshots,
    snapshotID,
  } = userTabs;

  const tabs = {
    analysisID: validateNumber(analysisID, defaultState.analysisID),
    availableAnalysis: validateArray(availableAnalysis, defaultState.availableAnalysis),
    availableSnapshots: validateArray(availableSnapshots, defaultState.availableSnapshots),
    snapshotID: validateNumber(snapshotID, defaultState.snapshotID),
  };

  tabs.active = [...tabs.availableAnalysis, ...tabs.availableSnapshots].includes(active)
    ? active : tabs.availableSnapshots[0];
  tabs.activeSnapshot = tabs.availableSnapshots.includes(activeSnapshot) ? activeSnapshot : tabs.availableSnapshots[0];

  return tabs;
};

export default fillTabs;
