import { useEffect } from 'react';

const useOnMount = (f) => useEffect(f, []);

export default useOnMount;
