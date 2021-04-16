import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { defaultState as defaultDisplayState } from '../../../defaults/scatter/display';
import { resetScatter } from '../../../../state/visualization/settings/display-actions';

const useShortCuts = () => {
  const dispatch = useDispatch();

  const handleKeyDown = useCallback(
    (e) => {
      const { key, ctrlKey } = e;
      if (ctrlKey && key.toLowerCase() === 'u') {
        e.preventDefault();
        dispatch(resetScatter(defaultDisplayState));
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
