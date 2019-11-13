import { useSelector } from 'react-redux';

import defineAnalysisName from '../utils/define-name';
import mergePOI from './merge-poi';
import useGprofilerAnalysis from './use-gprofiler-analysis';
import useNewPOI from '../utils/use-new-poi';
import { selectColumnNames } from '../../../../../../state/selector/visualization/column-selector';
import { selectRowNames } from '../../../../../../state/selector/visualization/row-selector';
import { selectState } from '../../../../../../state/selector/general';

const useSubmitAnalysis = () => {
  const columnNames = useSelector(state => selectColumnNames(state));
  const rowNames = useSelector(state => selectRowNames(state));
  const tabs = useSelector(state => selectState(state, 'tabs'));

  const defineNewPOI = useNewPOI();
  const performGprofilerAnalysis = useGprofilerAnalysis();

  const submit = (analyisType, analysisName) => {
    const analysis = defineAnalysisName(analysisName, tabs, 'analysis');
    const poi = mergePOI(defineNewPOI(), columnNames, rowNames);

    if (analyisType === 'gprofiler') {
      performGprofilerAnalysis(analysis.id, analysis.name, poi);
    }
  };

  return submit;
};

export default useSubmitAnalysis;
