import { useDispatch } from 'react-redux';

import useExportData from './use-export-data';
import useFetch from '../../../../../../hooks/fetch/use-fetch';
import * as actions from '../../../../../../state/visualization/export/export-actions';

const useExportImage = () => {
  const dispatch = useDispatch();

  const exportData = useExportData();
  const fetch = useFetch();

  const exportImage = async () => {
    dispatch(actions.exportImage());

    const options = {
      data: exportData(),
      method: 'POST',
    };

    const response = await fetch('/export/', options);
    if (response.error) {
      dispatch(actions.exportError());
    }
  };

  return exportImage;
};

export default useExportImage;
