import { useSelector } from 'react-redux';

import exportFields from './export-fields';
import parseFields from './parse-fields';

const useSessionData = () => {
  const session = useSelector((state) => state);

  const { imageType } = session.parameters;

  const exportData = () => {
    if (imageType === 'dotplot' || imageType === 'heatmap') {
      return parseFields(session, exportFields.heatmap);
    } if (imageType === 'scatter') {
      return parseFields(session, exportFields.scatter);
    }
    return {};
  };

  return exportData;
};

export default useSessionData;
