import { useEffect } from 'react';

import debounce from '../../utils/debounce';
import normalizeWheel from './normalize-wheel';

const useScroll = (ref, callback, wait = 50) => {
  const listener = debounce((e) => {
    const normalized = normalizeWheel(e);
    callback({
      ...e,
      ...normalized,
    });
  }, wait);

  useEffect(() => {
    const el = ref.current;
    el.addEventListener('wheel', listener, { passive: true });
    return () => {
      el.removeEventListener('wheel', listener);
    };
  });
};

export default useScroll;
