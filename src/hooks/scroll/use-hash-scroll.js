import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const retryLimit = 20;

const useHashScroll = () => {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash === '') {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace('#', '');
      let retries = 0;
      const scroll = () => {
        retries += 1;
        if (retries > retryLimit) {
          return;
        }
        const element = document.getElementById(id);
        if (element) {
          setTimeout(() => element.scrollIntoView(), 0);
        } else {
          setTimeout(scroll, 100);
        }
      };
      scroll();
    }
  }, [pathname, hash, key]);
};

export default useHashScroll;
