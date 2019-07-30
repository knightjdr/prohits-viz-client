import { useState, useEffect } from 'react';

import debounce from '../../utils/debounce';

const isSmallScreen = size => window.innerWidth < size;

const useSmallScreen = (wait = 50, size = 800) => {
  const [smallScreen, setSmallScreen] = useState(isSmallScreen(size));

  const listener = debounce(() => {
    setSmallScreen(isSmallScreen(size));
  }, wait);

  useEffect(() => {
    window.addEventListener('resize', listener);
    return () => {
      window.removeEventListener('resize', listener);
    };
  });

  return smallScreen;
};

export default useSmallScreen;
