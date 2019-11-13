import { useDispatch, useSelector } from 'react-redux';

import { addAnalysis } from '../../../../../../state/visualization/analysis/analysis-actions';
import { selectState } from '../../../../../../state/selector/general';

const useGprofilerAnalysis = () => {
  const dispatch = useDispatch();

  const gprofiler = useSelector(state => selectState(state, 'gprofiler'));

  const submit = (analysisID, analysisName) => {
    const analysisState = {
      isProcessing: true,
      type: 'gprofiler',
    };
    dispatch(addAnalysis(analysisID, analysisName, analysisState));
  };

  return submit;
};

export default useGprofilerAnalysis;
