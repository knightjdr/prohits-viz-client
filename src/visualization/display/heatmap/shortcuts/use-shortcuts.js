import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { resetImage } from '../../../../state/visualization/settings/display-actions';

const useShortCuts = () => {
  const dispatch = useDispatch();

  const handleKeyDown = useCallback(
    (e) => {
      const { key, metaKey } = e;
      if (metaKey && key === 'r') {
        e.preventDefault();
        dispatch(resetImage());
      }
    },
    [dispatch],
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);
};

export default useShortCuts;
