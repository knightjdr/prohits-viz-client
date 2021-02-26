import { useSelector } from 'react-redux';

import defineAnalysisName from '../utils/define-name';
import mergePOI from './merge-poi';
import useGprofilerAnalysis from './use-gprofiler-analysis';
import useNewPOI from '../utils/use-new-poi';
import { selectCircHeatmapLabels } from '../../../../../../state/selector/visualization/circheatmap-selector';
import { selectColumnNames } from '../../../../../../state/selector/visualization/column-selector';
import { selectScatterLabels } from '../../../../../../state/selector/visualization/scatter-selector';
import { selectRowNames } from '../../../../../../state/selector/visualization/row-selector';
import { selectState, selectStateProperty } from '../../../../../../state/selector/general';

const useSubmitAnalysis = () => {
  const columnNames = useSelector((state) => selectColumnNames(state));
  const imageType = useSelector((state) => selectStateProperty(state, 'parameters', 'imageType'));
  const rowNames = useSelector((state) => selectRowNames(state));
  const tabs = useSelector((state) => selectState(state, 'tabs'));
  const { labels: readoutNames } = useSelector((state) => selectCircHeatmapLabels(state));
  const { labels: pointNames } = useSelector((state) => selectScatterLabels(state));

  const defineNewPOI = useNewPOI();
  const performGprofilerAnalysis = useGprofilerAnalysis();

  const submit = (analyisType, analysisName) => {
    const analysis = defineAnalysisName(analysisName, tabs, 'analysis');
    const names = {};
    if (imageType === 'circheatmap') {
      names.readouts = readoutNames;
    } if (imageType === 'dotplot' || imageType === 'heatmap') {
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
