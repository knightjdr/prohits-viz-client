import { nanoid } from 'nanoid';
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import calculateNewPosition from './calculate-new-position';
import { addAnnotation } from '../../../../../../../state/visualization/markup/annotation-actions';
import { selectData } from '../../../../../../../state/selector/visualization/data-selector';
import { selectStateProperty } from '../../../../../../../state/selector/general';

const useAnnotation = () => {
  const dispatch = useDispatch();

  const dimensions = useSelector((state) => selectData(state, 'dimensions'));
  const imageType = useSelector((state) => selectStateProperty(state, 'parameters', 'imageType'));
  const position = useSelector((state) => selectData(state, 'position'));

  const defaultPosition = useMemo(
    () => calculateNewPosition(imageType, dimensions, position),
    [imageType, dimensions, position],
  );

  const handleAddAnnotation = (text) => {
    if (text) {
      const annotationID = nanoid();
      dispatch(addAnnotation(annotationID, text, defaultPosition));
    }
  };

  return handleAddAnnotation;
};

export default useAnnotation;
