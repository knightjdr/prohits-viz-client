import { useRef } from 'react';

import createRoot from './create-root';
import useOnMount from '../on-mount/use-on-mount';

const usePortal = (id) => {
  const root = createRoot(id);
  const portalRef = useRef(root);

  useOnMount(() => {
    const portal = portalRef.current;
    return () => {
      portal.remove();
    };
  });

  return portalRef.current;
};

export default usePortal;
