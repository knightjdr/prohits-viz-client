import { useSelector } from 'react-redux';

import exportFields from './export-fields';
import parseFields from './parse-fields';

const useSessionData = () => {
  const session = useSelector(state => state);

  const { analysisType } = session.parameters;

  const exportData = () => {
    switch (analysisType) {
      case 'correlation':
        return parseFields(session, exportFields.heatmap);
      case 'dotplot':
        return parseFields(session, exportFields.heatmap);
      default:
        return {};
    }
  };

  return exportData;
};

export default useSessionData;
