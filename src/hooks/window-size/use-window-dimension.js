import { useState, useEffect } from 'react';

import debounce from '../../utils/debounce';

const windowDimension = () => ({
  height: window.innerHeight,
  width: window.innerWidth,
});

const useWindowDimension = (wait = 50) => {
  const [size, setSize] = useState(windowDimension());

  const listener = debounce(() => {
    setSize(windowDimension());
  }, wait);

  useEffect(() => {
    window.addEventListener('resize', listener);
    return () => {
      window.removeEventListener('resize', listener);
    };
  });

  return size;
};

export default useWindowDimension;
