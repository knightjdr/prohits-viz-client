import convertArrayToObject from '../../../utils/convert-array-to-object';
import { getData, getDataProperty } from '../../selector/visualization/data-selector';
import { getPlotLabels } from '../../selector/visualization/scatter-selector';

export const ADD_GROUP = 'ADD_GROUP';
export const DELETE_ALL_GROUPS = 'DELETE_ALL_GROUPS';
export const DELETE_GROUP = 'DELETE_GROUP';
export const DELETE_POINT = 'DELETE_POINT';
export const UPDATE_CUSTOMIZATION_SETTING = 'UPDATE_CUSTOMIZATION_SETTING';
export const UPDATE_GROUPS = 'UPDATE_GROUPS';
export const UPDATE_GROUP_SETTING = 'UPDATE_GROUP_SETTING';

const addGroupFromThunk = (groups, nextGroupID, noTotalPoints) => ({
  AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
  groups,
  nextGroupID,
  noTotalPoints,
  type: ADD_GROUP,
});

export const deleteAllGroups = () => ({
  AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
  type: DELETE_ALL_GROUPS,
});

export const deleteGroup = (groupIndex) => ({
  AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
  groupIndex,
  type: DELETE_GROUP,
});

export const deletePoint = (groupIndex, label) => ({
  AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
  groupIndex,
  label,
  type: DELETE_POINT,
});

export const updateCustomizationSetting = (setting, value) => ({
  AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
  setting,
  type: UPDATE_CUSTOMIZATION_SETTING,
  value,
});

export const updateGroups = (groups) => ({
  AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
  groups,
  type: UPDATE_GROUPS,
});

export const updateGroupSetting = (groupIndex, setting, value) => ({
  AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
  groupIndex,
  setting,
  type: UPDATE_GROUP_SETTING,
  value,
});

export const addGroup = () => (
  (dispatch, getState) => {
    const state = getState();
    const customizations = getData(state, 'customization');
    const poi = getDataProperty(state, 'poi', 'points');
    const { labels } = getPlotLabels(state);

    const {
      color,
      groups,
      id: groupID,
      label: groupLabel,
      radius,
    } = customizations;

    if (poi.length > 0) {
      const newGroup = {
        color,
        label: groupLabel || `custom group ${groupID}`,
        points: poi.map((index) => labels[index]),
        radius,
      };
      const newGroupDict = convertArrayToObject(newGroup.points);

      const updatedGroups = [
        ...groups.map((group) => ({
          ...group,
          points: group.points.filter((point) => !newGroupDict[point]),
        })),
        newGroup,
      ];

      const nextGroupID = customizations.label ? groupID : groupID + 1;
      dispatch(addGroupFromThunk(updatedGroups, nextGroupID, labels.length));
    }
  }
);
