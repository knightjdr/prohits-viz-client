import { useSelector } from 'react-redux';

import defineAnalysisName from '../utils/define-name';
import mergePOI from './merge-poi';
import useGprofilerAnalysis from './use-gprofiler-analysis';
import useNewPOI from '../utils/use-new-poi';
import { selectColumnNames } from '../../../../../../state/selector/visualization/column-selector';
import { selectPlotLabels } from '../../../../../../state/selector/visualization/plot-selector';
import { selectRowNames } from '../../../../../../state/selector/visualization/row-selector';
import { selectState, selectStateProperty } from '../../../../../../state/selector/general';

const useSubmitAnalysis = () => {
  const columnNames = useSelector((state) => selectColumnNames(state));
  const imageType = useSelector((state) => selectStateProperty(state, 'parameters', 'imageType'));
  const rowNames = useSelector((state) => selectRowNames(state));
  const tabs = useSelector((state) => selectState(state, 'tabs'));
  const { labels: pointNames } = useSelector((state) => selectPlotLabels(state));

  const defineNewPOI = useNewPOI();
  const performGprofilerAnalysis = useGprofilerAnalysis();

  const submit = (analyisType, analysisName) => {
    const analysis = defineAnalysisName(analysisName, tabs, 'analysis');
    const names = {};
    if (imageType === 'dotplot' || imageType === 'heatmap') {
      names.columns = columnNames;
      names.rows = rowNames;
    } if (imageType === 'scatter') {
      names.points = pointNames;
    }
    const poi = mergePOI(defineNewPOI(false), names);

    if (poi.length > 0 && analyisType === 'gprofiler') {
      performGprofilerAnalysis(analysis.id, analysis.name, poi);
    }
  };

  return submit;
};

export default useSubmitAnalysis;
