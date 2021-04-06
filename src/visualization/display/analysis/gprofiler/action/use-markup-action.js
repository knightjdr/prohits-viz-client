import { useDispatch } from 'react-redux';

import useAnnotation from '../../../side-panel/panels/markup/heatmap/annotations/use-annotation';
import { addGroupFromList } from '../../../../../state/visualization/scatter/customization-actions';

const useMarkupAction = (imageType) => {
  const dispatch = useDispatch();
  const addAnnotation = useAnnotation();

  const createAnnotation = (data) => () => {
    addAnnotation(data.term);
  };

  const createCustomGroup = (data) => () => {
    const genes = data.genes.split(', ');
    dispatch(addGroupFromList(genes, data.term));
  };

  if (imageType === 'dotplot' || imageType === 'heatmap') {
    return createAnnotation;
  } if (imageType === 'scatter') {
    return createCustomGroup;
  }
  return null;
};

export default useMarkupAction;
