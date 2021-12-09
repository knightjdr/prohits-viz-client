import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function useScrollToTop(ref) {
  const location = useLocation();

  useEffect(() => {
    if (ref?.current) {
      // eslint-disable-next-line no-param-reassign
      ref.current.scrollTop = 0;
    }
  }, [location]);

  return null;
}

export default useScrollToTop;
