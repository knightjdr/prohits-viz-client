import { useDispatch, useSelector } from 'react-redux';

import calculateRSQ from './calculate-rsq';
import convertArrayToObject from '../../../../../../utils/convert-array-to-object';
import round from '../../../../../../utils/round';
import { selectDataProperty } from '../../../../../../state/selector/visualization/data-selector';
import { updateAnalysisField } from '../../../../../../state/visualization/analysis/analysis-actions';

const useRSQ = () => {
  const dispatch = useDispatch();
  const points = useSelector((state) => selectDataProperty(state, 'points', 'current'));

  const submit = (labels) => {
    const dict = convertArrayToObject(labels);
    const x = [];
    const y = [];
    points.forEach((point) => {
      if (dict[point.label]) {
        x.push(point.x);
        y.push(point.y);
      }
    });
    const rsq = calculateRSQ(x, y);
    const rounded = round(rsq, 3);
    dispatch(updateAnalysisField('rsq', rounded));
  };

  return submit;
};

export default useRSQ;
