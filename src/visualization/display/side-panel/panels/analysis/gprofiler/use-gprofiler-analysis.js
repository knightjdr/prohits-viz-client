import { useDispatch, useSelector } from 'react-redux';

import useFetch from '../../../../../../hooks/fetch/use-fetch';
import { addAnalysis } from '../../../../../../state/visualization/analysis/analysis-actions';
import { selectState } from '../../../../../../state/selector/general';

const useGprofilerAnalysis = () => {
  const dispatch = useDispatch();
  const {
    geneSeparator,
    ...settings
  } = useSelector((state) => selectState(state, 'gprofiler'));

  const fetch = useFetch();

  const submit = (analysisID, analysisName, poi) => {
    const analysisState = {
      isProcessing: true,
      type: 'gprofiler',
    };
    dispatch(addAnalysis(analysisID, analysisName, analysisState));

    const reGeneSeparator = new RegExp(`[${geneSeparator}]`);
    const query = poi.map((gene) => gene.split(reGeneSeparator)[0]);

    const url = '/analysis/viz/go';
    const options = {
      data: {
        ...settings,
        query,
        analysisName,
      },
      method: 'POST',
    };
    fetch(url, options);
  };

  return submit;
};

export default useGprofilerAnalysis;
