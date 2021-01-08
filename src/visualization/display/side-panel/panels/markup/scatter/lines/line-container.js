import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Line from './line';

import isNumber from '../../../../../../../utils/is-number';
import sort from '../../../../../../../utils/sort';
import splitStringByCommaAndWhiteSpace from '../../../../../../../utils/split-comma-white-space';
import { selectData } from '../../../../../../../state/selector/visualization/data-selector';
import { updateLineSetting } from '../../../../../../../state/visualization/scatter/line-actions';

const LineContainer = () => {
  const dispatch = useDispatch();

  const lines = useSelector((state) => selectData(state, 'lines'));

  const handleSetFcLines = (e, id, value) => {
    const elements = splitStringByCommaAndWhiteSpace(value);
    const validElements = elements.filter((element) => isNumber(element));
    const numbers = validElements.map((element) => Number(element));
    numbers.sort(sort.numeric);
    dispatch(updateLineSetting('fcLines', numbers));
  };

  const handleSettingChange = (e, id, value) => {
    dispatch(updateLineSetting(id, value));
  };

  return (
    <Line
      dashLength={lines.dashLength}
      fcLines={lines.fcLines}
      handleSetFcLines={handleSetFcLines}
      handleSettingChange={handleSettingChange}
      isDashed={lines.isDashed}
      showFcLines={lines.showFcLines}
      showMidline={lines.showMidline}
    />
  );
};

export default LineContainer;
