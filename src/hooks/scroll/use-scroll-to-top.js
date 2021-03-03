import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function useScrollToTop(ref) {
  const history = useHistory();

  useEffect(() => {
    const unlisten = history.listen(() => {
      // eslint-disable-next-line no-param-reassign
      ref.current.scrollTop = 0;
    });
    return () => {
      unlisten();
    };
  }, []);

  return null;
}

export default useScrollToTop;
