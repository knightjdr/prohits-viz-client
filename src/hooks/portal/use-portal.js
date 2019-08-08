import { useEffect, useRef } from 'react';

import createRoot from './create-root';

const usePortal = (id) => {
  const root = createRoot(id);
  const portalRef = useRef(root);

  useEffect(() => {
    const portal = portalRef.current;
    return () => {
      portal.remove();
    };
  }, []);

  return portalRef.current;
};

export default usePortal;
