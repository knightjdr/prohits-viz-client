import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { resetCircheatmap } from '../../../../state/visualization/settings/display-actions';

const useShortCuts = () => {
  const dispatch = useDispatch();

  const handleKeyDown = useCallback(
    (e) => {
      const { key, shiftKey } = e;
      if (shiftKey && key === 'R') {
        e.preventDefault();
        dispatch(resetCircheatmap());
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
